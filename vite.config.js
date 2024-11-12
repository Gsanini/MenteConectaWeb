import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/MenteConectaWeb/",
  server: {
    port: 3002,
    open: true, // Abre o navegador automaticamente
  },
});
