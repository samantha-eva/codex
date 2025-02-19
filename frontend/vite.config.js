import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permet d'accéder au serveur depuis d'autres machines
    watch: {
      usePolling: true, // Force Vite à surveiller les changements dans les fichiers
    },
  },
});
