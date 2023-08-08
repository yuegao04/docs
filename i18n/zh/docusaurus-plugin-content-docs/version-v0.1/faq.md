# 常见问题

## Q1: 如何加密重要的帐密信息？

重要的帐密信息是指用户通过【运维中心/全局密钥】或【应用管理/密钥】面板所创建的值内容，通过【连接器】面板所填入的账户信息等。

为保护这类数据信息，用户可以在启动Seal实例时，通过环境变量来加密这类重要的帐密信息。

> 注意：该配置只在初次启动Seal实例时生效，二次配置会导致系统启动失败。

```shell
# step 1: Get 128/256 bits key with OpenSSL.

openssl rand -hex 16
# openssl rand -hex 32


# step 2: Start Seal with the follwoing command.

sudo docker run -d --privileged --restart=always \
  -p 80:80 -p 443:443 \
  -e SERVER_DATA_SOURCE_DATA_ENCRYPTION=aesgcm:${the output from step 1} \
  <seal-container-image>

```

目前仅支持使用 [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) 模式，更多对称加密的支持，欢迎沟通联系。

## Q2: 如何修改 Seal 日志配置？

Seal包含以下几个级别的日志：`debug`, `info`, `warning`, `error` 和 `fatal`。

配置参数 `log-debug` 和 `log-verbosity` 用于控制Seal日志打印。参数 `log-debug` 配置为`true`将打印出所有级别的日志；配置为`false`，则打印出`info`, `warning`, `error` 和 `fatal`级别的日志。配置参数 `log-verbosity` 用于控制 Seal 日志 verbosity 的最高级别，将打印出所有低于该级别的日志。

在服务器启动时，通过添加配置参数可控制Seal日志打印。在服务器启动后，通过API可获取日志和动态修改日志配置。
```shell
# 获取日志配置
curl -k 'https://localhost/debug/flags'

# 修改日志配置
curl --request PUT 'https://localhost/debug/flags?log-debug=true&log-verbosity=5'
```
> 注意：出于安全考虑，API 修改日志配置仅支持通过 `localhost` 访问
