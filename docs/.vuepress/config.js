module.exports = {
  base: '/tutu-vue3/',
  title: 'tutu-vue3',
  description: 'PC前台-开发文档',
  // theme: 'antdocs',
  themeConfig: {
    logo: '/hero.png',
    repo: 'https://github.com/vinchibana/tutu-vue3-docs',
    repoLabel: 'Github',
    nav: [
      { text: 'vue3前置', link: '/guide/00-vue3pre' },
      { text: '项目介绍', link: '/guide/01-intro' },
      { text: '项目起步', link: '/guide/02-started' },
      {
        text: '功能模块',
        ariaLabel: '功能模块',
        items: [
          { text: '首页模块', link: '/guide/03-home' },
          { text: '分类模块', link: '/guide/04-category' },
          { text: '商品详情', link: '/guide/05-detail' },
          { text: '登录模块', link: '/guide/06-login' },
          { text: '购物车', link: '/guide/07-cart' },
          { text: '结算&支付', link: '/guide/08-pay' },
          { text: '个人中心', link: '/guide/09-member' },
        ]
      },
      { text: '项目总结', link: '/guide/10-end' }
    ],
    sidebarDepth: 2,
    sidebar: 'auto'
  }
}
