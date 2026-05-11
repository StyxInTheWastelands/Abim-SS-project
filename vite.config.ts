import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url' // Add this
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function figmaAssetResolver() {
  return {
    name: 'Abim-SS',
    resolveId(id: string) { // Added type for id
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})