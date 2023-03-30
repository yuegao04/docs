---
sidebar_position: 1
---

# 常见问题

## Q1: 如何重置管理员密码？

> 注意：使用重置的新密码登录系统后，需要立即前往【账户设置】修改密码。

通过 `docker exec` 进入运行 Seal 的容器内，执行以下指令获得重置密码。

``` bash
curl -k -X POST https://127.0.0.1/v1/users/admin/password
```
