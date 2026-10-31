import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  build: isSsrBuild
    // Compilation « serveur » pour le pré-rendu : pas de découpage en chunks.
    ? {}
    : {
        rollupOptions: {
          output: {
            manualChunks: {
              // Sépare les grosses librairies en chunks distincts
              'react-vendor':   ['react', 'react-dom', 'react-router-dom'],
              'motion':         ['framer-motion'],
              'supabase':       ['@supabase/supabase-js'],
              'ui':             ['lucide-react', 'clsx', 'tailwind-merge'],
              'lenis':          ['lenis'],
              'content':        ['marked', 'yaml'],
            },
          },
        },
        // Augmenter le seuil d'avertissement pour les chunks
        chunkSizeWarningLimit: 600,
      },
}))
