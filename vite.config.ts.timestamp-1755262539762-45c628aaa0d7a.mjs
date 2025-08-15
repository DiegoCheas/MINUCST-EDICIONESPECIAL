// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production")
  },
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug", "console.warn"]
      },
      mangle: true,
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
    host: false,
    port: 5173,
    strictPort: false,
    open: false,
    cors: false
  },
  preview: {
    host: false,
    port: 4173,
    strictPort: false,
    open: false,
    cors: false
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
    drop: ["console", "debugger"]
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
    include: ["react", "react-dom", "framer-motion", "react-intersection-observer"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudi5OT0RFX0VOVic6IEpTT04uc3RyaW5naWZ5KCdwcm9kdWN0aW9uJylcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICB0YXJnZXQ6ICdlc25leHQnLFxuICAgIG1pbmlmeTogJ3RlcnNlcicsXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICBwdXJlX2Z1bmNzOiBbJ2NvbnNvbGUubG9nJywgJ2NvbnNvbGUuaW5mbycsICdjb25zb2xlLmRlYnVnJywgJ2NvbnNvbGUud2FybiddXG4gICAgICB9LFxuICAgICAgbWFuZ2xlOiB0cnVlLFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICBhbmltYXRpb25zOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICB1dGlsczogWydsdWNpZGUtcmVhY3QnXSxcbiAgICAgICAgICBpbnRlcnNlY3Rpb246IFsncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ11cbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXVtleHRuYW1lXScsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLmpzJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogNDA5NlxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBmYWxzZSxcbiAgICBwb3J0OiA1MTczLFxuICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxuICAgIG9wZW46IGZhbHNlLFxuICAgIGNvcnM6IGZhbHNlXG4gIH0sXG4gIHByZXZpZXc6IHtcbiAgICBob3N0OiBmYWxzZSxcbiAgICBwb3J0OiA0MTczLFxuICAgIHN0cmljdFBvcnQ6IGZhbHNlLFxuICAgIG9wZW46IGZhbHNlLFxuICAgIGNvcnM6IGZhbHNlXG4gIH0sXG4gIGVzYnVpbGQ6IHtcbiAgICBsb2dPdmVycmlkZTogeyAndGhpcy1pcy11bmRlZmluZWQtaW4tZXNtJzogJ3NpbGVudCcgfSxcbiAgICBkcm9wOiBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXVxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBleGNsdWRlOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICAgIGluY2x1ZGU6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ2ZyYW1lci1tb3Rpb24nLCAncmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyJ11cbiAgfVxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5TixTQUFTLG9CQUFvQjtBQUN0UCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLHdCQUF3QixLQUFLLFVBQVUsWUFBWTtBQUFBLEVBQ3JEO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxlQUFlO0FBQUEsUUFDZixZQUFZLENBQUMsZUFBZSxnQkFBZ0IsaUJBQWlCLGNBQWM7QUFBQSxNQUM3RTtBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUEsVUFDWixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDN0IsWUFBWSxDQUFDLGVBQWU7QUFBQSxVQUM1QixPQUFPLENBQUMsY0FBYztBQUFBLFVBQ3RCLGNBQWMsQ0FBQyw2QkFBNkI7QUFBQSxRQUM5QztBQUFBLFFBQ0EsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsSUFDZCxXQUFXO0FBQUEsSUFDWCxzQkFBc0I7QUFBQSxJQUN0Qix1QkFBdUI7QUFBQSxJQUN2QixtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxhQUFhLEVBQUUsNEJBQTRCLFNBQVM7QUFBQSxJQUNwRCxNQUFNLENBQUMsV0FBVyxVQUFVO0FBQUEsRUFDOUI7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLFNBQVMsQ0FBQyxjQUFjO0FBQUEsSUFDeEIsU0FBUyxDQUFDLFNBQVMsYUFBYSxpQkFBaUIsNkJBQTZCO0FBQUEsRUFDaEY7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
