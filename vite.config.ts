import path from "node:path";

import vue from "@vitejs/plugin-vue";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [vue(), ssr({ prerender: true })],
  resolve: {
    alias: {
      components: path.resolve("components"),
      styles: path.resolve("styles"),
      utils: path.resolve("utils"),
    },
  },
};

export default config;
