import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";
import dynamicImport from "vite-plugin-dynamic-import";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dynamicImport()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
        ],
    },
    server: {
        https: false,
        port: 5173,
        proxy: {
            "^/api": {
                target: "https://shikimori.one/api",
                changeOrigin: true,
                secure: false,
                rewrite: (proxyPath) => proxyPath.replace(/^\/api/, ""),
            },
        },
    },
});
