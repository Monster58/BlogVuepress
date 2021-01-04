const blogCatalog = require('./BlogCatalog.js');
module.exports = {
    //站点配置
    base: '/',
    dest: 'dist',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    title: 'zCloud',
    description: '个人网站',
    themeConfig: {
        logo: '/logo.jpg',
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/blog/web/' },
            { text: '作品', link: '/works/' },
            { text: '简历', link: '/resume/' },
            { text: 'GitHub', link: 'https://github.com/Monster58' },
        ],
        sidebar: blogCatalog,
        displayAllHeaders: false, // 默认值：false 显示所有页面的标题链接
        lastUpdated: '最后更新时间' // string | boolean
    },
    plugins: {
        '@vuepress/back-to-top': {},
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: true
        }
    },
    //开发配置
    extraWatchFiles: [ //监听文件变动将会触发 vuepress 重新构建，并实时更新。
        '/README.md',
        '.vuepress/theme/layouts/HomeLayout.vue',
        './config.js'
    ],
    port: 3000,
    theme: undefined,
    markdown: {
        lineNumbers: true //代码块显示行号
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    }
}