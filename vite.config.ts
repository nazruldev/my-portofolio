import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Baru tiap deploy/build — bust cache CDN/browser untuk aset `public/` */
const assetCacheVersion =
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ??
  process.env.VITE_ASSET_VERSION ??
  String(Date.now())

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'html-asset-cache-bust',
      transformIndexHtml(html) {
        const q = `?v=${assetCacheVersion}`
        return html.replace(/\/img\/profile\.png/g, `/img/profile.png${q}`)
      },
    },
  ],
  define: {
    __ASSET_CACHE_VERSION__: JSON.stringify(assetCacheVersion),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
