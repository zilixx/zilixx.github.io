const path = require('path')

module.exports = {
    title: '个人博客',
    locales: { // 多语言配置
        '/': {
            lang: 'zh-CN',
            title: '个人博客',
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                'imgs': path.join(__dirname, 'public/imgs') // 配置图片资源别名
            }
        }
    },
    theme: 'vuepress-theme-reco', // 设置theme
    themeConfig: {
        // logo: '' 配置导航栏图片
        nav: [ // 配置导航栏链接
            { text: '主页', link: '/' },
            { text: 'Linux相关', link: '/blogs/linux/' },
            { text: '算法与数据结构', link: '/blogs/data-structure/' },
            { text: 'github', link: 'https://github.com/zilixx', target: '_blank' },
        ],
        sidebar: {
            '/blogs/data-structure/': [
                {
                    title: '介绍',
                    path: '/blogs/data-structure/',
                },
                { title: '集合', path: '/blogs/data-structure/collection/' },
                { title: '链表', path: '/blogs/data-structure/linkedList/' },
                { title: '队列', path: '/blogs/data-structure/queue/' },
                { title: '栈', path: '/blogs/data-structure/stack/' },
            ],
            '/blogs/linux/': [
                {
                    title: '介绍',
                    path: '/blogs/linux/'
                },
                {
                    title: 'Linux基础',
                    collapsable: true,
                    children: [
                        { title: 'bash', path: '/blogs/linux/bash' },
                        { title: 'gcc以及编译', path: '/blogs/linux/gcc以及编译' },
                        { title: 'LINUX文件权限和目录', path: '/blogs/linux/LINUX文件权限和目录' },
                        { title: 'vim操作', path: '/blogs/linux/vim操作' },
                    ]
                },
                {
                    title: 'nginx学习',
                    collapsable: true,
                    children: [
                        { title: 'nginx安装', path: '/blogs/linux/nginx安装' }
                    ]
                },
            ],
            '/blogs/': [
                {
                    title: 'Linux与应用部署',
                    path: '/blogs/linux/', // 需要绝对路径
                },
                {
                    title: '算法以及数据结构',
                    path: '/blogs/data-structure/'
                }
            ]
        },
        // nextLinks: true, // 设置下一篇链接
        // prevLinks: true,
        markdown: {
            toc: {
                includeLevel: [1, 2]
            },
            lineNumbers: true
        }
    }
}