import { defineConfig } from 'vite';
import { cpSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

// The site is plain HTML. Vite serves it in development, and on build we copy the
// folders that the page links to (photo, PDFs) into dist/ unchanged.
const copyStatic = () => ({
  name: 'copy-static-folders',
  closeBundle() {
    for (const dir of ['assets', 'docs']) {
      if (existsSync(dir)) cpSync(dir, resolve('dist', dir), { recursive: true });
    }
  }
});

export default defineConfig({
  base: './',
  publicDir: false,
  build: { outDir: 'dist', emptyOutDir: true, assetsInlineLimit: 0 },
  plugins: [copyStatic()]
});
