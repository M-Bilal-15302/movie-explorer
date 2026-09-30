// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "/movie-explorer/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // <-- Change this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/movie-explorer/",
});
