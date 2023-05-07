import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  // define: {
  //   ...(process.env.NODE_ENV === 'development' ? {global: 'window'} : {})
  // }
  define: {
    
    global: "globalThis",
    "process.env": {},
  },
});