import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  envPrefix: 'REACT_APP_',
  base: '/',

  plugins: [react(), envCompatible(), tsconfigPaths(), svgrPlugin( { } )],
  build: {
      outDir: "dist",
  },
  // add this 👇
  server: {
      port: 4000,
      open: true, // this will open directly to your browser
  },
});
