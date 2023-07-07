---
sidebar_position: 1
---

# 概述

连接器提供与第三方系统的对接。

## 层级

在Seal中，连接器有以下层级：

- 全局 - 可以在所有项目中共享使用。
- 项目 - 在单个项目中使用。

### 管理全局连接器

1. 点击左侧导航栏中的`运维中心`菜单。
2. 点击`连接器`标签页即可管理全局连接器。

### 管理项目连接器

1. 点击左侧导航栏中的`应用管理`。
2. 通过顶层面包屑的项目下拉按钮选择项目。
3. 点击`连接器`标签页即可管理项目下的连接器。

## 类型

Seal支持以下类型的连接器：

- [Kubernetes](/operation/connector/kubernetes)
- [云厂商](/operation/connector/cloud-provider)
- [版本控制](/operation/connector/version-control)
- [自定义](/operation/connector/custom)