module.exports = {
    title: '善善的第三本書：杜拜是瞥見阿拉伯世界的一扇窗',
    description: '',
    base: '/',
    repo: 'https://github.com/ccjeng/shanbook-uae',
    themeConfig: {
        sidebar: [
          '/',
          ['Dubai_Fountain','杜拜水舞 3/15']
        ],
        nav: [
          { text: 'Home', link: '/' },
        ]
      },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': 'UA-19743390-33'
          }
        ]
    ]
}