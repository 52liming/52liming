---
sidebar_label: git log
description: 将仓库下某个模块复制到新仓库并保留提交记录
---
# git log
## git log 命令行可视化显示
命令：
```shell
# 图形化显示所有分支的提交日志
git log --all --decorate --oneline --graph
```
效果：
```shell
52liming % git log --all --decorate --oneline --graph
* 2c65aa0 (HEAD -> main, origin/main) ✨ feat(mini-pc): add unraid
* 941f95f ✨ feat(mini-pc): add j4125
* 2ee3a9f ✨ feat(python): add pip
* d3607d5 🐞 fix(design-patterns): update url
* 089d39a ✨ feat(LinkPage): add module css
* 6ef72ea 🌈 style: remove style
* ff9d606 ✨ feat: add LinkPage
* 2691a88 🌈 style(navbar): github icon css
```