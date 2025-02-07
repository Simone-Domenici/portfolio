import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailiwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailiwindcss()],
  base: '/portfolio/',
})
