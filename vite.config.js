import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwind from "tailwindcss";
import path from "path"
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        agenda: resolve(__dirname, "routes/agenda/index.html"),
        activity: resolve(__dirname, "routes/activity/index.html"),
        contact: resolve(__dirname, "routes/contact/index.html"),
        team: resolve(__dirname, "routes/team/index.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
});
