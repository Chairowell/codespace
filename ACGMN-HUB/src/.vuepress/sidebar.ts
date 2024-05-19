import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      // structure自动生成
      children: "structure",
      // 菜单分组可折叠
      collapsible: true,
    },
    {
      text: "指南",
      link: "/guide/README.md",
      icon: "lightbulb",
      // 在访问含有 `/demo/` 激活高亮
      activeMatch: "^/demo/",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
  ],
});
