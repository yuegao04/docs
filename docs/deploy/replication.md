---
sidebar_position: 2
---

# High Availability Installation

If you intend to run Walrus in production, you need to follow the high-avaialbility installation.

> Prerequisites:
> - An highly-available Kubernetes cluster is required as the runtime cluster.
> - Each Kubernetes node should have at least 4 CPU cores and 8GiB memory.
> - At least 50GB of free disk space on each Kubernetes node.
> - Ports 80 and 443 are opened on the nodes.

You can fill in the following YAML with relevant information and use the `kubectl apply` command to complete the high availability deployment.

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Namespace
metadata:
  name: walrus-system
  labels:
    "app.kubernetes.io/part-of": "walrus"
---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "entrance"
spec:
  defaultBackend:
    service:
      name: walrus
      port:
        number: 80
---
apiVersion: v1
kind: Secret
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "configuration"
stringData:
  enable_tls: "false"
  db_driver: "postgres"
  db_user: "root"
  db_password: "Root123"
  db_name: "walrus"
---


# Database
#
---
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: walrus-system
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
  namespace: walrus-system
  name: database
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "database"
  ports:
    - name: conn
      port: 5432
      targetPort: conn
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  namespace: walrus-system
  name: database
  labels:
    "app.kubernetes.io/part-of": "walrus"
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
  namespace: walrus-system
  name: database
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "database"
    "app.kubernetes.io/name": "postgres"
spec:
  strategy:
    type: Recreate
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "walrus"
      "app.kubernetes.io/component": "database"
      "app.kubernetes.io/name": "postgres"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "walrus"
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
                  name: walrus
                  key: db_user
            - name: POSTGRES_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_password
            - name: POSTGRES_DB
              valueFrom:
                secretKeyRef:
                  name: walrus
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
  namespace: walrus-system
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
  namespace: walrus-system
  name: identity-access-manager
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "identity-access-manager"
  ports:
    - name: http
      port: 8000
      targetPort: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: walrus-system
  name: identity-access-manager
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "identity-access-manager"
    "app.kubernetes.io/name": "casdoor"
spec:
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "walrus"
      "app.kubernetes.io/component": "identity-access-manager"
      "app.kubernetes.io/name": "casdoor"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "walrus"
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
                  name: walrus
                  key: db_driver
            - name: DB_USER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_user
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_password
            - name: DB_NAME
              valueFrom:
                secretKeyRef:
                  name: walrus
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


# Walrus server
#
---
apiVersion: v1
kind: ServiceAccount
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
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
      - "events"
    verbs:
      - "*"
  - apiGroups:
      - "coordination.k8s.io"
    resources:
      - "leases"
    verbs:
      - "*"
---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
subjects:
  - kind: ServiceAccount
    name: walrus
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: walrus
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
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
  namespace: walrus-system
  name: walrus
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
  sessionAffinity: ClientIP
  ports:
    - name: http
      port: 80
      targetPort: http
---
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
    "app.kubernetes.io/name": "walrus-server"
spec:
  replicas: 1
  selector:
    matchLabels:
      "app.kubernetes.io/part-of": "walrus"
      "app.kubernetes.io/component": "walrus"
      "app.kubernetes.io/name": "walrus-server"
  template:
    metadata:
      labels:
        "app.kubernetes.io/part-of": "walrus"
        "app.kubernetes.io/component": "walrus"
        "app.kubernetes.io/name": "walrus-server"
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
                        - "walrus"
                    - key: "app.kubernetes.io/part-of"
                      operator: In
                      values:
                        - "walrus"
                    - key: "app.kubernetes.io/name"
                      operator: In
                      values:
                        - "walrus-server"
      restartPolicy: Always
      serviceAccountName: walrus
      containers:
        - name: walrus-server
          image: sealio/walrus:v0.3.0
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
                  name: walrus
                  key: db_driver
            - name: DB_USER
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_user
            - name: DB_PASSWORD
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_password
            - name: DB_NAME
              valueFrom:
                secretKeyRef:
                  name: walrus
                  key: db_name
            - name: SERVER_ENABLE_TLS
              valueFrom:
                secretKeyRef:
                  name: walrus
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
              mountPath: /etc/walrus/ssl
            - name: data
              mountPath: /var/run/walrus
      volumes:
        - name: custom-tls
          secret:
            secretName: walrus-custom-tls
            optional: true
        - name: data
          persistentVolumeClaim:
            claimName: walrus

EOF
```

## Configuring TLS

### Default method, using TLS termination

[TLS termination](https://en.wikipedia.org/wiki/TLS_termination_proxy) is usually performed by a reverse proxy service, that is, the Ingress Service of the cluster provides the TLS service.

> Note:
> - The reverse proxy service can use HTTP requests to Walrus, and you should set Walrus's session cookie `walrus_session` to `Secure: true` to prevent man-in-the-middle attacks.


### Using a Self-Signed Certificate

Walrus can issue a self-signed HTTPS certificate for test purposes.

1. Use `kubectl apply` to add a NodePort type Service.

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "entrance"
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
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

2. Use `kubectl patch` to modify the TLS option in Secret.

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. Use `kubectl delete` to delete Ingress.

```shell
kubectl -n walrus-system delete ingress walrus
```

4. Use `kubectl rollout` to restart Walrus.

```shell
kubectl -n walrus-system rollout restart deployment/walrus
```

### Use [ACME](https://letsencrypt.org/docs/challenge-types) to Generate Trusted Certificate

> Note:
> - If the cluster can perform ACME challenges at the Ingress Controller level via CertManager, please refer to "Using TLS Termination".

You can use Let's Encrypt to issue a 90-day HTTPS certificate. The renewal of this certificate is performed by Walrus automatically.

> Prerequisites:
> - The cluster should support the LoadBalancer type of Service.
> - Provide a domain name, for example, `walrus.mydomain.com`.

1. Use `kubectl apply` to add a LoadBalancer type of Service.

```shell
cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Service
metadata:
  namespace: walrus-system
  name: walrus
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "entrance"
spec:
  selector:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "walrus"
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

2. Use the `kubectl get` command to wait for the LoadBalancer type of service to get an Ingress IP.

```shell
until [[ -n $(kubectl -n walrus-system get service walrus --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}") ]]; do :; done && \
  kubectl get service walrus -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'

```

3. On the DNS configuration panel, add the above A Record pointing to the output IP address.

4. Use `kubectl patch` to modify the TLS option in Secret.

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

5. Use `kubectl delete` to delete Ingress.

```shell
kubectl -n walrus-system delete ingress walrus
```

6. Use `kubectl patch` to modify the environment variables of Walrus to respond to the ACME challenge.

```shell
export DNS_NAME=""; kubectl -n walrus-system patch deployment walrus --type json -p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_TLS_AUTO_CERT_DOMAINS\",\"value\":\"${DNS_NAME}\"}}]"
```

### Using a Custom Certificate

A custom certificate is an HTTPS  certificate issued by a certificate authority.

> Prerequisites:
> - Get the content of the HTTPS service private key PEM file, note it as PRIVATE_KEY_FILE_CONTENT.
> - Get the content of the HTTPS service certificate (chain) PEM file, note it as CERT_FILE_CONTENT.
> - If there is a (non-publicly trusted) CA certificate, get the corresponding PEM file content and concatenate it to CERT_FILE_CONTENT.

1. Use the `kubectl apply` command to add a Secret with custom certificate content.

```shell
export PRIVATE_KEY_FILE_CONTENT=""; export CERT_FILE_CONTENT=""; cat <<EOF | kubectl apply -f -

---
apiVersion: v1
kind: Secret
metadata:
  namespace: walrus-system
  name: walrus-custom-tls
  labels:
    "app.kubernetes.io/part-of": "walrus"
    "app.kubernetes.io/component": "configuration"
type: kubernetes.io/tls
stringData:
  "tls.crt": "\${CERT_FILE_CONTENT}"
  "tls.key": "\${PRIVATE_KEY_FILE_CONTENT}"

EOF
```

2. Use `kubectl patch` to modify the TLS option in Secret.

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. Use `kubectl delete` to delete Ingress.

```shell
kubectl -n walrus-system delete ingress walrus
```

4. Use `kubectl patch` to modify the environment variables of Walrus to enable the custom certificate.

```shell
kubectl -n walrus-system patch deployment walrus --type json \
-p '[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_CERT_FILE","value":"/etc/walrus/ssl/tls.crt"}},{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_PRIVATE_KEY_FILE","value":"/etc/walrus/ssl/tls.key"}}]'
```

## Configuring the Database

Walrus relies on [PostgreSQL](https://www.postgresql.org/) relational database for data storage.

By default, Walrus will run an instance of PostgresSQL within the running container, which is can lead to potential data loss. In an HA install, users must provide an external PostgreSQL instance.

> Note:
> - The following commands override previous variables by repeatedly adding duplicate environment variables, which may receive a warning from Kubernetes.

1. Use `kubectl patch` to modify the environment variables of IdentifyAccessManager to connect to the external data source.

```shell
export DB_SOURCE=""; kubectl -n walrus-system patch deployment identity-access-manager --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/initContainers/0/env/-\",\"value\":{\"name\":\"DB_SOURCE\",\"value\":\"${DB_SOURCE}\"}}]"
```

2. Use `kubectl patch` to modify the environment variables of Walrus to connect to the external data source.

```shell
export DB_SOURCE=""; kubectl -n walrus-system patch deployment walrus --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_DATA_SOURCE_ADDRESS\",\"value\":\"${DB_SOURCE}\"}}]"
```
