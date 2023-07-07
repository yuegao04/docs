---
sidebar_position: 1000
---

# 自定义

自定义连接器可以定义部署第三方平台应用如：AWS, 阿里云。您可以通过自定义连接器使用任意的terraform provider。

## 创建自定义连接器

1. 进入连接器列表页。
2. 点击`新建连接器`按钮，选择 Kubernetes。
3. 类型为 Terraform Provider 的类型，如：aws, alicloud。
4. 添加属性，例如：Provider 为 [alicloud](https://registry.terraform.io/providers/aliyun/alicloud/latest/docs),则需填写 access_key，secret_key，region。

```
provider "alicloud" {
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}
```

4. `保存`可创建自定义连接器。

## 查看、编辑连接器

1. 进入连接器列表页。
2. 找到您要查看或编辑的连接器。
3. 点击列表中的连接器名称可查看详情；
4. 点击`编辑`操作对连接器进行编辑。

## 删除连接器

> 注：在删除连接器前，需要确认当前没有环境依赖该连接器。

1. 进入连接器列表页。
2. 选中您要删除的连接器。
3. 点击`删除`按钮，确认即可删除。

## 使用方法

### 以 alicloud 为例：

1. 自定义连接器创建成功后。
2. 在[创建环境](/application/environment#创建环境)或[编辑环境](/application/environment#编辑环境)时添加相应的连接器。
3. 在`运维中心`->`模板`中创建相应的模板。
4. 模板可自己编写，也可以通过`AI 编写模块`编写相应的 Terraform 的配置。
5. 编辑 AI 生成的配置，并确认后可`创建 PR`提交到相应的`版本控制`平台（需先在`连接器`创建`版本控制`连接器）。
6. 在`运维中心`->`模板`中创建模板来源为步骤 5 中的提交路径。
7. 使用该模板[创建服务](/application/service#创建服务)。
