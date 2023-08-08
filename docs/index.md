---
layout: home

hero:
  image:
    src: /logo.png
    alt: "网页的logo"
  name: GITHUB 技术热度
  text: 每日最新, star最多的技术
  actions:
    - theme: brand
      text: OPEN
      link: /statistics/
    - theme: alt
      text: github
      link: https://github.com/lzdml/time-task

features:
  - icon: 🚁️
    title: devDependencies
    details: vitepress-1.0.0-alpha.9 | vue-^3.2.37
  - icon: 💯
    title: dependencies
    details: nodemailer-^6.9.4
---

<style>

    .container .main .text {
        font-size: 20px;
        background: linear-gradient(120deg, #81FFEF 10%, #F067B4 100%);
        -webkit-background-clip: text;
        background-clip: text;
    }

    .VPButton.medium.brand, .VPButton.medium.alt {
        border: 0;
        padding: 4px 30px;
        border-radius: 10px;
    }


    .VPFeatures.VPHomeFeatures {
      padding-top: 40px;
    }


    :root {
      --vp-home-hero-name-color: transparent;
      --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #ff7707 30%, #809aff);
      --vp-home-hero-image-background-image: linear-gradient(-45deg, #ff7707 50%, #809aff 50%);
      --vp-home-hero-image-filter: blur(100px);
    }

</style>

<global />
