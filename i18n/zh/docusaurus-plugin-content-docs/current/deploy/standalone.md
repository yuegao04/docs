---
sidebar_position: 1
---

# 单实例部署

适用于PoC或测试场景。

> 前置条件：
> - 资源不少于4CPU，8Gi内存的Linux服务器。
> - 至少50GB的空余磁盘空间。
> - 安装Docker，详细指引参考[Docker官方文档](https://docs.docker.com/)。
> - 服务器开放80和443端口。

使用 Docker Run 指令即可完成标准部署。

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  sealio/walrus:<VERSION>
```

## 配置TLS

### 默认方式，使用系统（非公开受信）的自签证书

由于HTTPs服务证书（链）由非公开受信的CA（Walrus启动创建）签发，用户访问UI前需要在浏览器确认使用风险。

### 使用 [ACME](https://letsencrypt.org/docs/challenge-types) 挑战生成（公开受信）的证书

通过 Let's Encrypt 服务来执行挑战，挑战成功后由 Let's Encrypt 颁发一个为期90天的 HTTPs 服务证书（链）。该证书（链）的续约工作，由 Walrus 自动完成。

> 前置条件：
> - 配置一个域名，使该域名能映射到部署Walrus的Linux服务器，例如，`walrus.mydomain.com`。
> - 开放部署Walrus的Linux服务器的80和443端口，并确保该服务器能够被Let's Encrypt服务访问。

```shell
sudo docker run -d --privileged --restart=always \
 -p 80:80 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 sealio/walrus:<VERSION>
```

上述采用的是 [HTTP-01](https://letsencrypt.org/docs/challenge-types/#http-01-challenge) 挑战模式，如果**无法开放80端口**，将自动转为使用 [TLS-ALPN-01](https://letsencrypt.org/docs/challenge-types/#tls-alpn-01) 挑战模式。

```shell
sudo docker run -d --privileged --restart=always \
 -p 443:443 \
 -e SERVER_TLS_AUTO_CERT_DOMAINS=<YOUR_DOMAIN_NAME> \
 sealio/walrus:<VERSION>
```

### 使用自定义的证书

自定义的证书是指，使用公开受信或非公开受信的CA证书，签发的HTTPs服务证书（链）。

> 前置条件：
> - 在部署Walrus的Linux服务器上准备证书文件，例如，在<PRIVATE_KEY_FILE>路径下放置用于HTTPs服务私钥PEM文件，在<CERT_FILE>路径下放置用于HTTPs服务证书（链）PEM文件。
> - 如果有（非公开受信的）CA证书，请并置在<CERT_FILE>路径下的文件中，通常串联在HTTPs服务证书（链）后。

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -v /<PRIVATE_KEY_FILE>:/etc/walrus/ssl/key.pem \
  -v /<CERT_FILE>:/etc/walrus/ssl/cert.pem \
  -e SERVER_TLS_PRIVATE_KEY_FILE=/etc/walrus/ssl/key.pem \
  -e SERVER_TLS_CERT_FILE=/etc/walrus/ssl/cert.pem \
  sealio/walrus:<VERSION>
```

### 使用TLS终止

[TLS 终止](https://en.wikipedia.org/wiki/TLS_termination_proxy)，通常由反向代理服务执行。

> 注意：
> - 反向代理服务到Walrus的链路中可使用HTTP请求，并且强化Walrus的会话Cookie`walrus_session`为`Secure: true`以避免中间人攻击。

```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 \
  -e SERVER_ENABLE_TLS=false \
  sealio/walrus:<VERSION>
```

## 配置数据库

Walrus基于[PostgreSQL](https://www.postgresql.org/)关系型数据库实现数据存储。

默认情况下，Walrus会在运行容器内启动一个 PostgresSQL 的实例，这非常便捷且易于使用，但可能面临使用数据的丢失。为此，用户可以在启动Walrus时，提供外部的PostgreSQL源，以避免使用数据的丢失。

```shell
# step 1: Start PostgreSQL with the following command.
docker run -d --restart=always \
  -p 5432:5432 \
  -e "POSTGRES_PASSWORD=Root123" \
  -e "POSTGRES_USER=root" \
  -e "POSTGRES_DB=walrus" \
  postgres:14.6

# step 2: Start Walrus with the following command.
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_ADDRESS="postgres://root:Root123@<postgres-ip-address>:5432/walrus?sslmode=disable"\
  sealio/walrus:<VERSION>
```

## 配置HTTP代理

如果部署在网络隔离环境，并且可以通过代理访问外网，可以通过配置环境变量的方式设置代理。例如：
```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e HTTP_PROXY="http://192.168.0.100:3128" \
  -e HTTPS_PROXY="http://192.168.0.100:3128" \
  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,.svc,.cluster.local,example.com" \
  sealio/walrus:<VERSION>
```
