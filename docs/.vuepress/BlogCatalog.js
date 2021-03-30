const BLOG_BASE_PATH = '/blog/'
module.exports = {
    '/blog/': [
        // '',     /* /blog/ */
        {
            title: '前端开发',
            path: `${BLOG_BASE_PATH}web/`,
            children: [{
                title: 'Angular入门和使用',
                path: `${BLOG_BASE_PATH}web/Angular/`
            },
            {
                title: 'ES6笔记',
                path: `${BLOG_BASE_PATH}web/ES6/`
            },
            {
                title: 'Event-Loop',
                path: `${BLOG_BASE_PATH}web/EventLoop/`
            },
            {
                title: 'Git和GitHub的基本使用',
                path: `${BLOG_BASE_PATH}web/Git/`
            },
            {
                title: 'hexo常用命令',
                path: `${BLOG_BASE_PATH}web/hexo/`
            },
            {
                title: 'JS模块化',
                path: `${BLOG_BASE_PATH}web/JsModule/`
            },
            {
                title: 'MintUI的使用',
                path: `${BLOG_BASE_PATH}web/MintUI/`
            },
            {
                title: 'node.js入门和使用',
                path: `${BLOG_BASE_PATH}web/nodeJS/`
            },
            {
                title: 'nrm的安装使用',
                path: `${BLOG_BASE_PATH}web/nrm/`
            },
            {
                title: 'VueJS笔记',
                path: `${BLOG_BASE_PATH}web/vueJS/`
            },
            {
                title: 'React扩展笔记',
                path: `${BLOG_BASE_PATH}web/React/`
            },
            {
                title: 'webpack入门',
                path: `${BLOG_BASE_PATH}web/webpack/`
            },
            {
                title: '查看npm全局安装的模块',
                path: `${BLOG_BASE_PATH}web/npm/`
            },
            {
                title: '常用JS代码段',
                path: `${BLOG_BASE_PATH}web/js/`
            },
            {
                title: '配置browser—-sync浏览器同步测试工具',
                path: `${BLOG_BASE_PATH}web/browserSync/`
            },
            {
                title: '前端面试题收集',
                path: `${BLOG_BASE_PATH}web/Interview/`
            },
            {
                title: '什么是MVVM',
                path: `${BLOG_BASE_PATH}web/MVVM/`
            },
            {
                title: '正则表达式',
                path: `${BLOG_BASE_PATH}web/Regular/`
            }
            ]
        },
        {
            title: '服务器',
            path: `${BLOG_BASE_PATH}server/`,
            children: [{
                title: 'Nginx',
                path: `${BLOG_BASE_PATH}server/nginx/`
            }, {
                title: 'MySql',
                path: `${BLOG_BASE_PATH}server/mysql/`
            }, {
                title: '通过node创建服务器',
                path: `${BLOG_BASE_PATH}server/node/`
            }]
        },
        {
            title: '其他',
            path: `${BLOG_BASE_PATH}other/typora/`,
            children: [{
                title: 'typora+picgo-core+github配置图床实现自动上传图片',
                path: `${BLOG_BASE_PATH}other/typora/`
            }, {
                title: 'npm发包教程',
                path: `${BLOG_BASE_PATH}other/npm/`
            }, {
                title: 'http-server启动参数',
                path: `${BLOG_BASE_PATH}other/http-server/`
            }]
        }
    ]
}