---
sidebar_position: 2
---

# 变量

Seal中的变量有以下层级：

- 环境变量：应用于某个环境
- 项目变量：应用于某个项目
- 全局变量：可应用于所有项目

当不同层级下拥有同名称的变量时，依据以下**优先级**使用变量的值：**环境 > 项目 > 全局**。

## 查看变量列表

### 全局变量
1. 点击左侧导航栏中的`运维中心`菜单。
2. 点击`全局变量`标签页，即可进行全局变量管理。

![var-global-list](/img/v0.3.0/opration/variable/op-var-global-list.png)

### 项目变量

1. 点击左侧导航栏中的`应用管理`。
2. 通过顶层面包屑的项目下拉按钮选择项目。
3. 点击`变量`标签页，即可进行该项目下的变量管理。

![var-project-list](/img/v0.3.0/opration/variable/op-var-proj-list.png)

### 环境变量

1. 点击左侧导航栏中的`应用管理`。
2. 通过顶层面包屑的项目下拉按钮选择项目。
3. 在`环境`标签页下，点击某个环境的名称，进入环境视图。
4. 点击`变量`标签页，即可进行该环境下的变量管理。

![var-environment-list](/img/v0.3.0/opration/variable/op-var-env-list.png)

## 创建、更新变量

1. 进入变量列表页。
2. 点击【新建变量】按钮，即可创建变量。
3. 选择`是否敏感`。启用该选项时，变量的值保存后不可见。

![var-create](/img/v0.3.0/opration/variable/op-var-create.png)

4. 点击变量列表中的`编辑`操作按钮，可更新变量。

![var-edit](/img/v0.3.0/opration/variable/op-var-edit.png)

## 使用变量

新建或编辑服务时，在模板配置中的输入框中输入`${var.变量名}`，即可使用相应的变量。

![var-reference](/img/v0.3.0/opration/variable/op-var-ref.png)

## 删除变量

1. 进入变量列表页。
2. 选中要删除的变量，点击`删除`按钮，确认后可删除。
