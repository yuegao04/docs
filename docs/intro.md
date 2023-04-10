---
sidebar_position: 1
slug: /
---


# 快速入门

Seal是一款应用管理软件，可帮助用户实现应用配置管理、基础设置编排、环境管理及成本管理（FinOps）。

> 注意：
> 
> Seal的当前版本处于alpha阶段。后续版本可能会引入不兼容的API变更。

## 部署

> 前置条件：
> - 资源不少于4CPU，8Gi内存的Linux服务器。
> - 至少50GB的空余磁盘空间。
> - 安装Docker，详细指引参考[Docker官方文档](https://docs.docker.com/)。
> - 服务器开放80和443端口。
> - 前往[官网](https://seal.io/trial.html)申请产品试用镜像。

```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 <seal-container-image>
```

更多部署要求，请参考[部署](/deploy)。


## 访问

通过`https://<server-address>`访问Seal的UI。

第一次登陆时根据UI提示，在服务器上运行以下指令获取初始的管理员密码。
```shell
sudo docker logs <your-container-id> 2>&1 | grep "Bootstrap Admin Password"
```

以`admin`用户名以及初始管理员密码登陆Seal，并根据UI提示设置新的密码以及Seal的访问地址。
