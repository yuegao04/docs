# 快速入门

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

执行以下命令启动Seal服务：

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

## 添加Kubernetes集群作为应用的部署目标

> 前置条件：
> - 一个Kubernetes集群。
> - Seal server与Kubernetes apiserver相互可达。

1. 访问`运维中心`-`连接器`菜单，点击新建连接器。
2. 填入集群名称及Kubeconfig文件，点击保存。
3. 访问`运维中心`-`环境`菜单，编辑`default`环境。
4. 点击`添加连接器`按钮，选择步骤2中添加的Kubernetes，点击确定。

## 部署应用

1. 访问`应用管理`-`应用`菜单，点击`新建应用`按钮。
2. 填写应用名称，如`myapp`，点击模块配置中的添加按钮。
3. 填写模块名称，如`web`，确认选中`webservice`模块，在Image Name中输入`nginx`镜像，点击确定。
4. 点击`保存`按钮完成应用的创建。
5. 点击应用信息右侧的添加应用实例按钮。
6. 填写实例名称，如`dev-1`，选择`default`环境，点击确定。
7. 等待应用的部署完成，您可以在应用实例中查看资源，日志，执行终端命令，访问该nginx应用的地址等。

恭喜，您已完成本节快速入门。

