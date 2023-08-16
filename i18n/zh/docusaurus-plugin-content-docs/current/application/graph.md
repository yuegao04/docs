---
sidebar_position: 4
---

# 依赖图

您可以通过依赖图查看部署的服务和资源的拓扑结构。Walrus提供了环境和服务两个级别的依赖图。

## 查看环境依赖图

### 环境依赖图

环境依赖图包含了该环境下的所有服务和资源，以及它们之间的关系和部署状态。

1. 点击左侧导航栏中的`应用管理`，进入项目及环境。
2. 点击`依赖图`标签页，查看环境依赖图。

> 说明：依赖图中节点之间为"实现"和"继承"关系的子节点默认隐藏，可通过点击工具栏中的"显示子资源"图标进行展开。

![environment-graph](/img/v0.3.0/application/graph/app-graph-env.png)
### 服务依赖图

服务依赖图展示了该服务下所有资源，以及它们之间的关系和部署状态。

1. 点击左侧导航栏中的`应用管理`，进入项目及环境，进入服务详情页。
2. 在资源信息的`资源`标签页下，点击右侧方图标切换到图视角。

![service-graph](/img/v0.3.0/application/graph/app-graph-svc.png)

## 依赖图节点关系

依赖图节点之间的关系分为三种：

- Composition：成分关系，用实线、箭头为菱形表示
- Dependency：依赖关系，用虚线、V 形箭头表示
- Realization：实现、继承关系，用点划线、三角箭头表示

![graph-legend](/img/v0.3.0/application/graph/app-graph-legend.png)
## 关系图工具栏

- 视图适中
- 刷新视图
- 全屏查看
- 子节点显示、隐藏切换

![graph-toolbar](/img/v0.3.0/application/graph/app-graph-toolbar.png)

## 高亮显示节点关系

鼠标悬浮在相应的图例上，依赖图对应的连接关系会高亮显示。

下图为展示鼠标悬停在"依赖关系"图例上时，关系图高亮显示全部有依赖关系的节点。

![graph-highlight](/img/v0.3.0/application/graph/app-graph-highlight.png)

## 查看资源日志

1. 在依赖图中，选择可进行日志操作的节点，点击节点方块左上角的图标，点击`日志`。
2. 可以根据需求上下拉伸调节日志窗口的大小。

![graph-log](/img/v0.3.0/application/graph/app-graph-log.png)

## 访问资源终端

1. 在依赖图中，选择可进行终端操作的节点，点击节点方块左上角的图标，点击`终端`。
2. 可以根据需求上下拉伸调节终端窗口的大小。

![graph-exec](/img/v0.3.0/application/graph/app-graph-exec.png)

