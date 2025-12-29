// vite.config.ts - 修正版本
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // 移除 @tailwindcss/vite
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
