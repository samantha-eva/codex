import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Permet d'accéder au serveur depuis d'autres machines
    watch: {
      usePolling: true, // Force Vite à surveiller les changements dans les fichiers
    },
  },
});
