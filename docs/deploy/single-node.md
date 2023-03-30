---
sidebar_position: 1
---


# 单实例部署


> 前提条件：
> - 资源不少于4CPU，8Gi内存的Linux服务器
> - 至少50GB的空余磁盘空间
> - 安装docker
> - 服务器开放80和443端口
> - 前往[官网](https://seal.io/trial.html)申请产品试用镜像。

## 选择SSL证书的类型并启动Seal

### 方式一：使用Seal生成的自签证书

通过执行以下指令完成Seal的部署：
```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 <seal-container-image>
```

### 方式二：使用Let's Encrypt签发的证书

> 前提条件：
> - Let's Encrypt是一个公有服务，因此部署Seal的服务器需要公网可达。
> - 需要提供一个解析到该服务器的域名来访问Seal，例如`seal.mydomain.com`。

通过执行以下指令完成Seal的部署：
```shell
sudo docker run -d --privileged --restart=always \
 -p 80:80 -p 443:443 \
 -e ACME_DOMAIN=<YOUR_DOMAIN_NAME> \
 <seal-container-image>
```

### 方式三：使用自带的自签证书

在部署Seal的服务器上准备好你的证书文件。如下占位符描述所示

| 占位符               | 描述        |
|-------------------|-----------|
| <CERT_DIR>        | 放置证书文件的目录 |
| <FULL_CHAIN.pem>  | 证书链文件     |
| <PRIVATE_KEY.pem> | 私钥文件      |
| <CA_CERTS.pem>    | CA证书文件    |


通过执行以下指令完成Seal的部署：
```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/seal/ssl/cert.pem \
  -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/seal/ssl/key.pem \
  -v /<CERT_DIRECTORY>/<CA_CERTS.pem>:/etc/seal/ssl/cacerts.pem \
  <seal-container-image>
```

### 方式四：使用受信CA签发的证书


在部署Seal的服务器上准备好你的证书文件。如下占位符描述所示

| 占位符               | 描述        |
|-------------------|-----------|
| <CERT_DIR>        | 放置证书文件的目录 |
| <FULL_CHAIN.pem>  | 证书链文件     |
| <PRIVATE_KEY.pem> | 私钥文件      |


通过执行以下指令完成Seal的部署：
```shell
sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -v /<CERT_DIRECTORY>/<FULL_CHAIN.pem>:/etc/seal/ssl/cert.pem \
  -v /<CERT_DIRECTORY>/<PRIVATE_KEY.pem>:/etc/seal/ssl/key.pem \
  <seal-container-image>
```
