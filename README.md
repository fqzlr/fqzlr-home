# Fqzlr 个人主页

> 仿桌面 / 锁屏样式的玻璃态个人主页。点击锁屏解锁，内含实时时钟、每日格言、音乐播放器与快捷入口。

在线预览：<https://fqzlr.com/>

---

## ✨ 特性

- 🔒 锁屏界面（点击任意位置解锁）
- 🕐 实时时钟 + 日历
- 💬 按时间段自动切换问候语
- 📜 每日格言
- 🎵 内嵌音乐播放器（上一首 / 下一首 / 单曲循环 / 收藏）
- 🖼️ 画廊快捷入口
- 🎨 集中式配置：**改内容只需编辑一个 `config.js`**

---

## 📁 文件结构

```
home/
├── index.html      # 页面骨架
├── config.js       # ★ 所有可改内容（用户名/链接/播放列表/图片/问候语…）
├── theme.css       # 主题变量（颜色 / 玻璃态 / 图片兜底）
├── style.css       # 布局 / 组件 / 响应式
├── images/         # 图片资源
│   ├── wallpaper.png   # 桌面 + 锁屏背景
│   ├── character.png   # 中央角色立绘
│   ├── gallery1.jpg    # 画廊大图
│   ├── gallery2.jpg    # 画廊右上小图
│   └── gallery3.jpg    # 画廊右下小图
└── README.md
```

---

## 🚀 快速开始

### 本地预览

直接用浏览器打开 `index.html` 即可（无需任何构建工具）。  
推荐使用 VSCode 的 **Live Server** 插件，或：

```bash
python -m http.server 8000
# 浏览器访问 http://localhost:8000
```

### 部署到 GitHub Pages

1. 把仓库推送到 GitHub
2. 打开 **Settings → Pages**
3. Source 选 `main` 分支根目录
4. 几分钟后访问 `https://<用户名>.github.io/fqzlr-home/`

---

## ⚙️ 自定义设置

**普通用户只需要编辑 [`config.js`](./config.js) 一个文件**，不需要懂 HTML / CSS / JS。

### 1. 改用户名 / 头像

```js
profile: {
    name:   "Fqzlr",                          // 站点显示的用户名
    avatar: "https://q1.qlogo.cn/...",        // 头像图片 URL
},
```

### 2. 改各平台链接

```js
links: {
    blog:     "https://fqzlr.com/",
    bilibili: "https://space.bilibili.com/2017273493",
    github:   "https://github.com/fqzlr",
    qqGroup:  "https://qm.qq.com/q/wrmF4FI9pu",
    email:    "mailto:fqzlr@outlook.com",
    rss:      "https://fqzlr.com/rss/",
    posts:    "https://fqzlr.com/posts/",
    moments:  "https://fqzlr.com/moments/",
},
```

想新增链接？复制一行，**键名 + URL** 都改即可。

### 3. 改搜索

```js
search: {
    url: "https://fqzlr.com/?s={query}",  // {query} 会被替换成用户输入
},
```

换成 Google：`"https://www.google.com/search?q={query}"`

### 4. 改问候语

```js
greetings: {
    sub: "躬身入局，心为主理，行有尺度，自持本心",   // 副标题
    timeBased: [
        { from: 6,  to: 12, text: "早上好，{name}！☕" },
        { from: 12, to: 18, text: "下午好，{name}！✨" },
        { from: 18, to: 23, text: "晚上好，{name}！🌙" },
        { from: 23, to: 6,  text: "夜深了，{name} 🌙" },
    ],
},
```

- `from` / `to` 是 24 小时制的小时数，`to` 不包含（例如 `to: 12` 表示到 12:00 为止）
- `{name}` 会被自动替换为 `profile.name`
- 跨午夜段（23:00 ~ 06:00）的写法是 `from: 23, to: 6`

### 5. 改每日格言

```js
quote: {
    text:   "躬身入局，心为主理，行有尺度，自持本心。",
    author: "— Fqzlr",
},
```

### 6. 改音乐播放列表

```js
playlist: [
    {
        title: "Lofi Study Beats",
        art:   "https://...封面图.jpg",
        url:   "https://...音频文件.mp3"
    },
    // 想加歌？复制一段，改 title / art / url
],
```

> 顺序播放；播完最后一首自动回到第一首。

### 7. 改图片资源

把新图片放到 `images/` 目录，然后改路径：

```js
assets: {
    wallpaper: "images/wallpaper.png",
    character: "images/character.png",
    gallery1:  "images/gallery1.jpg",
    gallery2:  "images/gallery2.jpg",
    gallery3:  "images/gallery3.jpg",
},
```

---

## 🎨 改主题色

打开 [`theme.css`](./theme.css)，修改 `:root` 里的变量：

```css
:root {
    --accent-hue:     165;                                  /* 主题色相（0~360）*/
    --glass-bg:       rgba(255, 255, 255, 0.18);            /* 玻璃面板底色 */
    --glass-border:   rgba(255, 255, 255, 0.28);            /* 玻璃面板描边 */
    --glass-shadow:   0 20px 40px rgba(0, 0, 0, 0.3);       /* 玻璃面板阴影 */
    --text-primary:   #fff;                                 /* 主文本色 */
    --text-secondary: rgba(255, 255, 255, 0.7);            /* 次文本色 */
}
```

> 想换主色调？改 `--accent-hue` 一个数字即可（例如 220 = 蓝色、340 = 粉色）。

---

## 🧩 HTML 元素与配置绑定对照

`index.html` 中的可配置元素都通过 `data-cfg-*` 属性绑定到 `config.js`：

| 属性 | 作用 | 示例 |
|---|---|---|
| `data-cfg-text="profile.name"` | 设置元素文字 | `<span data-cfg-text="profile.name"></span>` |
| `data-cfg-href="links.blog"` | 设置链接 | `<a data-cfg-href="links.blog">…</a>` |
| `data-cfg-img="profile.avatar"` | 设置 `<img>` 的 src | `<img data-cfg-img="profile.avatar">` |
| `data-cfg-bg="profile.avatar"` | 设置背景图 | `<div data-cfg-bg="profile.avatar"></div>` |
| `data-cfg-open="links.blog"` | 点击后新窗口打开链接 | `<div data-cfg-open="links.blog">…</div>` |

> 一般不用动 HTML，除非你要新增按钮 / 调整布局。

---

## 🔄 更新与部署

修改 `config.js` 后，本地刷新即可看到效果。  
推送到 GitHub：

```bash
git add .
git commit -m "update: 更新内容"
git push
```

开启了 GitHub Pages 的话，几分钟后自动部署。

---

## 🛠️ 技术栈

- 纯 HTML / CSS / 原生 JavaScript
- Font Awesome 6（图标）
- Noto Sans SC + Share Tech Mono（字体）
- 无任何构建工具 / 依赖

---

## 📄 许可

MIT
