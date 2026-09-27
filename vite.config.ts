import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /<repo-name>/. Override with BASE_PATH
// (e.g. BASE_PATH=/ for a custom domain or a user site at <name>.github.io).
const base = process.env.BASE_PATH ?? '/osmond-portfolio/';

export default defineConfig({
  base,
  plugins: [react()],
});
