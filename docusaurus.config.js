// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '李鸣',
  tagline: '常疑即见桃花面，甚近来、翻笑无书',
  url: 'https://www.52liming.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '52liming', // Usually your GitHub org/user name.
  projectName: '52liming', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  scripts: [
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true, // 面包屑导航
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/',
          // blogSidebarTitle: '最近博客',
          showReadingTime: true,
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-W273PXSV20',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    // [ '@docusaurus/plugin-content-docs',
    //   { 
    //     id: 'python',
    //     path: 'python',
    //     routeBasePath: '/python',
    //     sidebarPath: require.resolve('./sidebars.js'),
    //    } 
    // ],
    [ '@docusaurus/plugin-content-blog',
      { 
        id: 'resource',
        path: 'resource',
        routeBasePath: '/resource',
        blogTitle: '资源',
        blogSidebarTitle: '个人收藏资源',
        showReadingTime: false,
        blogSidebarCount: 'ALL',
      } 
    ],
    [ '@docusaurus/plugin-content-blog',
      { 
        id: 'promotion',
        path: 'promotion',
        routeBasePath: '/promotion',
        blogTitle: '推广优惠',
        blogSidebarTitle: '推广返佣',
        showReadingTime: false,
        blogSidebarCount: 'ALL',
      } 
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '👑 <a target="_blank" rel="noopener noreferrer" href="https://cnblogs.vip">加入博客园会员</a> 🥳',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true, // 可隐藏的
          autoCollapseCategories: true, // 自动折叠
        }
      },
      navbar: {
        title: '李鸣的博客',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_32x32.png',
        },
        items: [
          { type: 'doc', docId: 'intro', label: '笔记', position: 'left'},
          { to: '/resource', label: '资源', position: 'left'},
          { to: '/promotion', label: '推广优惠', position: 'left' },

          { href: 'https://melon-partridge-fa1.notion.site/33c342a6afbe44828a7554d3cfc01bf5', label: '网站导航', position: 'left' },
          { href: 'https://52liming.cnblogs.com/', label: '博客园', position: 'left' },
          { to: '/about', label: '关于', position: 'right',},
          { type: 'dropdown', label: 'Project', position: 'right',
           items: [
            { to: '/eat', label: 'WhatEat'},
            { to: '/ChatGPT', label: 'ChatGPT'},
          ]},
          {
            href: 'https://github.com/52liming/52liming',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub 仓库',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: '<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次（by不蒜子）</span>'
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 李鸣. Built with <a href="https://docusaurus.io/">Docusaurus</a>. 
        Deployed by <a href='https://app.netlify.com/sites/quiet-centaur-34a719/deploys' target='_blank'><img style="vertical-align: -2px;" src='https://api.netlify.com/api/v1/badges/db886c15-1b26-4247-abbd-9a6c1a1a42c2/deploy-status' /></a>.
        <br /> <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2023027056号</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
  customFields:{
    // 个人链接
    links: [
      {
        name: '博客园',
        link: 'https://52liming.cnblogs.com/',
        imgSrc: '/img/links/cnblogs.png',
      },
      {
        link: 'https://gitee.com/forxiaoming',
        name: 'Gitee',
        imgSrc: '/img/links/gitee.png',
      },
      {
        link: 'https://stackoverflow.com/users/11966119/xiaoming',
        name: 'StackOverflow',
        imgSrc: 'img/links/stackoverflow.png',
      },
      {
        link: 'https://segmentfault.com/u/52liming',
        name: 'SegmentFault 思否',
        imgSrc: '/img/links/sf.png',
      },
      {
        link: 'https://space.bilibili.com/211909658',
        name: '哔哩哔哩',
        imgSrc: '/img/links/bilibili.png',
      },
      {
        link: '/shop',
        name: '微信小商店',
        imgSrc: '/img/logo_32x32.png',
      }
    ]
  }
};

module.exports = config;
