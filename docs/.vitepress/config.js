import { defineConfig } from "vitepress";
import { getNavs } from "./nav";
import { getSidebar } from './sidebars/index'

var globalConfig = "GITHUB每日热榜";

export default defineConfig({
  lang: "zh-CN",
  base: "/high-star/",
  appearance: true,
  title: globalConfig,
  description: "VitePress is a Vite-powered static site generator",
  ignoreDeadLinks: true,
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    sidebarDepth: 1,
    siteTitle: globalConfig,
    logo: '/favicon.ico',
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2012-present DL",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lzdml",
      },
    ],
    head: [
      [
        "link",
        {
          rel: "icon",
          href: "/time-task/favicon.ico",
        },
      ],
    ],
    nav: getNavs(),
    sidebar: getSidebar()
  },
});
