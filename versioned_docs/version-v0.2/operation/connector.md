---
sidebar_position: 3
---

# Connectors

Seal offers connectors on the following two levels:

- Project Connectors: Applied to a specific project
- Global Connectors: Can be applied to all projects
## Viewing the Connectors List

### Global Connectors List

1. Click on `Operation Center` in the left-hand sidebar.
2. Click on the `Connectors` tab to view the connectors list.

![connector-list](/img/v0.3.0/opration/connector/op-conn-list-en.png)

### Project Connectors List

1. Click on `Application Management` in the left-hand sidebar and select the appropriate project.
2. Click on the `Connectors` tab to view the connectors list.

![project-connector-list](/img/v0.3.0/application/project/app-proj-conn-list-en.png)

## Viewing Connector Details

1. Click on `Operation Center` -> `Connectors` in the left-hand sidebar to go to the connectors list.
2. Find the connector you need to view and click on its name to enter the connector's detail page.

## Creating a Connector

### Creating a Kubernetes Connector

1. Click on `New Connector` in the connectors list and select `Kubernetes`.

![connector-create](/img/v0.3.0/quickstart/qs-add-connector-en.png)

2. `Enable Cost Analysis` is turned on by default. Once enabled, you can create related views in the `Cost Management` menu on the left-hand side to view the related expense statistics.
3. Fill out the form. After `Save` is successful, the Kubernetes connector is created.
   
![connector-create-k8s](/img/v0.3.0/opration/connector/op-conn-create-k8s-en.png)

### Creating a Cloud Vendor Connector

1. Click on `New Connector` in the connectors list and select `Cloud Vendor`.
2. Configure `Name`, `Type`, `AccessKey`, `SecretKey`, `Region` connections.
3. Fill out the form. After `Save` is successful, the cloud vendor is created.

![connector-create-cloud](/img/v0.3.0/opration/connector/op-conn-create-cloud-en.png)

### Creating a Version Control Connector

1. Click on `New Connector` in the connectors list and select `Version Control`.
2. Choose the type. Currently supports GitHub, fill out the corresponding `Access token`. The permission to operate the repo needs to be turned on.
3. Fill in the form. After `Save` is successful, the version control connector is created.

![connector-create-vcs](/img/v0.3.0/opration/connector/op-conn-create-vcs-en.png)

### Creating a Custom Connector

1. Click on `New Connector` in the connectors list and select `Custom`.
2. The type is the type of third-party platform Terraform Provider, for example: AWS, AliCloud.
3. Add properties, for instance: if the Provider is [AliCloud](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs), you need to fill in access_key, secret_key, region.

```
provider "alicloud" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}
```

![connector-create-custom](/img/v0.3.0/opration/connector/op-conn-create-custom-en.png)
## Deleting a Connector

1. Click on `Operation Center` -> `Connectors` in the left-hand sidebar to go to the connectors list.
2. Find the connector you need to delete.
3. Ensure that no environment depends on this connector before selecting the connector you want to delete, then click the `Delete` button.
5. Click the `Confirm` button to complete the deletion.

![connector-delete](/img/v0.3.0/opration/connector/op-conn-del-en.png)

## Usage

1. Once the connector is successfully created.
2. Add the corresponding connectors in the `Projects` -> `Environment` details.
3. In the `Services` of environment details, a new service can use the connector.

> Note:
> - Only administrators/platform engineers have the permission to create global connectors.
> - The scope of project connectors is restricted to the current project. They can only be added to environments created by the current project and cannot be used by other projects.
> - The scope of global connectors applied to all projects. They can be added to any project environment. If you need to restrict the scope, please use project connectors.