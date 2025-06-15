import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ВАЖЛИВО: шлях має відповідати назві репозиторію
export default defineConfig({
  base: '/weedding/',
  plugins: [react()],
});
