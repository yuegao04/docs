# Quick Start

> Note:
> 
> Walrus is alpha-quality software. It is under rapid development. Subsequent versions may introduce API changes that are not compatible.

## Deployment

> Prerequisites:
> - A Linux server with no less than 4 CPU cores, 8GiB memory.
> - At least 50GB of free disk space.
> - Docker installed, if not please refer to [the Docker official documentation](https://docs.docker.com/).
> - Server ports 80 and 443 are open.

Execute the following command to start the Walrus service:

```shell
sudo docker run -d --privileged --restart=always -p 80:80 -p 443:443 --name walrus sealio/walrus
```

For more detailed installation requirements, please refer to [installation](/deploy/standalone).

## Access UI

1. Access Walrus UI through `https://<server-address>`.

2. Login to Walrus with the username `admin` and the initial administrator password, and set a new password and Walrus's access address as prompted by the UI.

> Run the following command on the server to get the initial administrator password.

```shell
sudo docker logs walrus 2>&1 | grep "Bootstrap Admin Password"
```

![qs-first-login](/img/v0.3.0/quickstart/qs-first-login-en.png)

## Add a Kubernetes Cluster as Deployment Target

> Prerequisites:
> - A Kubernetes cluster that can be reached by the Walrus server.

1. Click the `Application Management` menu in the navigation bar to go to the `default` project view by default.
2. Click the `Connectors` tab.
3. Click the `New Connector` button, and select `Kubernetes` type.
4. Fill in the cluster name and KubeConfig file, and click save.

![qs-add-connector](/img/v0.3.0/quickstart/qs-add-connector-en.png)

## Create Environment
1. Click the `Environment` tab, and click the `New Environment` button.

![qs-create-env](/img/v0.3.0/quickstart/qs-create-env-en.png)

2. Enter the environment name, such as `dev`.
3. Click `Add Connector` button, and select the Kubernetes connector added in the previous step.
4. Click save.

![qs-create-env2](/img/v0.3.0/quickstart/qs-create-env2-en.png)

## Deploy Service

1. In the environment list page, click the environment name created in the previous step to enter the environment view.

![qs-go2env](/img/v0.3.0/quickstart/qs-go2env-en.png)

2. Click the `New Service` button.

![qs-create-svc](/img/v0.3.0/quickstart/qs-create-svc-en.png)

3. Fill in the service name, such as `myapp`, and make sure the template is selected as `webservice`.
4. Enter `nginx` image in the Image Name of the template configuration, and click confirm.

![qs-create-svc2](/img/v0.3.0/quickstart/qs-create-svc2-en.png)

5. Click the `Save` button to complete the creation of the service.
6. After the service deployment is complete, you can view resources, logs, execute terminal commands, access the address of this nginx service, etc.
- View deployment logs.

![qs-logs](/img/v0.3.0/quickstart/qs-logs-en.png)

- View resource logs.

![qs-res-logs](/img/v0.3.0/quickstart/qs-res-logs-en.png)

- Open terminal.

![qs-res-exec](/img/v0.3.0/quickstart/qs-res-exec-en.png)

Congratulations, you have deployed your first application using Walrus!
