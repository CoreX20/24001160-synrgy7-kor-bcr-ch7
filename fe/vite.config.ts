import { defineConfig } from 'vite'
import inject from '@rollup/plugin-inject';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    react(),
  ],
  optimizeDeps: {
    include: ["jquery"],
},

  
})
