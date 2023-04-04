---
sidebar_position: 1
---

# 常见问题

## Q1: 如何加密重要的帐密信息？

重要的帐密信息是指用户通过【运维中心/全局密钥】或【应用管理/密钥】面板所创建的值内容，通过【连接器】面板所填入的账户信息等。

为保护这类数据信息，用户可以在启动Seal实例时，通过环境变量来加密这类重要的帐密信息。

> 注意：该配置只在初次启动Seal实例时生效，二次配置会导致系统启动失败。

```shell
# step 1: Get 128/256 bits key with OpenSSL.

openssl rand -hex 16
# openssl rand -hex 32


# step 2: Start Seal with the follwoing.

-e SERVER_DATA_SOURCE_DATA_ENCRYPTION=aesgcm:${the output from step 1}

```

目前仅支持使用 [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) 模式。
