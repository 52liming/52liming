---
slug: docs-multi-instance
title:  多文档实例添加导航
authors: [xiaoming]
tags: [docusaurus]
---

> 官方文档 https://docusaurus.io/docs/docs-multi-instance

docusaurus 创建后有一个预设的默认文档```docs```，但是如果我们想想添加额外的文档就需要使用到 docusaurus 多文档实例。

## 文件目录

这里我添加了一个`resource` 即[资源]文档

```
chatonline
├── docs
├── docusaurus.config.js
└── resource
    └── index.md
```

## 插件配置

按照官方文档配置插件

```js
  plugins: [
    [ '@docusaurus/plugin-content-docs',
      { id: 'resource', path: 'resource', routeBasePath: 'resource', sidebarPath: require.resolve('./sidebars.js'), }
    ],
  ],
```

## 导航配置

由于官方文档并没有说明, 这里自己摸索了下, 不能像默认的`docs`那样使用`topy`来配置。

而是需要使用`to`来配置，并且需要在`/resuource`下有`index`页面

```js
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        items: [
          { to: '/resource', label: '资源', position: 'left',},
          // highlight-next-line
          { to: '/blog', label: 'Blog', position: 'left' },
          { type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial' },
        ]
      }
    })
```