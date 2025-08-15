// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    // Eliminar cualquier referencia a desarrollo
    "process.env.DEV": "false",
    "process.env.VITE_DEV_MODE": "false"
  },
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn", "console.error"],
        // Eliminar cualquier referencia a APIs de desarrollo
        global_defs: {
          "webcontainer": "undefined",
          "api.io": "undefined",
          "localhost": "undefined"
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
          vendor: ["react", "react-dom"],
          animations: ["framer-motion"],
          utils: ["lucide-react"],
          intersection: ["react-intersection-observer"]
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js"
      }
    },
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1e3,
    assetsInlineLimit: 4096
  },
  server: {
    // Configuración segura para desarrollo local
    host: "127.0.0.1",
    port: 5173,
    strictPort: true,
    open: false,
    cors: false,
    // Bloquear conexiones externas
    proxy: {}
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
    open: false,
    cors: false
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    drop: ["console", "debugger"],
    // Eliminar imports problemáticos
    banner: "/* MINUCST XV - Secure Build */",
    legalComments: "none"
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["react", "react-dom", "framer-motion", "react-intersection-observer"]
  },
  // Configuración de seguridad adicional
  resolve: {
    alias: {
      // Prevenir imports maliciosos
      "webcontainer": false,
      "api.io": false
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIENvbmZpZ3VyYWNpXHUwMEYzbiB1bHRyYS1zZWd1cmEgcGFyYSBwcm9kdWNjaVx1MDBGM25cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52Lk5PREVfRU5WJzogSlNPTi5zdHJpbmdpZnkoJ3Byb2R1Y3Rpb24nKSxcbiAgICAvLyBFbGltaW5hciBjdWFscXVpZXIgcmVmZXJlbmNpYSBhIGRlc2Fycm9sbG9cbiAgICAncHJvY2Vzcy5lbnYuREVWJzogJ2ZhbHNlJyxcbiAgICAncHJvY2Vzcy5lbnYuVklURV9ERVZfTU9ERSc6ICdmYWxzZSdcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICBwdXJlX2Z1bmNzOiBbJ2NvbnNvbGUubG9nJywgJ2NvbnNvbGUuaW5mbycsICdjb25zb2xlLmRlYnVnJywgJ2NvbnNvbGUud2FybicsICdjb25zb2xlLmVycm9yJ10sXG4gICAgICAgIC8vIEVsaW1pbmFyIGN1YWxxdWllciByZWZlcmVuY2lhIGEgQVBJcyBkZSBkZXNhcnJvbGxvXG4gICAgICAgIGdsb2JhbF9kZWZzOiB7XG4gICAgICAgICAgJ3dlYmNvbnRhaW5lcic6ICd1bmRlZmluZWQnLFxuICAgICAgICAgICdhcGkuaW8nOiAndW5kZWZpbmVkJyxcbiAgICAgICAgICAnbG9jYWxob3N0JzogJ3VuZGVmaW5lZCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG1hbmdsZToge1xuICAgICAgICAvLyBPZnVzY2FyIG5vbWJyZXMgcGFyYSBtYXlvciBzZWd1cmlkYWRcbiAgICAgICAgdG9wbGV2ZWw6IHRydWUsXG4gICAgICAgIHNhZmFyaTEwOiB0cnVlXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICBhbmltYXRpb25zOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICB1dGlsczogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb246IFsncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ11cbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXScsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NlxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBDb25maWd1cmFjaVx1MDBGM24gc2VndXJhIHBhcmEgZGVzYXJyb2xsbyBsb2NhbFxuICAgIGhvc3Q6ICcxMjcuMC4wLjEnLFxuICAgIHBvcnQ6IDUxNzMsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBvcGVuOiBmYWxzZSxcbiAgICBjb3JzOiBmYWxzZSxcbiAgICAvLyBCbG9xdWVhciBjb25leGlvbmVzIGV4dGVybmFzXG4gICAgcHJveHk6IHt9XG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICBwb3J0OiA0MTczLFxuICAgIHN0cmljdFBvcnQ6IHRydWUsXG4gICAgb3BlbjogZmFsc2UsXG4gICAgY29yczogZmFsc2VcbiAgfSxcbiAgZXNidWlsZDoge1xuICAgIGxvZ092ZXJyaWRlOiB7ICd0aGlzLWlzLXVuZGVmaW5lZC1pbi1lc20nOiAnc2lsZW50JyB9LFxuICAgIGRyb3A6IFsnY29uc29sZScsICdkZWJ1Z2dlciddLFxuICAgIC8vIEVsaW1pbmFyIGltcG9ydHMgcHJvYmxlbVx1MDBFMXRpY29zXG4gICAgYmFubmVyOiAnLyogTUlOVUNTVCBYViAtIFNlY3VyZSBCdWlsZCAqLycsXG4gICAgbGVnYWxDb21tZW50czogJ25vbmUnXG4gIH0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gICAgaW5jbHVkZTogWydyZWFjdCcsICdyZWFjdC1kb20nLCAnZnJhbWVyLW1vdGlvbicsICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInXVxuICB9LFxuICAvLyBDb25maWd1cmFjaVx1MDBGM24gZGUgc2VndXJpZGFkIGFkaWNpb25hbFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIC8vIFByZXZlbmlyIGltcG9ydHMgbWFsaWNpb3Nvc1xuICAgICAgJ3dlYmNvbnRhaW5lcic6IGZhbHNlLFxuICAgICAgJ2FwaS5pbyc6IGZhbHNlXG4gICAgfVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsUUFBUTtBQUFBLElBQ04sd0JBQXdCLEtBQUssVUFBVSxZQUFZO0FBQUE7QUFBQSxJQUVuRCxtQkFBbUI7QUFBQSxJQUNuQiw2QkFBNkI7QUFBQSxFQUMvQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsZUFBZTtBQUFBLFFBQ2YsWUFBWSxDQUFDLGVBQWUsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsZUFBZTtBQUFBO0FBQUEsUUFFNUYsYUFBYTtBQUFBLFVBQ1gsZ0JBQWdCO0FBQUEsVUFDaEIsVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQSxVQUNaLFFBQVEsQ0FBQyxTQUFTLFdBQVc7QUFBQSxVQUM3QixZQUFZLENBQUMsZUFBZTtBQUFBLFVBQzVCLE9BQU8sQ0FBQyxjQUFjO0FBQUEsVUFDdEIsY0FBYyxDQUFDLDZCQUE2QjtBQUFBLFFBQzlDO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxJQUNkLFdBQVc7QUFBQSxJQUNYLHNCQUFzQjtBQUFBLElBQ3RCLHVCQUF1QjtBQUFBLElBQ3ZCLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLElBRU4sT0FBTyxDQUFDO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGFBQWEsRUFBRSw0QkFBNEIsU0FBUztBQUFBLElBQ3BELE1BQU0sQ0FBQyxXQUFXLFVBQVU7QUFBQTtBQUFBLElBRTVCLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxFQUNqQjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxJQUN4QixTQUFTLENBQUMsU0FBUyxhQUFhLGlCQUFpQiw2QkFBNkI7QUFBQSxFQUNoRjtBQUFBO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUE7QUFBQSxNQUVMLGdCQUFnQjtBQUFBLE1BQ2hCLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
