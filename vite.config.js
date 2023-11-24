import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000,
    proxy: {
      '/articles': { 
        target: 'http://40.68.89.87:5601', 
        changeOrigin: true, 
        ws: true,  
     
      }
    },
  },

})
