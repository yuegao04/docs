# 部署

> 前置条件：
> - 资源不少于4CPU，8Gi内存的Linux服务器。
> - 至少50GB的空余磁盘空间。
> - 安装Docker，详细指引参考[Docker官方文档](https://docs.docker.com/)。
> - 服务器开放80和443端口。
> - 前往[官网](https://seal.io/trial.html)申请产品试用镜像。

## 配置HTTPs

### 方式一：使用系统（非公开受信）的自签证书

> 注意：由于HTTPs服务证书（链）由非公开受信的CA（Seal启动创建）签发，用户访问UI前需要在浏览器确认使用风险。

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  <seal-container-image>
```

### 方式二：使用 [ACME](https://letsencrypt.org/docs/challenge-types) 挑战生成（公开受信）的证书。

> 注意：通过 Let's Encrypt 服务来执行挑战，挑战成功后由 Let's Encrypt 颁发一个为期90天的 HTTPs 服务证书（链）。该证书（链）的续约工作，由 Seal 自动完成。

> 前置条件：
> - 配置一个域名，使该域名能映射到部署Seal的Linux服务器，例如，`seal.mydomain.com`。
> - 开放部署Seal的Linux服务器的80和443端口，并确保该服务器能够被Let's Encrypt服务访问。

```shell
sudo docker run -d --privileged --restart=always \
 -p 80:80 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 <seal-container-image>
```

上述采用的是 [HTTP-01](https://letsencrypt.org/docs/challenge-types/#http-01-challenge) 挑战模式，如果**无法开放80端口**，将自动转为使用 [TLS-ALPN-01](https://letsencrypt.org/docs/challenge-types/#tls-alpn-01) 挑战模式。

```
sudo docker run -d --privileged --restart=always \
 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 <seal-container-image>
```


### 方式三：使用自定义的证书

> 注意：自定义的证书是指，使用公开受信或非公开受信的CA证书，签发的HTTPs服务证书（链）。

> 前置条件：
> - 在部署Seal的Linux服务器上准备证书文件，例如，在<PRIVATE_KEY_FILE>路径下放置用于HTTPs服务私钥PEM文件，在<CERT_FILE>路径下放置用于HTTPs服务证书（链）PEM文件。
> - 如果有（非公开受信的）CA证书，请并置在<CERT_FILE>路径下的文件中，通常串联在HTTPs服务证书（链）后。

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -v /<PRIVATE_KEY_FILE>:/etc/seal/ssl/key.pem \
  -v /<CERT_FILE>:/etc/seal/ssl/cert.pem \
  -e SERVER_TLS_PRIVATE_KEY_FILE=/etc/seal/ssl/key.pem \
  -e SERVER_TLS_CERT_FILE=/etc/seal/ssl/cert.pem \
  <seal-container-image>
```

### 方式四：使用 TLS 终止。

> 注意：[TLS 终止](https://en.wikipedia.org/wiki/TLS_termination_proxy)，通常由反向代理服务执行。
> 因此，反向代理服务到Seal的链路中可使用HTTP请求，并且强化Seal的会话Cookie`seal_session`为`Secure: true`以避免中间人攻击。

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 \
  -e SERVER_ENABLE_TLS=false \
  <seal-container-image>
```


## 配置数据库

Seal基于[PostgreSQL](https://www.postgresql.org/)关系型数据库实现数据存储。

默认情况下，Seal会在运行容器内启动一个 PostgresSQL 的实例，这非常便捷且易于使用，但可能面临使用数据的丢失。为此，用户可以在启动Seal时，提供外部的PostgreSQL源，以避免使用数据的丢失。

```shell
# step 1: Start PostgreSQL with the following command.
docker run -d --restart=always \
  -p 5432:5432 \
  -e "POSTGRES_PASSWORD=Root123" \
  -e "POSTGRES_USER=root" \
  -e "POSTGRES_DB=seal" \
  postgres:14.6

# step 2: Start Seal with the follwoing command.
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_ADDRESS="postgres://root:Root123@postgres:5432/seal?sslmode=disable"\
  <seal-container-image>
```
