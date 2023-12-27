---
slug: 16755389.html
title: Stop Using TODO for Everything
tags:  [转发]
---
【转发】Stop Using TODO for Everything （停止使用 TODO 处理所有事情）

> https://goldin.io/blog/stop-using-todo

很多程序员习惯在代码注释写 TODO，表示待完成的任务。作者建议不要再写 TODO，而用具体的任务替代，比如需要添加文档写"DOCME"，需要添加测试写"TESTME"。

并不是说“注释不好”，或者“你应该只使用问题跟踪器”。而是有一些方便的，更具描述性的替代方案：
<!-- truncate -->
| Term            | Indicates...                                                                                 |
| --------------- | -------------------------------------------------------------------------------------------- |
| FIXME:          | something is broken (意味着代码还需要修改)                                                                         |
| HACK/OPTIMIZE:  | the code is suboptimal and should be refactored （功能虽然实现了，但是还有待商榷）                                             |
| BUG:            | there is a bug in the code                                                                   |
| CHECKME/REVIEW: | the code needs to be reviewed （方便在code review时与人讨论）                                                              |
| DOCME:          | the code needs to be documented (either in codebase or external documentation)               |
| TESTME:         | the specified code needs to be tested or that tests need to be written for that selection of |


这种TODO标签在vim中叫 task age；
Eclipse中也使用这种任务标签：`TODO`, `XXX`,`FIXME`。
IDEA 中也可以通过`Preferences > Editor > TODO`来自定义匹配:
![](https://img2022.cnblogs.com/blog/1084504/202210/1084504-20221005154324418-1659958849.png)
效果：
![](https://img2022.cnblogs.com/blog/1084504/202210/1084504-20221005161133371-616338655.png)

## 其他参考
* https://stackoverflow.com/questions/9586478/ide-comment-keywords