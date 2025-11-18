import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/get": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/add": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/delete": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      "/updateUser": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
