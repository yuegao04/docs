---
sidebar_position: 2
---

# 高可用部署

适用于生产场景。

> 前置条件：
> - 提供Kubernetes集群作为运行集群。
> - 资源不少于4CPU，8Gi内存的Linux服务器。
> - 至少50GB的空余磁盘空间。
> - 服务器开放80和443端口。

填充以下 YAML 的待填内容，使用 Kubectl Apply 指令即可完成高可用部署。

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

## 配置TLS

### 默认方式，使用 TLS 终止

[TLS 终止](https://en.wikipedia.org/wiki/TLS_termination_proxy)，通常由反向代理服务执行，即集群的 Ingress Service 提供TLS服务。

> 注意：
> - 反向代理服务到Walrus的链路中可使用HTTP请求，并且强化Walrus的会话Cookie`walrus_session`为`Secure: true`以避免中间人攻击。


### 使用系统（非公开受信）的自签证书

由于HTTPs服务证书（链）由非公开受信的CA（Walrus启动创建）签发，用户访问UI前需要在浏览器确认使用风险。

1. 使用 Kubectl Apply 添加NodePort类型的Service。

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

2. 使用 Kubectl Patch 修改Secret里的TLS开关。

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. 使用 Kubectl Delete 删除Ingress。

```shell
kubectl -n walrus-system delete ingress walrus
```

4. 使用 Kubectl Rollout 重启 Walrus。

```shell
kubectl -n walrus-system rollout restart deployment/walrus
```

### 使用 [ACME](https://letsencrypt.org/docs/challenge-types) 挑战生成（公开受信）的证书

> 注意：
> - 如果集群可以通过 CertManager 在 Ingress Controller 的层面进行 ACME 挑战，请参考"使用TLS终止"。

通过 Let's Encrypt 服务来执行挑战，挑战成功后由 Let's Encrypt 颁发一个为期90天的 HTTPs 服务证书（链）。该证书（链）的续约工作，由 Walrus 自动完成。

> 前置条件：
> - 集群支持 LoadBalancer 类型的 Service。
> - 提供一个域名，例如，`walrus.mydomain.com`。

1. 使用 Kubectl Apply 添加LoadBalancer类型的Service。

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

2. 使用 Kubectl Get 指令等待LoadBalancer类型的Service获得一个Ingress IP。

```shell
until [[ -n $(kubectl -n walrus-system get service walrus --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}") ]]; do :; done && \
  kubectl get service walrus -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'

```

3. 在DNS配置面板上，添加上述 A Record 指向上面输出的 IP 地址。

4. 使用 Kubectl Patch 修改Secret里的TLS开关。

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

5. 使用 Kubectl Delete 删除Ingress。

```shell
kubectl -n walrus-system delete ingress walrus
```

6. 使用 Kubectl Patch 修改Walrus的环境变量，以应答ACME挑战。

```shell
export DNS_NAME=""; kubectl -n walrus-system patch deployment walrus --type json -p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_TLS_AUTO_CERT_DOMAINS\",\"value\":\"${DNS_NAME}\"}}]"
```

### 使用自定义的证书

自定义的证书是指，使用公开受信或非公开受信的CA证书，签发的HTTPs服务证书（链）。

> 前置条件：
> - 获取HTTPs服务私钥PEM文件的内容，记作PRIVATE_KEY_FILE_CONTENT。
> - 获取HTTPs服务证书（链）PEM文件的内容，记作CERT_FILE_CONTENT。
> - 如果有（非公开受信的）CA证书，获取对应PEM文件的内容，串联到CERT_FILE_CONTENT后。

1. 使用 Kubectl Apply 指令添加含有自定义证书内容的Secret。

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

2. 使用 Kubectl Patch 修改Secret里的TLS开关。

```shell
kubectl -n walrus-system patch secret walrus --type='json' -p='[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]'
```

3. 使用 Kubectl Delete 删除Ingress。

```shell
kubectl -n walrus-system delete ingress walrus
```

4. 使用 Kubectl Patch 修改Walrus的环境变量，以启用自定义的证书。

```shell
kubectl -n walrus-system patch deployment walrus --type json \
-p '[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_CERT_FILE","value":"/etc/walrus/ssl/tls.crt"}},{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_PRIVATE_KEY_FILE","value":"/etc/walrus/ssl/tls.key"}}]'
```

## 配置数据库

Walrus基于[PostgreSQL](https://www.postgresql.org/)关系型数据库实现数据存储。

默认情况下，Walrus会在运行容器内启动一个 PostgresSQL 的实例，这非常便捷且易于使用，但可能面临使用数据的丢失。为此，用户可以在启动Walrus时，提供外部的PostgreSQL源，以避免使用数据的丢失。

> 注意：
> - 以下指令通过重复添加重名环境变量覆盖前序的变量，可能收到一个来自Kubernetes的警告提示。

1. 使用 Kubectl Patch 修改IdentifyAccessManager的环境变量，以连接外部数据源。

```shell
export DB_SOURCE=""; kubectl -n walrus-system patch deployment identity-access-manager --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/initContainers/0/env/-\",\"value\":{\"name\":\"DB_SOURCE\",\"value\":\"${DB_SOURCE}\"}}]"
```

2. 使用 Kubectl Patch 修改Walrus的环境变量，以连接外部数据源。

```shell
export DB_SOURCE=""; kubectl -n walrus-system patch deployment walrus --type json \
-p "[{\"op\":\"add\",\"path\":\"/spec/template/spec/containers/0/env/-\",\"value\":{\"name\":\"SERVER_DATA_SOURCE_ADDRESS\",\"value\":\"${DB_SOURCE}\"}}]"
```
