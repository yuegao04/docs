"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1073],{39931:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var t=a(87462),s=(a(67294),a(3905));const r={sidebar_position:2},o="\u9ad8\u53ef\u7528\u90e8\u7f72",l={unversionedId:"deploy/replication",id:"deploy/replication",title:"\u9ad8\u53ef\u7528\u90e8\u7f72",description:"\u9002\u7528\u4e8e\u751f\u4ea7\u573a\u666f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/deploy/replication.md",sourceDirName:"deploy",slug:"/deploy/replication",permalink:"/docs/zh/deploy/replication",draft:!1,editUrl:"https://github.com/seal-io/docs/edit/main/docs/deploy/replication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"\u5355\u5b9e\u4f8b\u90e8\u7f72",permalink:"/docs/zh/deploy/standalone"},next:{title:"Application Management",permalink:"/docs/zh/category/application-management"}},p={},i=[{value:"\u914d\u7f6eTLS",id:"\u914d\u7f6etls",level:2},{value:"\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u4f7f\u7528 TLS \u7ec8\u6b62",id:"\u9ed8\u8ba4\u65b9\u5f0f\u4f7f\u7528-tls-\u7ec8\u6b62",level:3},{value:"\u4f7f\u7528\u7cfb\u7edf\uff08\u975e\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u81ea\u7b7e\u8bc1\u4e66",id:"\u4f7f\u7528\u7cfb\u7edf\u975e\u516c\u5f00\u53d7\u4fe1\u7684\u81ea\u7b7e\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528 ACME \u6311\u6218\u751f\u6210\uff08\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u8bc1\u4e66",id:"\u4f7f\u7528-acme-\u6311\u6218\u751f\u6210\u516c\u5f00\u53d7\u4fe1\u7684\u8bc1\u4e66",level:3},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66",level:3},{value:"\u914d\u7f6e\u6570\u636e\u5e93",id:"\u914d\u7f6e\u6570\u636e\u5e93",level:2}],u={toc:i};function c(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u9ad8\u53ef\u7528\u90e8\u7f72"},"\u9ad8\u53ef\u7528\u90e8\u7f72"),(0,s.kt)("p",null,"\u9002\u7528\u4e8e\u751f\u4ea7\u573a\u666f\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u63d0\u4f9bKubernetes\u96c6\u7fa4\u4f5c\u4e3a\u8fd0\u884c\u96c6\u7fa4\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u4e0d\u5c11\u4e8e4CPU\uff0c8Gi\u5185\u5b58\u7684Linux\u670d\u52a1\u5668\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u81f3\u5c1150GB\u7684\u7a7a\u4f59\u78c1\u76d8\u7a7a\u95f4\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u5f00\u653e80\u548c443\u7aef\u53e3\u3002"))),(0,s.kt)("p",null,"\u586b\u5145\u4ee5\u4e0b YAML \u7684\u5f85\u586b\u5185\u5bb9\uff0c\u4f7f\u7528 Kubectl Apply \u6307\u4ee4\u5373\u53ef\u5b8c\u6210\u9ad8\u53ef\u7528\u90e8\u7f72\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: walrus-system\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "entrance"\nspec:\n  defaultBackend:\n    service:\n      name: walrus\n      port:\n        number: 80\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "configuration"\nstringData:\n  enable_tls: "false"\n  db_driver: "postgres"\n  db_user: "root"\n  db_password: "Root123"\n  db_name: "walrus"\n---\n\n\n# Database\n#\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: walrus-system\n  name: database-script\ndata:\n  "init.sh": |\n    #!/usr/bin/env bash\n    \n    set -o errexit\n    set -o nounset\n    set -o pipefail\n    \n    if [[ ! -d \\${PGDATA} ]]; then\n      mkdir -p \\${PGDATA}\n      chown 999:999 \\${PGDATA}\n    fi\n\n  "probe.sh": |\n    #!/usr/bin/env bash\n    \n    set -o errexit\n    set -o nounset\n    set -o pipefail\n    \n    psql --no-password --username=\\${POSTGRES_USER} --dbname=\\${POSTGRES_DB} --command="SELECT 1"\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: walrus-system\n  name: database\nspec:\n  selector:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "database"\n  ports:\n    - name: conn\n      port: 5432\n      targetPort: conn\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  namespace: walrus-system\n  name: database\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "database"\nspec:\n  storageClassName: standard\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 8Gi\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: walrus-system\n  name: database\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "database"\n    "app.kubernetes.io/name": "postgres"\nspec:\n  strategy:\n    type: Recreate\n  replicas: 1\n  selector:\n    matchLabels:\n      "app.kubernetes.io/part-of": "walrus"\n      "app.kubernetes.io/component": "database"\n      "app.kubernetes.io/name": "postgres"\n  template:\n    metadata:\n      labels:\n        "app.kubernetes.io/part-of": "walrus"\n        "app.kubernetes.io/component": "database"\n        "app.kubernetes.io/name": "postgres"\n    spec:\n      automountServiceAccountToken: false\n      restartPolicy: Always\n      initContainers:\n        - name: init\n          image: postgres:14.8\n          imagePullPolicy: IfNotPresent\n          command:\n            - /script/init.sh\n          env:\n            - name: PGDATA\n              value: /var/lib/postgresql/data/pgdata\n          volumeMounts:\n            - name: script\n              mountPath: /script\n            - name: data\n              mountPath: /var/lib/postgresql/data\n      containers:\n        - name: postgres\n          image: postgres:14.8\n          imagePullPolicy: IfNotPresent\n          resources:\n            limits:\n              cpu: \'4\'\n              memory: \'8Gi\'\n            requests:\n              cpu: \'500m\'\n              memory: \'512Mi\'\n          securityContext:\n            runAsUser: 999\n          ports:\n            - name: conn\n              containerPort: 5432\n          env:\n            - name: POSTGRES_USER\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_user\n            - name: POSTGRES_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_password\n            - name: POSTGRES_DB\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_name\n            - name: PGDATA\n              value: /var/lib/postgresql/data/pgdata\n          startupProbe:\n            failureThreshold: 10\n            periodSeconds: 5\n            exec:\n              command:\n                - /script/probe.sh\n          readinessProbe:\n            failureThreshold: 3\n            timeoutSeconds: 5\n            periodSeconds: 5\n            exec:\n              command:\n                - /script/probe.sh\n          livenessProbe:\n            failureThreshold: 3\n            timeoutSeconds: 5\n            periodSeconds: 10\n            exec:\n              command:\n                - /script/probe.sh\n          volumeMounts:\n            - name: script\n              mountPath: /script\n            - name: data\n              mountPath: /var/lib/postgresql/data\n      volumes:\n        - name: script\n          configMap:\n            name: database-script\n            defaultMode: 0555\n        - name: data\n          persistentVolumeClaim:\n            claimName: database\n---\n\n\n# Identity Access Manager\n#\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: walrus-system\n  name: identity-access-manager-script\ndata:\n  "init.sh": |\n    #!/usr/bin/env bash\n    \n    set -o errexit\n    set -o nounset\n    set -o pipefail\n    \n    # validate database\n    set +o errexit\n    while true; do\n      if psql --command="SELECT 1" "\\${DB_SOURCE}" >/dev/null 2>&1; then\n        break\n      fi\n      echo "waiting db to be ready ..."\n      sleep 2s\n    done\n    set -o errexit\n    \n    # mutate app configuration\n    cp -f /conf/app.conf app.conf\n    sed -i \'/^tableNamePrefix =.*/d\' app.conf\n    echo "tableNamePrefix = casdoor_" >>app.conf\n    sed -i \'/^driverName =.*/d\' app.conf\n    echo "driverName = \\"\\${DB_DRIVER}\\"" >>app.conf\n    sed -i \'/^dataSourceName =.*/d\' app.conf\n    echo "dataSourceName = \\"\\${DB_SOURCE}\\"" >>app.conf\n    sed -i \'/^sessionConfig =.*/d\' app.conf\n    echo \'sessionConfig = {"enableSetCookie":true,"cookieName":"casdoor_session_id","cookieLifeTime":3600,"providerConfig":"/var/run/casdoor","gclifetime":3600,"domain":"","secure":false,"disableHTTPOnly":false}\' >>app.conf\n    sed "s#\\${DB_PASSWORD}#***#g" app.conf\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: walrus-system\n  name: identity-access-manager\nspec:\n  selector:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "identity-access-manager"\n  ports:\n    - name: http\n      port: 8000\n      targetPort: http\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: walrus-system\n  name: identity-access-manager\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "identity-access-manager"\n    "app.kubernetes.io/name": "casdoor"\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      "app.kubernetes.io/part-of": "walrus"\n      "app.kubernetes.io/component": "identity-access-manager"\n      "app.kubernetes.io/name": "casdoor"\n  template:\n    metadata:\n      labels:\n        "app.kubernetes.io/part-of": "walrus"\n        "app.kubernetes.io/component": "identity-access-manager"\n        "app.kubernetes.io/name": "casdoor"\n    spec:\n      automountServiceAccountToken: false\n      restartPolicy: Always\n      initContainers:\n        - name: init\n          image: sealio/casdoor:v1.344.0-seal.1\n          imagePullPolicy: IfNotPresent\n          workingDir: /tmp/conf\n          command:\n            - /script/init.sh\n          env:\n            - name: DB_DRIVER\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_driver\n            - name: DB_USER\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_user\n            - name: DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_password\n            - name: DB_NAME\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_name\n            - name: DB_SOURCE\n              value: \\$(DB_DRIVER)://\\$(DB_USER):\\$(DB_PASSWORD)@database:5432/\\$(DB_NAME)?sslmode=disable\n          volumeMounts:\n            - name: script\n              mountPath: /script\n            - name: config\n              mountPath: /tmp/conf\n      containers:\n        - name: casdoor\n          image: sealio/casdoor:v1.344.0-seal.1\n          imagePullPolicy: IfNotPresent\n          resources:\n            limits:\n              cpu: \'2\'\n              memory: \'4Gi\'\n            requests:\n              cpu: \'500m\'\n              memory: \'512Mi\'\n          workingDir: /\n          command:\n            - /casdoor\n            - --createDatabase=true\n          ports:\n            - name: http\n              containerPort: 8000\n          startupProbe:\n            failureThreshold: 10\n            periodSeconds: 5\n\n            tcpSocket:\n              port: 8000\n          readinessProbe:\n            failureThreshold: 3\n            timeoutSeconds: 5\n            periodSeconds: 5\n            tcpSocket:\n              port: 8000\n          livenessProbe:\n            failureThreshold: 3\n            timeoutSeconds: 5\n            periodSeconds: 10\n            tcpSocket:\n              port: 8000\n          volumeMounts:\n            - name: config\n              mountPath: /conf\n            - name: data\n              mountPath: /var/run/casdoor\n      volumes:\n        - name: script\n          configMap:\n            name: identity-access-manager-script\n            defaultMode: 0500\n        - name: config\n          emptyDir: { }\n        - name: data\n          emptyDir: { }\n---\n\n\n# Walrus server\n#\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\nrules:\n  - apiGroups:\n      - "batch"\n    resources:\n      - "jobs"\n    verbs:\n      - "*"\n  - apiGroups:\n      - ""\n    resources:\n      - "secrets"\n      - "pods"\n      - "pods/log"\n      - "events"\n    verbs:\n      - "*"\n  - apiGroups:\n      - "coordination.k8s.io"\n    resources:\n      - "leases"\n    verbs:\n      - "*"\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\nsubjects:\n  - kind: ServiceAccount\n    name: walrus\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: walrus\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\nspec:\n  storageClassName: standard\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 500Mi\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: walrus-system\n  name: walrus\nspec:\n  selector:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\n  sessionAffinity: ClientIP\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\n    "app.kubernetes.io/name": "walrus-server"\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      "app.kubernetes.io/part-of": "walrus"\n      "app.kubernetes.io/component": "walrus"\n      "app.kubernetes.io/name": "walrus-server"\n  template:\n    metadata:\n      labels:\n        "app.kubernetes.io/part-of": "walrus"\n        "app.kubernetes.io/component": "walrus"\n        "app.kubernetes.io/name": "walrus-server"\n    spec:\n      affinity:\n        podAntiAffinity:\n          preferredDuringSchedulingIgnoredDuringExecution:\n            - weight: 100\n              podAffinityTerm:\n                topologyKey: "kubernetes.io/hostname"\n                labelSelector:\n                  matchExpressions:\n                    - key: "app.kubernetes.io/component"\n                      operator: In\n                      values:\n                        - "walrus"\n                    - key: "app.kubernetes.io/part-of"\n                      operator: In\n                      values:\n                        - "walrus"\n                    - key: "app.kubernetes.io/name"\n                      operator: In\n                      values:\n                        - "walrus-server"\n      restartPolicy: Always\n      serviceAccountName: walrus\n      containers:\n        - name: walrus-server\n          image: sealio/walrus:v0.3.0\n          imagePullPolicy: Always\n          resources:\n            limits:\n              cpu: \'4\'\n              memory: \'8Gi\'\n            requests:\n              cpu: \'500m\'\n              memory: \'512Mi\'\n          env:\n            - name: DB_DRIVER\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_driver\n            - name: DB_USER\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_user\n            - name: DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_password\n            - name: DB_NAME\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: db_name\n            - name: SERVER_ENABLE_TLS\n              valueFrom:\n                secretKeyRef:\n                  name: walrus\n                  key: enable_tls\n            - name: SERVER_DATA_SOURCE_ADDRESS\n              value: \\$(DB_DRIVER)://\\$(DB_USER):\\$(DB_PASSWORD)@database:5432/\\$(DB_NAME)?sslmode=disable\n            - name: SERVER_CASDOOR_SERVER\n              value: http://identity-access-manager:8000\n          ports:\n            - name: http\n              containerPort: 80\n            - name: https\n              containerPort: 443\n          startupProbe:\n            failureThreshold: 10\n            periodSeconds: 5\n            httpGet:\n              port: 80\n              path: /readyz\n          readinessProbe:\n            failureThreshold: 3\n            timeoutSeconds: 5\n            periodSeconds: 5\n            httpGet:\n              port: 80\n              path: /readyz\n          livenessProbe:\n            failureThreshold: 10\n            timeoutSeconds: 5\n            periodSeconds: 10\n            httpGet:\n              port: 80\n              path: /livez\n          volumeMounts:\n            - name: custom-tls\n              mountPath: /etc/walrus/ssl\n            - name: data\n              mountPath: /var/run/walrus\n      volumes:\n        - name: custom-tls\n          secret:\n            secretName: walrus-custom-tls\n            optional: true\n        - name: data\n          persistentVolumeClaim:\n            claimName: walrus\n\nEOF\n')),(0,s.kt)("h2",{id:"\u914d\u7f6etls"},"\u914d\u7f6eTLS"),(0,s.kt)("h3",{id:"\u9ed8\u8ba4\u65b9\u5f0f\u4f7f\u7528-tls-\u7ec8\u6b62"},"\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u4f7f\u7528 TLS \u7ec8\u6b62"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TLS_termination_proxy"},"TLS \u7ec8\u6b62"),"\uff0c\u901a\u5e38\u7531\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u6267\u884c\uff0c\u5373\u96c6\u7fa4\u7684 Ingress Service \u63d0\u4f9bTLS\u670d\u52a1\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5230Walrus\u7684\u94fe\u8def\u4e2d\u53ef\u4f7f\u7528HTTP\u8bf7\u6c42\uff0c\u5e76\u4e14\u5f3a\u5316Walrus\u7684\u4f1a\u8bddCookie",(0,s.kt)("inlineCode",{parentName:"li"},"walrus_session"),"\u4e3a",(0,s.kt)("inlineCode",{parentName:"li"},"Secure: true"),"\u4ee5\u907f\u514d\u4e2d\u95f4\u4eba\u653b\u51fb\u3002"))),(0,s.kt)("h3",{id:"\u4f7f\u7528\u7cfb\u7edf\u975e\u516c\u5f00\u53d7\u4fe1\u7684\u81ea\u7b7e\u8bc1\u4e66"},"\u4f7f\u7528\u7cfb\u7edf\uff08\u975e\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u81ea\u7b7e\u8bc1\u4e66"),(0,s.kt)("p",null,"\u7531\u4e8eHTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u7531\u975e\u516c\u5f00\u53d7\u4fe1\u7684CA\uff08Walrus\u542f\u52a8\u521b\u5efa\uff09\u7b7e\u53d1\uff0c\u7528\u6237\u8bbf\u95eeUI\u524d\u9700\u8981\u5728\u6d4f\u89c8\u5668\u786e\u8ba4\u4f7f\u7528\u98ce\u9669\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Apply \u6dfb\u52a0NodePort\u7c7b\u578b\u7684Service\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "entrance"\nspec:\n  selector:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\n  sessionAffinity: ClientIP\n  type: NodePort\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n    - name: https\n      port: 443\n      targetPort: https\n\nEOF\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539Secret\u91cc\u7684TLS\u5f00\u5173\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n walrus-system patch secret walrus --type=\'json\' -p=\'[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]\'\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Delete \u5220\u9664Ingress\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n walrus-system delete ingress walrus\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Rollout \u91cd\u542f Walrus\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n walrus-system rollout restart deployment/walrus\n")),(0,s.kt)("h3",{id:"\u4f7f\u7528-acme-\u6311\u6218\u751f\u6210\u516c\u5f00\u53d7\u4fe1\u7684\u8bc1\u4e66"},"\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"h3",href:"https://letsencrypt.org/docs/challenge-types"},"ACME")," \u6311\u6218\u751f\u6210\uff08\u516c\u5f00\u53d7\u4fe1\uff09\u7684\u8bc1\u4e66"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},'\u5982\u679c\u96c6\u7fa4\u53ef\u4ee5\u901a\u8fc7 CertManager \u5728 Ingress Controller \u7684\u5c42\u9762\u8fdb\u884c ACME \u6311\u6218\uff0c\u8bf7\u53c2\u8003"\u4f7f\u7528TLS\u7ec8\u6b62"\u3002'))),(0,s.kt)("p",null,"\u901a\u8fc7 Let's Encrypt \u670d\u52a1\u6765\u6267\u884c\u6311\u6218\uff0c\u6311\u6218\u6210\u529f\u540e\u7531 Let's Encrypt \u9881\u53d1\u4e00\u4e2a\u4e3a\u671f90\u5929\u7684 HTTPs \u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u3002\u8be5\u8bc1\u4e66\uff08\u94fe\uff09\u7684\u7eed\u7ea6\u5de5\u4f5c\uff0c\u7531 Walrus \u81ea\u52a8\u5b8c\u6210\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u652f\u6301 LoadBalancer \u7c7b\u578b\u7684 Service\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4e00\u4e2a\u57df\u540d\uff0c\u4f8b\u5982\uff0c",(0,s.kt)("inlineCode",{parentName:"li"},"walrus.mydomain.com"),"\u3002"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Apply \u6dfb\u52a0LoadBalancer\u7c7b\u578b\u7684Service\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: walrus-system\n  name: walrus\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "entrance"\nspec:\n  selector:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "walrus"\n  sessionAffinity: ClientIP\n  type: LoadBalancer\n  ports:\n    - name: http\n      port: 80\n      targetPort: http\n    - name: https\n      port: 443\n      targetPort: https\n\nEOF\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Get \u6307\u4ee4\u7b49\u5f85LoadBalancer\u7c7b\u578b\u7684Service\u83b7\u5f97\u4e00\u4e2aIngress IP\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"until [[ -n $(kubectl -n walrus-system get service walrus --template=\"{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}\") ]]; do :; done && \\\n  kubectl get service walrus -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'\n\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u5728DNS\u914d\u7f6e\u9762\u677f\u4e0a\uff0c\u6dfb\u52a0\u4e0a\u8ff0 A Record \u6307\u5411\u4e0a\u9762\u8f93\u51fa\u7684 IP \u5730\u5740\u3002")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539Secret\u91cc\u7684TLS\u5f00\u5173\u3002"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n walrus-system patch secret walrus --type=\'json\' -p=\'[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]\'\n')),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Delete \u5220\u9664Ingress\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n walrus-system delete ingress walrus\n")),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539Walrus\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4ee5\u5e94\u7b54ACME\u6311\u6218\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export DNS_NAME=""; kubectl -n walrus-system patch deployment walrus --type json -p "[{\\"op\\":\\"add\\",\\"path\\":\\"/spec/template/spec/containers/0/env/-\\",\\"value\\":{\\"name\\":\\"SERVER_TLS_AUTO_CERT_DOMAINS\\",\\"value\\":\\"${DNS_NAME}\\"}}]"\n')),(0,s.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66"),(0,s.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\u662f\u6307\uff0c\u4f7f\u7528\u516c\u5f00\u53d7\u4fe1\u6216\u975e\u516c\u5f00\u53d7\u4fe1\u7684CA\u8bc1\u4e66\uff0c\u7b7e\u53d1\u7684HTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u524d\u7f6e\u6761\u4ef6\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u83b7\u53d6HTTPs\u670d\u52a1\u79c1\u94a5PEM\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u8bb0\u4f5cPRIVATE_KEY_FILE_CONTENT\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u83b7\u53d6HTTPs\u670d\u52a1\u8bc1\u4e66\uff08\u94fe\uff09PEM\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u8bb0\u4f5cCERT_FILE_CONTENT\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\uff08\u975e\u516c\u5f00\u53d7\u4fe1\u7684\uff09CA\u8bc1\u4e66\uff0c\u83b7\u53d6\u5bf9\u5e94PEM\u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u4e32\u8054\u5230CERT_FILE_CONTENT\u540e\u3002"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Apply \u6307\u4ee4\u6dfb\u52a0\u542b\u6709\u81ea\u5b9a\u4e49\u8bc1\u4e66\u5185\u5bb9\u7684Secret\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export PRIVATE_KEY_FILE_CONTENT=""; export CERT_FILE_CONTENT=""; cat <<EOF | kubectl apply -f -\n\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  namespace: walrus-system\n  name: walrus-custom-tls\n  labels:\n    "app.kubernetes.io/part-of": "walrus"\n    "app.kubernetes.io/component": "configuration"\ntype: kubernetes.io/tls\nstringData:\n  "tls.crt": "\\${CERT_FILE_CONTENT}"\n  "tls.key": "\\${PRIVATE_KEY_FILE_CONTENT}"\n\nEOF\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539Secret\u91cc\u7684TLS\u5f00\u5173\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n walrus-system patch secret walrus --type=\'json\' -p=\'[{"op":"replace","path":"/data/enable_tls","value":"dHJ1ZQ=="}]\'\n')),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Delete \u5220\u9664Ingress\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n walrus-system delete ingress walrus\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539Walrus\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4ee5\u542f\u7528\u81ea\u5b9a\u4e49\u7684\u8bc1\u4e66\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n walrus-system patch deployment walrus --type json \\\n-p \'[{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_CERT_FILE","value":"/etc/walrus/ssl/tls.crt"}},{"op":"add","path":"/spec/template/spec/containers/0/env/-","value":{"name":"SERVER_TLS_PRIVATE_KEY_FILE","value":"/etc/walrus/ssl/tls.key"}}]\'\n')),(0,s.kt)("h2",{id:"\u914d\u7f6e\u6570\u636e\u5e93"},"\u914d\u7f6e\u6570\u636e\u5e93"),(0,s.kt)("p",null,"Walrus\u57fa\u4e8e",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL"),"\u5173\u7cfb\u578b\u6570\u636e\u5e93\u5b9e\u73b0\u6570\u636e\u5b58\u50a8\u3002"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cWalrus\u4f1a\u5728\u8fd0\u884c\u5bb9\u5668\u5185\u542f\u52a8\u4e00\u4e2a PostgresSQL \u7684\u5b9e\u4f8b\uff0c\u8fd9\u975e\u5e38\u4fbf\u6377\u4e14\u6613\u4e8e\u4f7f\u7528\uff0c\u4f46\u53ef\u80fd\u9762\u4e34\u4f7f\u7528\u6570\u636e\u7684\u4e22\u5931\u3002\u4e3a\u6b64\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u542f\u52a8Walrus\u65f6\uff0c\u63d0\u4f9b\u5916\u90e8\u7684PostgreSQL\u6e90\uff0c\u4ee5\u907f\u514d\u4f7f\u7528\u6570\u636e\u7684\u4e22\u5931\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,s.kt)("ul",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u6307\u4ee4\u901a\u8fc7\u91cd\u590d\u6dfb\u52a0\u91cd\u540d\u73af\u5883\u53d8\u91cf\u8986\u76d6\u524d\u5e8f\u7684\u53d8\u91cf\uff0c\u53ef\u80fd\u6536\u5230\u4e00\u4e2a\u6765\u81eaKubernetes\u7684\u8b66\u544a\u63d0\u793a\u3002"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539IdentifyAccessManager\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4ee5\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export DB_SOURCE=""; kubectl -n walrus-system patch deployment identity-access-manager --type json \\\n-p "[{\\"op\\":\\"add\\",\\"path\\":\\"/spec/template/spec/initContainers/0/env/-\\",\\"value\\":{\\"name\\":\\"DB_SOURCE\\",\\"value\\":\\"${DB_SOURCE}\\"}}]"\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Kubectl Patch \u4fee\u6539Walrus\u7684\u73af\u5883\u53d8\u91cf\uff0c\u4ee5\u8fde\u63a5\u5916\u90e8\u6570\u636e\u6e90\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'export DB_SOURCE=""; kubectl -n walrus-system patch deployment walrus --type json \\\n-p "[{\\"op\\":\\"add\\",\\"path\\":\\"/spec/template/spec/containers/0/env/-\\",\\"value\\":{\\"name\\":\\"SERVER_DATA_SOURCE_ADDRESS\\",\\"value\\":\\"${DB_SOURCE}\\"}}]"\n')))}c.isMDXComponent=!0}}]);