// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '李鸣',
  tagline: 'Study・Record・Share',
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
          // blogSidebarTitle: '随笔',
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
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          { type: 'doc', docId: 'intro', position: 'right', label: 'Docs', },
          { to: '/resource', label: 'Resource', position: 'right',},
          { to: '/blog', label: 'Blog', position: 'right' },
          { to: '/ChatGPT', label: 'ChatGPT', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: '<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv"></span>次（by不蒜子）</span>'
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 李鸣. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
    }),
};

module.exports = config;
