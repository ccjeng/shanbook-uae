module.exports = {
    title: '杜拜是瞥見阿拉伯世界的一扇窗',
    description: '善善的第三本書：杜拜是瞥見阿拉伯世界的一扇窗',
    base: '/',
    repo: 'https://github.com/ccjeng/shanbook-uae',
    themeConfig: {
        sidebarDepth: 0,
        sidebar: [
          ['/','前言'],
          ['Dubai_Fountain','杜拜水舞']
        ],
        nav: [
          { text: '首頁', link: '/' },
          { text: '其他電子書', items: [
            { text: '我環遊世界的故事和勵志書', link: 'https://shanbook.carissalove.com/' },
            { text: '英國是個高度尊重禮遇身心障礙人士的先進國家', link: 'https://shanuk.carissalove.com/' }  
          ]
          }          
        ]
      },
    plugins: [
        ['@vuepress/google-analytics', {'ga': 'UA-19743390-33'} ],
        ['@vuepress/back-to-top']
    ]
}