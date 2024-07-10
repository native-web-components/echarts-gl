import { defineConfig, loadEnv, ConfigEnv } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
// 在项目中动态加载依赖，防止项目中重复导入
// import { wcomp } from "vite-plugin-wcomp";

export default defineConfig(async (params: ConfigEnv) => {
  const { command, mode } = params;
  const ENV = loadEnv(mode, process.cwd());
  console.log("node version", process.version);
  console.info(
    `running mode: ${mode}, command: ${command}, ENV: ${JSON.stringify(ENV)}`
  );
  return {
    base: "./",
    resolve: {
      alias: {
        "echarts-gl": resolve(__dirname, "./node_modules/echarts-gl"),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "WebComponent",
        fileName: (format: string) => `echarts-gl.${format}.js`,
        // formats: ["es", "umd"],
      },
      emptyOutDir: true,
      sourcemap: mode === "development",
      minify: mode !== "development",
      rollupOptions: {
        // 配置将 ECharts 作为外部依赖
        external: ['echarts', 'echarts-gl'],
        output: {
          // 将 ECharts 作为全局变量引入
          globals: {
            "echarts": 'echarts',
            "echarts-gl": 'echartsGL',
          }
        }
      }
    },
    plugins: [
      dts({ rollupTypes: true })
    ],
  };
});
