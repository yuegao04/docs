---
sidebar_position: 1
---

# 项目

> 注意：
>
> - 系统默认创建一个"default"项目，并授权"所有者"给到管理员用户admin。
> - 系统内项目名唯一。

## 查看项目列表
点击导航栏`应用管理`，点击上方的`项目`下拉菜单，点击`管理`，进入项目列表。

![app-proj-mgt](/img/v0.3.0/application/project/app-proj-mgt.png)

## 创建项目

1. 进入项目列表。
2. 点击`新建项目`，输入"名称"和"描述"，并打上"标签"。

![app-proj-add](/img/v0.3.0/application/project/app-proj-add.png)

## 进入项目

可以通过以下两种方式进入项目：

1. 如果在"项目列表"下，点击项目名称，进入对应的项目页。

![app-proj-view](/img/v0.3.0/application/project/app-proj-view.png)

2. 如果已在某个项目下，点击上方`项目`下拉菜单，选择项目名称，进入对应的项目页。

![app-proj-switch](/img/v0.3.0/application/project/app-proj-switch.png)

## 查询项目

在"项目列表"页或`项目`下拉菜单的搜索框中，输入项目名，输入回车，进行基于项目名的模糊查询。

## 修改项目

1. 进入"项目列表"。
2. 点击待修改项目行`编辑`，选择更改"名称"、"描述"或"标签"。
3. 点击`保存`，完成修改。

![app-proj-edit](/img/v0.3.0/application/project/app-proj-edit.png)

## 删除项目

1. 进入"项目列表"。
2. 勾选待删除项目，点击`删除`，并在弹窗中确认删除，完成删除。

![app-proj-del](/img/v0.3.0/application/project/app-proj-del.png)

> 注意：
> - 如果项目下还存在环境，项目删除将失败。

## 环境管理

在项目视图中，点击`环境`标签页，可进行[环境管理](/application/environment)。

## 变量管理

在项目视图中，点击`变量`标签页，可进行[变量管理](/operation/variable)。

## 连接器管理

在项目视图中，点击`连接器`标签页，可进行[连接器管理](/operation/connector)。

## 成员管理

在项目视图中，点击`成员`标签页，可进行成员管理。

![app-proj-member](/img/v0.3.0/application/project/app-proj-member.png)

### 查询成员

输入成员（用户）名，点击`查询`，进行基于用户名的模糊查询。

### 添加成员

1. 在`成员`标签页，点击`添加成员`。
2. `选择用户`并`分配角色`后，点击`添加`，完成添加。

![app-proj-member-add](/img/v0.3.0/application/project/app-proj-member-add.png)

目前，系统提供3种项目用户角色，分别是**只读**，**成员**及**所有者**。

- **只读**：可对项目级别的资源进行只读操作。
- **成员**：可对项目级别的资源进行配置管理，例如，创建服务、配置变量、更改连接器等。
- **所用者**：拥有项目的最高权限，除了对项目资源进行配置管理外，还可以管理项目成员。管理员，通常是所有项目的所用者。

### 删除成员

点击待删除成员行`删除`，并在弹窗中确认删除，完成删除。

![app-proj-member-del](/img/v0.3.0/application/project/app-proj-member-del.png)