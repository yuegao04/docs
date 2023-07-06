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

1. 点击导航栏的`应用管理`菜单，默认进入到`default`项目视图。
2. 点击`连接器`标签页。
3. 点击`新建连接器`按钮，选择`Kubernetes`类型。
4. 填入集群名称及KubeConfig文件，点击保存。

## 创建环境
1. 点击`环境`标签页，点击`新建环境`按钮。
2. 输入环境名称，如`dev`。
3. 点击`添加连接器`按钮，选择前置步骤中添加的Kubernetes连接器。
4. 点击保存。

## 部署服务

1. 在环境列表页中，点击前置步骤创建的环境名称，进入环境视图。
2. 点击`新建服务`按钮。
3. 填写服务名称，如`myapp`，确认模版选中`webservice`。
4. 在模板配置的Image Name中输入`nginx`镜像，点击确定。
5. 点击`保存`按钮完成服务的创建。
6. 等待服务的部署完成后，您可以查看资源，日志，执行终端命令，访问该nginx服务的地址等。

恭喜，您已完成本节快速入门。

