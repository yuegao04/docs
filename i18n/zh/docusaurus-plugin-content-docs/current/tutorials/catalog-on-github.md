---
sidebar_position: 1
---

# 在 Github 上创建模板库

本教程介绍如何创建利用 Github 组织账号创建模板库，利用模板库批量创建模板，以及利用模板创建资源。

## 先决条件

想要跟随本教程，您将需要：
1. 一个 Github 组织账号
2. [安装 Walrus](/deploy/standalone)。

## 创建模板库
关于如何创建 Github 组织账号，请参考[官方文档](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)。

### 创建模板

1. 登入 Github，点击右上角的加号，选择`New repository`。
2. 填入模板库名称，例如`my-template`。
3. 勾选`Initialize this repository add a README file`。
4. 点击`Create repository`。
  ![create-template](/img/v0.3.0/tutorials/catalog-on-github/create-template.png)
5. 参照[Terraform模板教程](https://developer.hashicorp.com/terraform/tutorials/modules)和[模板扩展](/operation/template)语法规则，创建模板。
  ![template-update](/img/v0.3.0/tutorials/catalog-on-github/template-update.png)
  创建的模板仓库包含了tag为`v0.0.1`的版本，其中包含了`main.tf`、`variables.tf`、`outputs.tf`和`README.md`文件。
6. 通过同样的方式创建其他的模板仓库，例如`my-rds`
![catalog-list](/img/v0.3.0/tutorials/catalog-on-github/list.png)

### 使用模板库

通过[部署 Walrus](/deploy/standalone)，部署一个 Walrus 服务。
点击`运维中心`菜单，进入`模板库`标签页。

1. 点击`添加`按钮。
2. 填入模板库名称, 来源，，例如`template-demo`。
![create-catalog](/img/v0.3.0/tutorials/catalog-on-github/create-catalog.png)
3. 完成导入后，在模板列表中可以看到`my-template`和`my-rds`两个模板。
![catalog-list](/img/v0.3.0/tutorials/catalog-on-github/catalog-template.png)

### 利用模板创建资源

1. 点击`应用管理`，进入选择项目及环境。（如果没有项目及环境，请参考[创建项目及环境](/application/environment)）
2. 点击`创建服务`按钮，进入创建服务页面，选择导入catalog的模板，例如`my-template`，填入模板参数，点击`创建`按钮。
3. 查看服务状态，等待服务创建完成。
![create-service](/img/v0.3.0/tutorials/catalog-on-github/create-service.png)