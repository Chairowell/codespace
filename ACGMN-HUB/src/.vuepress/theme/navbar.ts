import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "分类",
    icon: "icon-games",
    activeMatch: "^/guide/",
    children: [
      {
        text: "动画 - Anime",
        icon: "play",
        prefix: "anime/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "漫画 - Comic",
        icon: "lightbulb",
        prefix: "comic/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "游戏 - Games",
        icon: "lightbulb",
        prefix: "games/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "音乐 - Music",
        icon: "lightbulb",
        prefix: "music/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "小说 - Novel",
        icon: "lightbulb",
        prefix: "novel/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "",
    icon: "line-md:chevron-down-square-twotone",
    link: "https://www.chairo.cc/",
  },
]);
