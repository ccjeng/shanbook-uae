module.exports = {
    title: '杜拜是瞥見阿拉伯世界的一扇窗',
    description: '善善的第三本書：杜拜是瞥見阿拉伯世界的一扇窗',
    base: '/',
    repo: 'https://github.com/ccjeng/shanbook-uae',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        sidebarDepth: 0,
        sidebar: [
          ['/','前言'],
          ['index2','前言二：媽媽的話'],
          ['dubai_fountain','杜拜水舞'],
          ['dubai_mall','杜拜購物中心'],
          ['burj_khalifah','世界第一高樓哈里發塔'],
          ['dubai_frame','杜拜相框'],
          ['atlantis.md','亞特蘭提斯失落密室水族館'],
          ['burj_al_arab.md','帆船飯店'],
          ['grand_mosque.md','謝赫扎耶德大清真寺'],
          ['emirates_palace.md','阿布達比酋長皇宮飯店'],
          ['louvre.md','阿布達比羅浮宮'],
          ['qasr_al_watan','阿布達比總統府'],
          ['airport','杜拜國際機場與奇蹟花園'],
          ['uae','阿拉伯聯合大公國'],
          ['videoshan','善善的杜拜影片區'],
          ['video','影片區']
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
        ['@vuepress/back-to-top'],
        ['@vuepress/last-updated'],
        ['img-lazy']
    ]
}
