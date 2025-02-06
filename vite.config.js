import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  https: true,
  plugins: [
    tailwindcss(),
  ],
})
