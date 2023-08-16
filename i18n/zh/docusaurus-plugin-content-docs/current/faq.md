# 常见问题

## Q1: 如何进行租户管理？

目前，系统的资源隔离基本单元是项目，即项目与项目之间不共享内部资源，例如项目下的服务。

为此，系统提供以下2个级别共6种用户角色，帮助用户进行资源管理。

- **系统级别**：通常是提供权限，管理全局级别的资源（例如，模板、全局变量、全局连接器等）、系统用户、个人项目等。
  - **普通用户**：可对项目级别的资源进行配置管理，例如，创建个人项目，授权个人项目给他人等。
  - **平台工程师**：可对全局级别的资源进行配置管理，例如，创建模板、配置全局变量、更改全局连接器等。
  - **管理员**：拥有系统的最高权限，除对系统资源进行配置管理外，还可以管理系统用户。

- **项目级别**：通常是提供权限，管理项目级别的资源（例如，环境、服务、变量、连接器等）。
  - **只读**：可对项目级别的资源进行只读操作。
  - **成员**：可对项目级别的资源进行配置管理，例如，创建服务、配置变量、更改连接器等。
  - **所用者**：拥有项目的最高权限，除了对项目资源进行配置管理外，还可以管理项目成员。管理员，通常是所有项目的所用者。

以上6种用户角色，可以支撑以下几种协作场景。

1. "管理员"角色的用户，创建新的用户。
2. "平台工程师"角色的用户，管理模板、全局变量及全局连接器。
3. "普通用户"角色的用户，创建属于自己的项目。在项目下，创建环境并选择使用全局连接器。在环境下，创建服务并选择使用全局变量。
4. 项目"所有者"可以把项目授权给另外一个用户，授权时可以指定为"只读"、"成员"或"所有者"。

## Q2: 如何加密数据信息？

目前，系统对以下数据信息进行加密处理。

- "全局变量"或"项目变量"的值内容。
- "全局连接器"或"项目连接器"的配置内容。
- "配置设置"的值内容。

用户可以在启动Walrus实例时，通过环境变量来加密这些数据信息，以实现库内加密。

> 注意：
> - 该配置只在初次启动Walrus实例时生效，二次配置会导致系统启动失败。

```shell
# step 1: Get 128/256 bits key with OpenSSL.

openssl rand -hex 16
# openssl rand -hex 32


# step 2: Start Walrus with the follwoing command.

sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_DATA_ENCRYPTION=aesgcm:${the output from step 1} \
  sealio/walrus:<VERSION>

```

目前仅支持使用 [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) 模式，更多对称加密的支持，欢迎沟通联系。

## Q3: 如何修改日志级别？

目前，系统包含以下几个级别的日志：`debug`, `info`, `warning`, `error` 和 `fatal`。

配置参数 `log-debug` 和 `log-verbosity` 用于控制Walrus日志打印。参数 `log-debug` 配置为`true`将打印出所有级别的日志；配置为`false`，则打印出`info`, `warning`, `error` 和 `fatal`级别的日志。配置参数 `log-verbosity` 用于控制Walrus日志 verbosity 的最高级别，将打印出所有低于该级别的日志。

在服务器启动时，通过添加配置参数可控制Walrus日志打印。在服务器启动后，通过API可获取日志和动态修改日志配置。
```shell
# 获取日志配置
curl -k 'https://localhost/debug/flags'

# 修改日志配置
curl --request PUT 'https://localhost/debug/flags?log-debug=true&log-verbosity=5'
```
> 注意：
> - 出于安全考虑，API 修改日志配置仅支持通过 `localhost` 访问。
