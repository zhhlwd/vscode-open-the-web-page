## Demo

![kq2ghD.gif](https://s2.ax1x.com/2019/03/03/kq2ghD.gif)

## Introduction

Viewing documents directly in vscode, open web pages, and support custom bookmarks!

The project was inspired by [vue docs](https://marketplace.visualstudio.com/items?itemName=titiaiev.vue-docs).In vscode's extended market, vue-docs has 4,033 installations and 6,896 downloads

## usage

To use, press F1 then type open the web page then press Enter, select the desired item from the drop-down list.Press ESC to exit。

### Add a bookmark

> File -> Preferences -> Settings -> open the web page configuration -> "openTheWebPage":\{\}

Settings template

```json
"openTheWebPage": {
  "Vue/": {
    "Vue": "https://cn.vuejs.org/v2/guide/",
    "Vuex": "https://vuex.vuejs.org/zh/",
    "Vue Router": "https://router.vuejs.org/zh/",
    "Vue SSR": "https://ssr.vuejs.org/zh/",
    "Nuxt.js": "https://zh.nuxtjs.org/",
    "Vue CLI 3": "https://cli.vuejs.org/zh/",
    "VuePress": "https://vuepress.vuejs.org/zh/"
  },
  "React/": {
    "React": "https://react.css88.com/docs/getting-started.html"
  },
  "webpack": "https://webpack.docschina.org/concepts/",
  "sass": "https://www.sass.hk/docs/"
},
```

#### Multi-level bookmark

The extension recursively iterates through all the object properties in the setting until the property is not an object.

So you can write a nested object like the one above to represent a multi-level bookmark.

One trick is to put a "/" after the category to indicate that there are child bookmarks

example:

```json
"openTheWebPage": {
  "Vue/": {
    "Vue": "https://cn.vuejs.org/v2/guide/",
    "Vuex": "https://vuex.vuejs.org/zh/",
    "Vue Router": "https://router.vuejs.org/zh/",
    "child bookmarks/":{
      "child bookmarks":"url..."
    }
  },
  "React/": {
    "React": "https://react.css88.com/docs/getting-started.html",
    "child bookmarks/":{
      "child bookmarks":"url..."
    },
  },
  "webpack": "https://webpack.docschina.org/concepts/",
},
```

## Which web pages cannot be opened

- Set 'x-frame-options' to 'deny' or 'frame-ancestors:none'. Web pages cannot be nested in an iframe, for example: MDN, GitHub
- This page relies on localStorage or cache, for example: codelf
- File://protocol local file

If you think this plugin is good, can you give me a star?

github: https://github.com/zhhlwd/vscode-open-the-web-page

## 中文文档

### 简介

直接在 vscode 中查看文档，打开网页，并支持自定义书签!

项目灵感来源于[vue docs](https://marketplace.visualstudio.com/items?itemName=titiaiev.vue-docs).在 vscode 的扩展市场中，vue-docs 有 4033 个安装量和 6896 个下载量。

### 用法

请按 F1，然后键入 open the web page，然后按 Enter，从下拉列表中选择所需的项。按 ESC 退出。

### 添加书签

按下面顺序步骤打开 setting.json 文件，参考下面的例子写上配置字段，默认没有任何书签，如果你比较熟悉 vscode，可以不按此顺序

> File -> Preferences -> Settings -> open the web page configuration -> "openTheWebPage":\{\}

Settings template

```json
"openTheWebPage": {
  "Vue/": {
    "Vue": "https://cn.vuejs.org/v2/guide/",
    "Vuex": "https://vuex.vuejs.org/zh/",
    "Vue Router": "https://router.vuejs.org/zh/",
    "Vue SSR": "https://ssr.vuejs.org/zh/",
    "Nuxt.js": "https://zh.nuxtjs.org/",
    "Vue CLI 3": "https://cli.vuejs.org/zh/",
    "VuePress": "https://vuepress.vuejs.org/zh/"
  },
  "React/": {
    "React": "https://react.css88.com/docs/getting-started.html"
  },
  "webpack": "https://webpack.docschina.org/concepts/",
  "sass": "https://www.sass.hk/docs/"
},
```

### 多级书签

扩展会递归地遍历设置中的所有对象属性，把它们展示成列表选项，直到该属性不是对象为止。

因此，您可以编写像上面这样的嵌套对象来表示多层书签。

一个技巧是在类别后面加上“/”来表示有子书签

example:

```json
"openTheWebPage": {
  "Vue/": {
    "Vue": "https://cn.vuejs.org/v2/guide/",
    "Vuex": "https://vuex.vuejs.org/zh/",
    "Vue Router": "https://router.vuejs.org/zh/",
    "child bookmarks/":{
      "child bookmarks":"url..."
    }
  },
  "React/": {
    "React": "https://react.css88.com/docs/getting-started.html",
    "child bookmarks/":{
      "child bookmarks":"url..."
    },
  },
  "webpack": "https://webpack.docschina.org/concepts/",
},
```

### 哪些网页不能打开

- 将“x-frame-options”设置为“deny”或“frame- ancestry:none”。Web 页面就不能嵌套在 iframe 中，例如:MDN、GitHub
- 这个页面依赖于本地存储或缓存，例如:codelf
- file://协议开头的本地文件

### 已知问题

- vscode 在打开 webview 中没有鼠标右键菜单，但可以选中文字按 Ctrl+c 来复制
- vscode 在 webview 顶部选项卡附近会鼠标失焦，让鼠标右键打开 vscode 菜单后会自动关闭，这是 vscode 的问题，解决方法是不要在 webview 附近右键，在其他代码页点击右键

如果您觉得这个插件不错，您能给我一个 star 吗？

github: https://github.com/zhhlwd/vscode-open-the-web-page
