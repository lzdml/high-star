import DefaultTheme from "vitepress/theme";
import global from "../../../components/global.vue";
import image from "../../../components/image.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app
      .component("global", global)
      .component("GlobalImage", image);
  },
};
