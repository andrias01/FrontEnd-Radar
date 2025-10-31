import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        'framer-motion': path.resolve(__dirname, 'src/lib/motion.tsx'),
        '@react-spring/web': path.resolve(__dirname, 'src/lib/reactSpring.ts'),
        zustand: path.resolve(__dirname, 'src/lib/zustand.ts'),
      },
    },
  }
})
