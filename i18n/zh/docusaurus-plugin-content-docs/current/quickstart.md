# 快速入门

> 注意：
>
> Walrus 的当前版本处于 alpha 阶段。后续版本可能会引入不兼容的 API 变更。

## 部署

> 前置条件：
>
> - 资源不少于 4CPU，8Gi 内存的 Linux 服务器。
> - 至少 50GB 的空余磁盘空间。
> - 安装 Docker，详细指引参考[Docker 官方文档](https://docs.docker.com/)。
> - 服务器开放 80 和 443 端口。

执行以下命令启动 Walrus 服务：

```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 --name walrus sealio/walrus
```

更多部署要求，请参考[部署](/deploy/standalone)。

## 访问

1. 通过`https://<server-address>`访问 Walrus 的 UI。

2. 以`admin`用户名以及初始管理员密码登陆 Walrus，并根据 UI 提示设置新的密码以及 Walrus 的访问地址。

> 第一次登陆时根据 UI 提示，在服务器上运行以下指令获取初始的管理员密码。

```shell
sudo docker logs walrus 2>&1 | grep "Bootstrap Admin Password"
```

![qs-first-login](/img/v0.3.0/quickstart/qs-first-login.png)

## 添加 Kubernetes 集群作为应用的部署目标

> 前置条件：
>
> - 一个 Walrus server 可以访问的 Kubernetes 集群。

1. 点击导航栏的`应用管理`菜单，默认进入到`default`项目视图。
2. 点击`连接器`标签页。
3. 点击`新建连接器`按钮，选择`Kubernetes`类型。
4. 填入集群名称及 KubeConfig 文件，点击保存。

![qs-add-connector](/img/v0.3.0/quickstart/qs-add-connector.png)

## 创建环境

1. 点击`环境`标签页，点击`新建环境`按钮。

![qs-create-env](/img/v0.3.0/quickstart/qs-create-env.png)

2. 输入环境名称，如`dev`。
3. 点击`添加连接器`按钮，选择前置步骤中添加的 Kubernetes 连接器。
4. 点击保存。

![qs-create-env2](/img/v0.3.0/quickstart/qs-create-env2.png)

## 部署服务

1. 在环境列表页中，点击前置步骤创建的环境名称，进入环境视图。

![qs-go2env](/img/v0.3.0/quickstart/qs-go2env.png)

2. 点击`新建服务`按钮。

![qs-create-svc](/img/v0.3.0/quickstart/qs-create-svc.png)

3. 填写服务名称，如`myapp`，确认模板选中`webservice`。
4. 在模板配置的 Image Name 中输入`nginx`镜像，点击确定。

![qs-create-svc2](/img/v0.3.0/quickstart/qs-create-svc2.png)

5. 点击`保存`按钮完成服务的创建。
6. 等待服务的部署完成后，您可以查看资源，日志，执行终端命令，访问该 nginx 服务的地址等。

- 查看部署日志。

![qs-logs](/img/v0.3.0/quickstart/qs-logs.png)

- 查看资源日志。

![qs-res-logs](/img/v0.3.0/quickstart/qs-res-logs.png)

- 打开终端。

![qs-res-exec](/img/v0.3.0/quickstart/qs-res-exec.png)

恭喜，您已完成本节快速入门。
