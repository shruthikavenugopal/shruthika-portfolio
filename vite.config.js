import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shruthika-portfolio/', // correct if deploying to GitHub Pages
  plugins: [react()],
})
