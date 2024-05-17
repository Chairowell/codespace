import { defineUserConfig } from "vuepress";
import theme from "./theme/theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ACGMN-HUB",
  description: "Anime Comic Games Music Novel Hub",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
