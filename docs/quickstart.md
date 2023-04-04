---
sidebar_position: 2
---


# 快速入门指南

本文介绍如何部署Seal，并使用Seal进行应用部署管理。

> 注意：
> 
> Seal的当前版本处于alpha阶段。后续版本可能会引入不兼容的API变更。

## 前提条件

完成这一示例需要：
- 一台至少4CPU，8Gi内存的Linux服务器；
- 至少50GB的空余磁盘空间；
- 服务器拥有一个公网可访问的地址，例如一个云服务商分配的公有IP地址，或者[ngrok](https://ngrok.com/)分配的代理地址。

## 部署

1. 在Linux服务器上安装Docker，详细指引参考[Docker官方文档](https://docs.docker.com/)。
2. 前往[官网](https://seal.io/trial.html)申请产品试用镜像。
3. 运行以下指令。
```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 -p 10000:10000 <seal-container-image>
```

## 访问Seal UI

通过`https://<server-address>`访问Seal的UI。第一次登陆时根据UI提示，在服务器上运行以下指令获取初始的管理员密码。
```shell
sudo docker logs <your-container-id> 2>&1 | grep "Bootstrap Admin Password"
```

以`admin`用户名以及初始管理员密码登陆Seal，并根据UI提示设置新的密码以及Seal的访问地址。
