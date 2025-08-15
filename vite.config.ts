import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración ultra-segura para producción
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    // Eliminar cualquier referencia a desarrollo
    'process.env.DEV': 'false',
    'process.env.VITE_DEV_MODE': 'false'
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
        // Eliminar cualquier referencia a APIs de desarrollo
        global_defs: {
          'webcontainer': 'undefined',
          'api.io': 'undefined',
          'localhost': 'undefined'
        }
      },
      mangle: {
        // Ofuscar nombres para mayor seguridad
        toplevel: true,
        safari10: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          utils: ['lucide-react'],
          intersection: ['react-intersection-observer']
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096
  },
  server: {
    // Configuración segura para desarrollo local
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    open: false,
    cors: false,
    // Bloquear conexiones externas
    proxy: {}
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
    open: false,
    cors: false
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    drop: ['console', 'debugger'],
    // Eliminar imports problemáticos
    banner: '/* MINUCST XV - Secure Build */',
    legalComments: 'none'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'framer-motion', 'react-intersection-observer']
  },
  // Configuración de seguridad adicional
  resolve: {
    alias: {
      // Prevenir imports maliciosos
      'webcontainer': false,
      'api.io': false
    }
  }
});