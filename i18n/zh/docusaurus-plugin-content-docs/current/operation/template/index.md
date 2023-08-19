---
sidebar_position: 1
---

# 模板

模板是预定义的服务框架或架构，它包含了一组相关的资源定义，输入以及输出。

## 类型

Walrus当前支持的模板类型为Terraform module，存储于git代码仓库。

## 模板版本

Walrus支持在同一git代码中管理多个版本的模板。模板版本需要使用语义化的版本号，通过代码仓库的 Tag 来导入模板版本，当前支持的版本号格式为 `vX.Y.Z`，其中X、Y、Z为数字，如`v0.0.1`。模板版本需要放置在以下目录结构中：

```shell
<path-to-template>
├── README.md
├── main.tf
├── outputs.tf
├── variables.tf

```


## 变量样式扩展

Walrus在Terraform 变量的基础上扩展了样式定义，支持额外的属性描述变量的样式，有助于在用户界面上生成更加用户友好的表单。扩展样式通过HCL注释来定义。

| 属性名     | 类型   | 描述                 | 示例                                                 |
|---------|------|--------------------|----------------------------------------------------|
| label   | 字符串  | UI标签               | @label "Name"                                      |
| group   | 字符串  | 分组                 | @group "基本信息"                                      |
| options | 数组   | 选项列表               | @options ["NodePort","ClusterIP","LoadBalancer"]   |
| show_if | 字符串  | 显示条件，当条件为真时才显示该变量  | @show_if "cluster_type=NodePort"                   |
| hidden  | 布尔   | 是否在UI显示            | @hidden                                            |


以下为变量扩展的示例
```hcl
# variables.tf

# @group "Resources"
# @label "CPU Limit"
# @options ["0.5","1","2"]
# @show_if "advanced=true"
variable "limit_cpu" {
  type        = string
  description = "CPU limit. e.g. 0.5, 1, 2"
  default     = "0.5"
}
```

## 元数据变量

Walrus会提供以下元数据变量，当您在模板中声明匹配的变量名称的时候，Walrus会在部署中注入元数据变量的值。

| 变量名                               | 类型  | 描述                                       | 
|-----------------------------------|-----|------------------------------------------|
| walrus_metadata_project_name      | 字符串 | 服务所属项目名称                                 | 
| walrus_metadata_project_id        | 字符串 | 服务所属项目ID                                 | 
| walrus_metadata_environment_name  | 字符串 | 服务所属环境名称                                 | 
| walrus_metadata_environment_id    | 字符串 | 服务所属环境ID                                 | 
| walrus_metadata_service_name      | 字符串 | 服务名称                                     | 
| walrus_metadata_service_id        | 字符串 | 服务ID                                     | 
| walrus_metadata_namespace_name    | 字符串 | Walrus管理的环境namesapce名称，在Kubernetes环境中可用  | 

## 输出

Walrus会抓取Terraform文件中定义的输出，部署完成后，输出将显示在服务的输出页中。Walrus支持抓取用户自定义访问URL，配置输出名称以`endpoint`为前缀（如下配置），Walrus将会抓取这些输出作为`访问URL`展示。

```hcl
output "endpoint_web" {
  value = "http://${var.host}:${var.port}"
}
```