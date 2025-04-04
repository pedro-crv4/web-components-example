import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: "src/entry.js",
            name: "CounterComponent",
            fileName: "counter-component",
            formats: ["es", "umd"],
        },
    },
});
