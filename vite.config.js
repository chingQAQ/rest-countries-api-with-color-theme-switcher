import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import reactSvgPlugin from "vite-plugin-react-svg";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    reactSvgPlugin({
      defaultExport: "component"
    }),
    require('@tailwindcss/forms')
  ],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`
    }
  } 
});
