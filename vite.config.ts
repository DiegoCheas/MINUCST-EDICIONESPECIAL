import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          utils: ['lucide-react', 'react-intersection-observer']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    cssCodeSplit: false,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 8192
  },
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    open: false,
    // Enable HTTP/2 for better performance
    https: false,
    // Optimize dev server
    hmr: {
      overlay: false
    }
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
    open: false,
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // Optimize for performance
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true
  },
});