import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Servido em https://jvreinaldo.github.io/portfolio/, precisa do base path
// batendo com o nome do repositório.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
