import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ViteImagemin from "vite-plugin-imagemin"; // Importando o plugin

export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      // Configurações para otimizar imagens durante o build
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
        ],
      },
      webp: {
        quality: 70, // Ajuste a qualidade para o formato WebP (0 a 100)
      },
    }),
  ],
  server: {
    port: 3002,
    open: true,
  },
});
