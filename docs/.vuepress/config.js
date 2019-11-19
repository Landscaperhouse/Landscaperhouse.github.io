module.exports = {
    title: '山水有轻音首页', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '山水有轻音的前端记录', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    dest: 'public',
    head: [
        ['link', { rel: 'icon', href: '/flower.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {    
        logo: '/flower.png',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '首页', link: '/' },
            {
                text: '分类',
                ariaLabel: '分类',
                items: [
                    { text: '文章', link: '/pages/article/articlef.md' },
                    { text: '琐碎', link: '/pages/floder/first.md' },
                ]
            },
            { text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/dwanda' },
        ],
        sidebar: {
            '/pages/article/':[
                {
                    title: '测试菜单1',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['articlef.md', '子菜单1'],
                        ['articles.md', '子菜单2']
                    ]
                },
                {
                    title: '测试菜单2',
                    collapsable: false, // 可选的, 默认值是 true,
                    children: [
                        ['articleg.md', '子菜单1']
                    ]
                }
            ],
            '/pages/floder/':[
                {
                    title: '测试菜单3',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['first.md', '子菜单1'],
                        ['list.md', '子菜单2']
                    ]
                }
            ]
        }
    }
}