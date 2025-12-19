import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Remove '-swc' from here
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})