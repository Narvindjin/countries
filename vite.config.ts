import react from '@vitejs/plugin-react'
import {
  dirname, resolve
} from 'node:path'
import { fileURLToPath } from 'node:url';
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
