import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { formatDateString } from "vuepress/shared";

export default hopeTheme({
  // 主机名
  hostname: "https://chairo.cc/",

  // 默认作者信息
  author: {
    name: "ACGMN-HUB",
    url: "https://chairo.cc/",
    // email: "",
  },
  
  // 许可证 开源协议
  license: "CC BY-NC-SA 4.0 DEED",
  
  // 网站Favicon图标
  favicon: "./favicon.png",

  // icon引用资源
  iconAssets: "iconify",
  // iconAssets: [
  //   "//at.alicdn.com/t/c/font_4538361_ioprmpfbrn.css",
  // ],
  // iconPrefix: "iconfont ",
  
  // 导航栏配置
  navbar,

  // 导航栏logo
  logo: "./favicon.png",
  logoDark: "./favicon.png",

  // 仓库信息
  repo: "ACGMN-I-Project/ACGMN-HUB",
  repoLabel: "GitHub",
  // 是否显示仓库信息
  repoDisplay: true,

  // 导航栏内容布局
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  // 侧边栏配置
  sidebar,
  // 侧边栏自定义排序  
  sidebarSorter: ["readme", "order", "title", "filename"],

  // 页脚配置
  footer: "<a href='https://icp.gov.moe/?keyword=20229964'>萌ICP备20229964号</a>",
  // 页脚显示
  displayFooter: true,
  // 默认版权信息
  copyright: "Copyright © 2022-Present ACGMN-HUB",

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "ACGMN-I-Project/ACGMN-HUB",
      repoId: "R_kgDOLzl8Ew",
      category: "Announcements",
      categoryId: "DIC_kwDOLzl8E84CfYTC",
      mapping: "pathname",
      strict: true,
      lazyLoading: true,
      inputPosition: "top",
      lightTheme: "preferred_color_scheme",
      darkTheme: "preferred_color_scheme",
    },

    components: {
      components: ["ArtPlayer","Badge","BiliBili","CodePen","FontIcon","PDF","Share","SiteInfo","VPBanner","VPCard","VidStack"],
    },

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      footnote: true,
      hint:true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    searchPro: {
      autoSuggestions: true,
      indexContent: true,
      hotKeys: [{ key: "/", alt: true }],
      queryHistoryCount: 3,
      resultHistoryCount: 3,
      searchDelay: 150,
      // max 表示最高分更高的页面会排在前面
      // total 表示总分更高的页面会排在前面
      sortStrategy: "max",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    pwa: {
      favicon: "/favicon.png",
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
