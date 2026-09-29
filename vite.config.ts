import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base: the same build works at kylejunior07.github.io/, under a
// /<repo-name>/ sub-path or on a custom domain, whatever the repo is called.
const base = process.env.BASE_PATH ?? './';

export default defineConfig({
  base,
  plugins: [react()],
});
