import { defineConfig } from 'vite' 
import react from '@vitejs/plugin-react' 

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isVersionB = mode === 'version-b';
  
  return {
    plugins: [react()],
    base: '/',
    build: {
      outDir: isVersionB ? 'dist/b' : 'dist',
      rollupOptions: {
        input: {
          main: isVersionB ? 'index-b.html' : 'index.html',
        },
      },
    },
  };
});
