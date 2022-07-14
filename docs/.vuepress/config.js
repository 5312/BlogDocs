const sidebar = require('./configs/sidebar')
const navbar = require('./configs/navbar')
const {
    defaultTheme
} = require('@vuepress/theme-default')

const {
    docsearchPlugin
} = require('@vuepress/plugin-docsearch')

let base = '/react-vue3-go/'

if (process.env.BASE) {
    base = process.env.BASE
}
module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: '学无止境',
    description: '这是我的第一个 VuePress 站点',
    base: base,
    plugins: [
        docsearchPlugin({
            appId: 'LO8EYOJFXN',

            apiKey: 'd4b61c4f6e1f506a34e46442ee58639c',

            indexName: 'react-vue3-go',

            container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',

            debug: false // Set debug to true if you want to inspect the modal
                // 配置项
        }),
    ],
    theme: defaultTheme({
        // plugins: [
        //     docsearchPlugin({
        //         appId: 'LO8EYOJFXN',

        //         apiKey: 'd4b61c4f6e1f506a34e46442ee58639c',

        //         indexName: ' react-vue3-go',

        //         container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',

        //         debug: false // Set debug to true if you want to inspect the modal
        //             // 配置项
        //     }),
        // ],
        sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
        sidebar: sidebar,
        navbar: navbar.zh,
        lastUpdatedText: '上次更新', // 根据 git commit 记录显示每个页面的最后编辑时间
        repo: 'https://github.com/5312/react-vue3-go.git', // 启用到 GitHub 仓库的链接，显示在页面右上角
        repoLabel: 'GitHub', // repo 链接显示的名字
        docsDir: '/vuepress/docs', // 使用 GitHub 仓库中哪个目录下的文档
        docsBranch: 'master', // 指向 GitHub 仓库的哪个分支
        editLink: false,
        smoothScroll: true, // 在页面内进行跳转时，页面会平滑滚动
        // 主题和它的配置
        // theme: '@vuepress/theme-default',
    })
}