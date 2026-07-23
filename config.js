/* ============================================================
 *  网站设置（控制面板）
 *  Site Configuration
 * ============================================================
 *  所有"看得到就能改"的内容都集中在这一个文件：
 *    · 个人信息（头像 / 用户名）
 *    · 各平台链接（博客 / B站 / GitHub / QQ / 邮箱 / RSS / ...）
 *    · 搜索框的搜索 URL
 *    · 问候语（副标题 + 按时间的问候）
 *    · 每日格言
 *    · 音乐播放列表
 *    · 图片资源路径（背景 / 立绘 / 画廊）
 *
 *  修改后保存 → 刷新浏览器 即可看到效果。
 *  页面逻辑代码请改 index.html，主题色请改 theme.css，
 *  一般情况下只动这一个文件就够了。
 * ============================================================ */

window.APP_CONFIG = {

    /* ============== 个人信息 ============== */
    profile: {
        // 站点显示的用户名（右上角徽章 + 问候语中会出现 {name} 占位）
        name: "Fqzlr",

        // 头像图片 URL（用在锁屏 + 右上角小头像）
        // 想换头像？把链接替换成你自己的图片地址即可
        avatar: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
    },

    /* ============== 外部链接 ============== */
    // 下面这些键名会被 index.html 里 data-cfg-href / data-cfg-open 引用
    // 想新增链接？在下方加一行：键名: "URL"，然后在 HTML 的对应元素上写 data-cfg-href="links.键名"
    links: {
        blog:     "https://fqzlr.com/",                     // 博客主页
        bilibili: "https://space.bilibili.com/2017273493",  // B 站个人空间
        github:   "https://github.com/fqzlr",               // GitHub
        qqGroup:  "https://qm.qq.com/q/wrmF4FI9pu",         // QQ 群
        email:    "mailto:fqzlr@outlook.com",               // 邮箱
        rss:      "https://fqzlr.com/rss/",                 // RSS 订阅
        posts:    "https://fqzlr.com/posts/",               // 博客文章列表（画廊右上小图）
        moments:  "https://fqzlr.com/moments/",             // 博客瞬间（画廊右下小图）
    },

    /* ============== 搜索 ============== */
    // 锁屏外的"放大镜"按钮使用的搜索 URL，{query} 会被替换成用户输入
    search: {
        url: "https://fqzlr.com/?s={query}",
        // 想换成 Google？改成 "https://www.google.com/search?q={query}"
    },

    /* ============== 问候语 ============== */
    greetings: {
        // 副标题（始终显示在问候语下方）
        sub: "躬身入局，心为主理，行有尺度，自持本心",

        // 根据时间段显示不同问候
        // from / to 是 24 小时制的小时数；to 不包含（例如 12 表示 06:00 ~ 12:00）
        // {name} 会被自动替换成上面的 profile.name
        timeBased: [
            { from: 6,  to: 12, text: "早上好，{name}！☕" },
            { from: 12, to: 18, text: "下午好，{name}！✨" },
            { from: 18, to: 23, text: "晚上好，{name}！🌙" },
            { from: 23, to: 6,  text: "夜深了，{name} 🌙" },  // 跨午夜段（23:00 ~ 06:00）
        ],
    },

    /* ============== 每日格言 ============== */
    quote: {
        text:   "躬身入局，心为主理，行有尺度，自持本心。",
        author: "— Fqzlr",
    },

    /* ============== 音乐播放列表 ============== */
    // 顺序播放；点"上一首 / 下一首"切换；播完最后一首回到第一首
    // 想加歌？复制一段花括号对象，title 改歌名、art 改封面图 URL、url 改音频文件 URL
    playlist: [
        {
            title: "Lofi Study Beats",
            art:   "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=150",
            url:   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            title: "Chill Vibes",
            art:   "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=150",
            url:   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            title: "Night Drive",
            art:   "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=150",
            url:   "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
    ],

    /* ============== 图片资源 ============== */
    // 路径相对于 index.html 所在目录（即 e:\AItool\home\）
    assets: {
        wallpaper: "images/wallpaper.png",  // 桌面 + 锁屏背景
        character: "images/character.png",  // 中央角色立绘
        gallery1:  "images/gallery1.jpg",   // 左侧大图
        gallery2:  "images/gallery2.jpg",   // 右上小图
        gallery3:  "images/gallery3.jpg",   // 右下小图
    },
};
