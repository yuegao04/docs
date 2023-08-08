# High Availability Deployment

Applicable for production scenarios.

> Prerequisites:
> - A Kubernetes cluster is required as the runtime cluster.
> - A Linux server with at least 4 CPU cores, 8Gi memory.
> - At least 50GB of free disk space.
> - Ports 80 and 443 are opened on the server.
> - Visit the [official website](https://seal.io/trial.html) to apply for a trial product image.

You can fill in the following YAML with relevant information and use the Kubectl Apply command to complete the High Availability Deployment.

```shell
export TRYSEAL_PASSWORD=""; cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Namespace
metadata:
  name: seal-system
  labels:
    "app.kubernetes.io/part-of": "seal"
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: seal-system
  name: seal
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "entrance"
spec:
  defaultBackend:
    service:
      name: app-manager
      port:
        number: 80
---
apiVersion: v1
kind: Secret
metadata:
  namespace: seal-system
  name: seal-dockerhub-credential
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "configuration"
type: kubernetes.io/dockerconfigjson
stringData:
  .dockerconfigjson: |
    {"auths":{"https://index.docker.io/v1/":{"username":"tryseal","password":"${TRYSEAL_PASSWORD}"}}}
---
apiVersion: v1
kind: Secret
metadata:
  namespace: seal-system
  name: seal
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "configuration"
stringData:
  enable_tls: "false"
  db_driver: "postgres"
  db_user: "root"
  db_password: "Root123"
  db_name: "seal"
---


# Database
#
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: seal-system
  name: database-script
data:
  "init.sh": |
    #!/usr/bin/env bash
    
    set -o errexit
    set -o nounset
    set -o pipefail
    
    if [[ ! -d \${PGDATA} ]]; then
      mkdir -p \${PGDATA}
      chown 999:999 \${PGDATA}
    fi

  "probe.sh": |
    #!/usr/bin/env bash
    
    set -o errexit
    set -o nounset
    set -o pipefail
    
    psql --no-password --username=\${POSTGRES_USER} --dbname=\${POSTGRES_DB} --command="SELECT 1"

---
apiVersion: v1
kind: Service
metadata:
  namespace: seal-system
  name: database
spec:
  selector:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "database"
  ports:
    - name: conn
      port: 5432
      targetPort: conn
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  namespace: seal-system
  name: database
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "database"
spec:
  storageClassName: standard
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 8Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: seal-system
  name: database
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "database"
    "app.kubernetes.io/name": "postgres"
spec:
  strategy:
    type: Recreate
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "seal"
      "app.kubernetes.io/component": "database"
      "app.kubernetes.io/name": "postgres"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "seal"
        "app.kubernetes.io/component": "database"
        "app.kubernetes.io/name": "postgres"
    spec:
      automountServiceAccountToken: false
      restartPolicy: Always
      initContainers:
        - name: init
          image: postgres:14.8
          imagePullPolicy: IfNotPresent
          command:
            - /script/init.sh
          env:
            - name: PGDATA
              value: /var/lib/postgresql/data/pgdata
          volumeMounts:
            - name: script
              mountPath: /script
            - name: data
              mountPath: /var/lib/postgresql/data
      containers:
        - name: postgres
          image: postgres:14.8
          imagePullPolicy: IfNotPresent
          resources:
            limits:
              cpu: '4'
              memory: '8Gi'
            requests:
              cpu: '500m'
              memory: '512Mi'
          securityContext:
            runAsUser: 999
          ports:
            - name: conn
              containerPort: 5432
          env:
            - name: POSTGRES_USER
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_user
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_password
            - name: POSTGRES_DB
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_name
            - name: PGDATA
              value: /var/lib/postgresql/data/pgdata
          startupProbe:
            failureThreshold: 10
            periodSeconds: 5
            exec:
              command:
                - /script/probe.sh
          readinessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 5
            exec:
              command:
                - /script/probe.sh
          livenessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 10
            exec:
              command:
                - /script/probe.sh
          volumeMounts:
            - name: script
              mountPath: /script
            - name: data
              mountPath: /var/lib/postgresql/data
      volumes:
        - name: script
          configMap:
            name: database-script
            defaultMode: 0555
        - name: data
          persistentVolumeClaim:
            claimName: database
---


# Identity Access Manager
#
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: seal-system
  name: identity-access-manager-script
data:
  "init.sh": |
    #!/usr/bin/env bash
    
    set -o errexit
    set -o nounset
    set -o pipefail
    
    # validate database
    set +o errexit
    while true; do
      if psql --command="SELECT 1" "\${DB_SOURCE}" >/dev/null 2>&1; then
        break
      fi
      echo "waiting db to be ready ..."
      sleep 2s
    done
    set -o errexit
    
    # mutate app configuration
    cp -f /conf/app.conf app.conf
    sed -i '/^tableNamePrefix =.*/d' app.conf
    echo "tableNamePrefix = casdoor_" >>app.conf
    sed -i '/^driverName =.*/d' app.conf
    echo "driverName = \"\${DB_DRIVER}\"" >>app.conf
    sed -i '/^dataSourceName =.*/d' app.conf
    echo "dataSourceName = \"\${DB_SOURCE}\"" >>app.conf
    sed -i '/^sessionConfig =.*/d' app.conf
    echo 'sessionConfig = {"enableSetCookie":true,"cookieName":"casdoor_session_id","cookieLifeTime":3600,"providerConfig":"/var/run/casdoor","gclifetime":3600,"domain":"","secure":false,"disableHTTPOnly":false}' >>app.conf
    sed "s#\${DB_PASSWORD}#***#g" app.conf

---
apiVersion: v1
kind: Service
metadata:
  namespace: seal-system
  name: identity-access-manager
spec:
  selector:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "identity-access-manager"
  ports:
    - name: http
      port: 8000
      targetPort: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: seal-system
  name: identity-access-manager
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "identity-access-manager"
    "app.kubernetes.io/name": "casdoor"
spec:
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "seal"
      "app.kubernetes.io/component": "identity-access-manager"
      "app.kubernetes.io/name": "casdoor"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "seal"
        "app.kubernetes.io/component": "identity-access-manager"
        "app.kubernetes.io/name": "casdoor"
    spec:
      automountServiceAccountToken: false
      restartPolicy: Always
      initContainers:
        - name: init
          image: sealio/casdoor:v1.344.0-seal.1
          imagePullPolicy: IfNotPresent
          workingDir: /tmp/conf
          command:
            - /script/init.sh
          env:
            - name: DB_DRIVER
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_driver
            - name: DB_USER
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_user
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_password
            - name: DB_NAME
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_name
            - name: DB_SOURCE
              value: \$(DB_DRIVER)://\$(DB_USER):\$(DB_PASSWORD)@database:5432/\$(DB_NAME)?sslmode=disable
          volumeMounts:
            - name: script
              mountPath: /script
            - name: config
              mountPath: /tmp/conf
      containers:
        - name: casdoor
          image: sealio/casdoor:v1.344.0-seal.1
          imagePullPolicy: IfNotPresent
          resources:
            limits:
              cpu: '2'
              memory: '4Gi'
            requests:
              cpu: '500m'
              memory: '512Mi'
          workingDir: /
          command:
            - /casdoor
            - --createDatabase=true
          ports:
            - name: http
              containerPort: 8000
          startupProbe:
            failureThreshold: 10
            periodSeconds: 5

            tcpSocket:
              port: 8000
          readinessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 5
            tcpSocket:
              port: 8000
          livenessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 10
            tcpSocket:
              port: 8000
          volumeMounts:
            - name: config
              mountPath: /conf
            - name: data
              mountPath: /var/run/casdoor
      volumes:
        - name: script
          configMap:
            name: identity-access-manager-script
            defaultMode: 0500
        - name: config
          emptyDir: { }
        - name: data
          emptyDir: { }
---


# App Manager
#
---
apiVersion: v1
kind: ServiceAccount
metadata:
  namespace: seal-system
  name: app-manager
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: seal-system
  name: app-manager
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
rules:
  - apiGroups:
      - "batch"
    resources:
      - "jobs"
    verbs:
      - "*"
  - apiGroups:
      - ""
    resources:
      - "secrets"
      - "pods"
      - "pods/log"
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: seal-system
  name: app-manager
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
subjects:
  - kind: ServiceAccount
    name: app-manager
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: app-manager
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  namespace: seal-system
  name: app-manager
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
spec:
  storageClassName: standard
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
---
apiVersion: v1
kind: Service
metadata:
  namespace: seal-system
  name: app-manager
spec:
  selector:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
  sessionAffinity: ClientIP
  ports:
    - name: http
      port: 80
      targetPort: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: seal-system
  name: app-manager
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
    "app.kubernetes.io/name": "seal-server"
spec:
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "seal"
      "app.kubernetes.io/component": "app-manager"
      "app.kubernetes.io/name": "seal-server"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "seal"
        "app.kubernetes.io/component": "app-manager"
        "app.kubernetes.io/name": "seal-server"
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
            - weight: 100
              podAffinityTerm:
                topologyKey: "kubernetes.io/hostname"
                labelSelector:
                  matchExpressions:
                    - key: "app.kubernetes.io/component"
                      operator: In
                      values:
                        - "app-manager"
                    - key: "app.kubernetes.io/part-of"
                      operator: In
                      values:
                        - "seal"
                    - key: "app.kubernetes.io/name"
                      operator: In
                      values:
                        - "seal-server"
      restartPolicy: Always
      serviceAccountName: app-manager
      imagePullSecrets:
        - name: seal-dockerhub-credential
      containers:
        - name: seal-server
          image: sealio/seal-server:main
          imagePullPolicy: Always
          resources:
            limits:
              cpu: '4'
              memory: '8Gi'
            requests:
              cpu: '500m'
              memory: '512Mi'
          env:
            - name: DB_DRIVER
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_driver
            - name: DB_USER
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_user
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_password
            - name: DB_NAME
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: db_name
            - name: SERVER_ENABLE_TLS
              valueFrom:
                secretKeyRef:
                  name: seal
                  key: enable_tls
            - name: SERVER_DATA_SOURCE_ADDRESS
              value: \$(DB_DRIVER)://\$(DB_USER):\$(DB_PASSWORD)@database:5432/\$(DB_NAME)?sslmode=disable
            - name: SERVER_CASDOOR_SERVER
              value: http://identity-access-manager:8000
          ports:
            - name: http
              containerPort: 80
            - name: https
              containerPort: 443
          startupProbe:
            failureThreshold: 10
            periodSeconds: 5
            httpGet:
              port: 80
              path: /readyz
          readinessProbe:
            failureThreshold: 3
            timeoutSeconds: 5
            periodSeconds: 5
            httpGet:
              port: 80
              path: /readyz
          livenessProbe:
            failureThreshold: 10
            timeoutSeconds: 5
            periodSeconds: 10
            httpGet:
              port: 80
              path: /livez
          volumeMounts:
            - name: custom-tls
              mountPath: /etc/seal/ssl
            - name: data
              mountPath: /var/run/seal
      volumes:
        - name: custom-tls
          secret:
            secretName: seal-custom-tls
            optional: true
        - name: data
          persistentVolumeClaim:
            claimName: app-manager

EOF
```

## Configuring TLS

### Default method, using TLS termination

[TLS termination](https://en.wikipedia.org/wiki/TLS_termination_proxy) is usually performed by a reverse proxy service, that is, the Ingress Service of the cluster provides the TLS service.

> Note:
> - The reverse proxy service can use HTTP requests to Seal, and you should set Seal's session cookie `seal_session` to `Secure: true` to prevent man-in-the-middle attacks.


### Using a self-signed system certificate (non-publicly trusted)

As the HTTPs service certificate (chain) is issued by a non-publicly trusted CA (created by Seal), users need to confirm the usage risk before accessing the UI.

1. Use Kubectl Apply to add a NodePort type Service.

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Service
metadata:
  namespace: seal-system
  name: seal
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "entrance"
spec:
  selector:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
  sessionAffinity: ClientIP
  type: NodePort
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https

EOF
```

2. Use Kubectl Patch to modify the TLS option in Secret.

```shell
kubectl -n seal-system patch secret seal --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. Use Kubectl Delete to delete Ingress.

```shell
kubectl -n seal-system delete ingress seal
```

4. Use Kubectl Rollout to restart AppManager.

```shell
kubectl -n seal-system rollout restart deployment/app-manager
```

### Use [ACME](https://letsencrypt.org/docs/challenge-types) to generate a publicly trusted certificate

> Note:
> - If the cluster can perform ACME challenges at the Ingress Controller level via CertManager, please refer to "Using TLS Termination".

You can use Let's Encrypt service to perform the challenges. After successful challenges, Let's Encrypt issues a 90-day HTTPs service certificate (chain). The renewal of this certificate (chain) is performed by Seal automatically.

> Prerequisites:
> - The cluster should support the LoadBalancer type of Service.
> - Provide a domain name, for example, `seal.mydomain.com`.

1. Use Kubectl Apply to add a LoadBalancer type of Service.

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Service
metadata:
  namespace: seal-system
  name: seal
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "entrance"
spec:
  selector:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "app-manager"
  sessionAffinity: ClientIP
  type: LoadBalancer
  ports:
    - name: http
      port: 80
      targetPort: http
    - name: https
      port: 443
      targetPort: https

EOF
```

2. Use the Kubectl Get command to wait for the LoadBalancer type of service to get an Ingress IP.

```shell
until [[ -n $(kubectl -n seal-system get service seal --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}") ]]; do :; done && \
  kubectl get service seal -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'

```

3. On the DNS configuration panel, add the above A Record pointing to the output IP address.

4. Use Kubectl Patch to modify the TLS option in Secret.

```shell
kubectl -n seal-system patch secret seal --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

5. Use Kubectl Delete to delete Ingress.

```shell
kubectl -n seal-system delete ingress seal
```

6. Use Kubectl Patch to modify the environment variables of AppManager to respond to the ACME challenge.

```shell
export DNS_NAME=""; kubectl -n seal-system patch deployment app-manager --type json -p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_TLS_AUTO_CERT_DOMAINS\",\"value\":\"${DNS_NAME}\"}}]"
```

### Using a custom certificate

A custom certificate is an HTTPs service certificate (chain) issued by a publicly trusted or non-publicly trusted CA certificate.

> Prerequisites:
> - Get the content of the HTTPS service private key PEM file, note it as PRIVATE_KEY_FILE_CONTENT.
> - Get the content of the HTTPS service certificate (chain) PEM file, note it as CERT_FILE_CONTENT.
> - If there is a (non-publicly trusted) CA certificate, get the corresponding PEM file content and concatenate it to CERT_FILE_CONTENT.

1. Use the Kubectl Apply command to add a Secret with custom certificate content.

```shell
export PRIVATE_KEY_FILE_CONTENT=""; export CERT_FILE_CONTENT=""; cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Secret
metadata:
  namespace: seal-system
  name: seal-custom-tls
  labels:
    "app.kubernetes.io/part-of": "seal"
    "app.kubernetes.io/component": "configuration"
type: kubernetes.io/tls
stringData:
  "tls.crt": "\${CERT_FILE_CONTENT}"
  "tls.key": "\${PRIVATE_KEY_FILE_CONTENT}"

EOF
```

2. Use Kubectl Patch to modify the TLS option in Secret.

```shell
kubectl -n seal-system patch secret seal --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. Use Kubectl Delete to delete Ingress.

```shell
kubectl -n seal-system delete ingress seal
```

4. Use Kubectl Patch to modify the environment variables of AppManager to enable the custom certificate.

```shell
kubectl -n seal-system patch deployment app-manager --type json \
-p '[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_CERT_FILE","value":"/etc/seal/ssl/tls.crt"}},{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_PRIVATE_KEY_FILE","value":"/etc/seal/ssl/tls.key"}}]'
```

## Configuring the Database

Seal is based on the [PostgreSQL](https://www.postgresql.org/) relational database for data storage.

By default, Seal will run an instance of PostgresSQL within the running container, which is very convenient and easy to use, but may potentially lose data. Hence, users can provide an external PostgreSQL source while starting Seal to prevent data loss.

> Note:
> - The following commands override previous variables by repeatedly adding duplicate environment variables, which may receive a warning from Kubernetes.

1. Use Kubectl Patch to modify the environment variables of IdentifyAccessManager to connect to the external data source.

```shell
export DB_SOURCE=""; kubectl -n seal-system patch deployment identity-access-manager --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/initContainers/0/env/-\",\"value\":{\"name\":\"DB_SOURCE\",\"value\":\"${DB_SOURCE}\"}}]"
```

2. Use Kubectl Patch to modify the environment variables of AppManager to connect to the external data source.

```shell
export DB_SOURCE=""; kubectl -n seal-system patch deployment app-manager --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_DATA_SOURCE_ADDRESS\",\"value\":\"${DB_SOURCE}\"}}]"
```
