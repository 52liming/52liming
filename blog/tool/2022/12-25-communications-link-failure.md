---
slug: 17004404.html
title: 08S01-Communications link failure
tags:  [idea]
---
IDEA Datebase 突然查询数据库失败，提示08S01错误

```shell
[08S01]	Communications link failure

	The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
Communications link failure

The last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.
```
<!-- truncate -->
## 解决
搜到的一些方法是更换驱动或者修改配置，但是我这之前是正常连接的应该和这些问题不大，最后发现是代理软件开了全局代理。这种类似问题经常遇到，找了问题发现是代理的问题:

![](./1084504-20221225185805817-2103223348.png)
