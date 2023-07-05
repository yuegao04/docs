---
sidebar_position: 1
---


# 模块

模块是可重用的应用组成单元，它包含了一组相关的资源定义，输入以及输出。

## 类型

Seal当前支持Terraform类型的模块，存储于git代码仓库。

## 模块版本

Seal支持在同一git代码树中管理多个版本的模块。模块版本需要是语义化的版本号，通过以下目录结构放置：
```shell
<path-to-module>
├── 0.0.1
│   ├── README.md
│   ├── main.tf
│   ├── outputs.tf
│   └── variables.tf
└── 0.0.2
    ├── README.md
    ├── main.tf
    ├── outputs.tf
    └── variables.tf
```

## 变量样式扩展

Seal在Terraform 变量的基础上扩展了样式定义，支持额外的属性描述变量的样式，有助于在用户界面上生成更加用户友好的表单。扩展样式通过HCL注释来定义。

| 属性名     | 类型    | 描述                 | 示例                                                 |
|---------|-------|--------------------|----------------------------------------------------|
| label   | 字符串   | UI标签               | @label "Name"                                      |
| group   | 字符串   | 分组                 | @group "基本信息"                                      |
| options | 字符串数组 | 选项列表               | @options ["NodePort","ClusterIP","LoadBalancer"]   |
| show_if | 字符串   | 显示条件，当条件为真时才显示该变量  | @show_if "cluster_type=NodePort"                   |
| hidden  | 布尔    | 是否在UI显示            | @hidden                                            |


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

Seal会提供以下元数据变量，当您在模块中声明匹配的变量名称的时候，Seal会在部署中注入元数据变量的值。

| 变量名                                     | 类型  | 描述       | 
|-----------------------------------------|-----|----------|
| seal_metadata_project_name              | 字符串 | 应用所属项目名称 | 
| seal_metadata_application_name          | 字符串 | 应用名称     | 
| seal_metadata_application_instance_name | 字符串 | 应用实例名称   | 
| seal_metadata_module_name               | 字符串 | 应用模块名称   | 

## 输出

Seal会抓取Terraform文件中定义的输出，部署完成后，输出将显示在应用实例的输出页中。Seal支持抓取用户自定义访问URL，配置输出名称以`endpoint`为前缀（如下配置），Seal将会抓取这些输出作为`访问URL`展示。

```hcl
output "endpoint_web" {
  value = "http://${var.host}:${var.port}"
}
```