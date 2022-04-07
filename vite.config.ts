import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import serverHandler from "vite-plugin-mix";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    serverHandler({
      handler: "./server/index.ts",
    }),
  ],
});
