import { defineUserConfig } from "vuepress";
import sidebar from "./configs/sidebar";

import registerComponentsPlugin from "@vuepress/plugin-register-components";
import { path } from "@vuepress/utils";

import navbar from "./configs/navbar";

import { defaultTheme } from "@vuepress/theme-default";

import { docsearchPlugin } from "@vuepress/plugin-docsearch";

let base: any = "/BlogDocs/";

if (process.env.BASE) {
  base = process.env.BASE;
}
export default defineUserConfig({
  // 站点配置
  lang: "zh-CN",
  title: "学无止境",
  description: "这是我的第一个 VuePress 站点",
  base: base,
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    docsearchPlugin({
      appId: "LO8EYOJFXN",

      apiKey: "d4b61c4f6e1f506a34e46442ee58639c",

      indexName: "react-vue3-go",
      //@ts-ignore
      container: "### REPLACE ME WITH A CONTAINER (e.g. div) ###",
      debug: false, // Set debug to true if you want to inspect the modal
      // 配置项
    }),
  ],
  theme: defaultTheme({
    sidebarDepth: 2, // 侧边栏显示深度，默认为1，即显示一级标题
    sidebar: sidebar,
    navbar: navbar.zh,
    lastUpdatedText: "上次更新", // 根据 git commit 记录显示每个页面的最后编辑时间
    repo: "https://github.com/5312/BlogDocs.git", // 启用到 GitHub 仓库的链接，显示在页面右上角
    repoLabel: "GitHub", // repo 链接显示的名字
    docsDir: "/vuepress/docs", // 使用 GitHub 仓库中哪个目录下的文档
    docsBranch: "master", // 指向 GitHub 仓库的哪个分支
    editLink: false,
    smoothScroll: true, // 在页面内进行跳转时，页面会平滑滚动
  }),
});
