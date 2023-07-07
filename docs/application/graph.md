---
sidebar_position: 5
---

# 依赖图

- 环境级别依赖图

- 服务级别依赖图

### 环境依赖图

包含了相应环境下的所有服务和资源，以及之间的依赖关系和部署状态

#### 依赖图节点之间的关系分为三种

- Composition 实线、箭头为菱形，表示成分关系
- Dependency 虚线、V 形箭头，表示依赖关系
- Realization 点划线、三角箭头，表示实现、继承关系

#### 关系图工具栏

节点之间为实现、继承关系的子节点是默认隐藏的

- 视图适中
- 刷新视图
- 全屏查看
- 子节点显示、隐藏切换

![toolbar](/img/graph/toolbar.png)

#### 节点可进行操作

> 鼠标悬浮在相应的图例上，依赖图对应的连接关系会高亮显示。

#### 高亮显示依赖

![log](/img/graph/highlight.png)

> 节点上可进行【日志】和【终端】的操作

#### 资源日志

![log](/img/graph/logs.png)

#### 访问资源终端

![term](/img/graph/term.png)

### 服务依赖图

服务依赖图交互与环境依赖图一致

![term](/img/graph/service-graph.png)
