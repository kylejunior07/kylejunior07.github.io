import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the domain root on the kylejunior07.github.io user site.
// The deploy workflow sets BASE_PATH to /<repo-name>/ if the repo has another name.
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  base,
  plugins: [react()],
});
