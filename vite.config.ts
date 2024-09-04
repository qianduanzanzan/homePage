import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import compression from "vite-plugin-compression";
import { Plugin as importToCDN } from "vite-plugin-cdn-import";
import { visualizer } from 'rollup-plugin-visualizer';

const root = process.cwd();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({
    //   open: true, //在默认用户代理中打开生成的文件
    //   gzipSize: true, // 收集 gzip 大小并将其显示
    //   brotliSize: true, // 收集 brotli 大小并将其显示
    //   filename: "stats.html", // 分析图生成的文件名
    // }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // 指定图标文件夹
      iconDirs: [path.resolve(root, "src/assets/svg")],
      // 指定 symbolId 格式
      symbolId: "icon-[dir]-[name]",
    }),
    importToCDN({
      modules: [
        {
          // 引入时的包名
          name: "element-plus",
          // app.use(), 全局注册时分配给模块的变量
          var: "ElementPlus",
          // 根据自己的版本号找到对应的CDN网址
          path: "https://cdn.jsdelivr.net/npm/element-plus",
          // 根据自己的版本号找到对应的CDN网址
          css: "https://cdn.jsdelivr.net/npm/element-plus/dist/index.css",
        },
        {
          // 引入时的包名
          name: "vue",
          // app.use(), 全局注册时分配给模块的变量
          var: "vue",
          // 根据自己的版本号找到对应的CDN网址
          path: "https://cdn.jsdelivr.net/npm/vue",
        },
        {
          // 引入时的包名
          name: "vue-router",
          // app.use(), 全局注册时分配给模块的变量
          var: "vue-router",
          // 根据自己的版本号找到对应的CDN网址
          path: "https://cdn.jsdelivr.net/npm/vue-router",
        },
      ],
    }),
    compression({
      verbose: true,
      disable: false,
      algorithm: "gzip",
      threshold: 10240,
      deleteOriginFile: false,
      ext: ".gz",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 设置 '@' 指向项目的 src 目录
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // 指定输出路径
    chunkSizeWarningLimit: 1500,
    sourcemap: false, // 是否生成 source map
    emptyOutDir: true, //Vite 会在构建时清空该目录
    // 打包时清楚console和debugger
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // if (id.includes("scss")) {
          //   console.log(id)
          //   // 需要单独分割那些资源 就写判断逻辑就行
          //   return "src/style.css";
          // }
          // // 最小化拆分包
          if (id.includes("node_modules")) {
            return 'vendor'
            // return id
            //   .toString()
            //   .split("node_modules/")[1]
            //   .split("/")[0]
            //   .toString();
          }
        },
      },
    },
  },
  server: {
    host: true,
    port: 8080,
    open: false,
    hmr: true,
    cors: true,
    strictPort: false,
    proxy: {
      "^/api": {
        target: "https://vacation.t.17u.cn",
        changeOrigin: true,
      },
    },
  },
});
