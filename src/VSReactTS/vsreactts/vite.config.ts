import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

const ReactCompilerConfig = {
  target: '19', // React 19
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    plugin({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 43433,
  },
});
