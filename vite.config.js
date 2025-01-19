import fs from 'node:fs';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';

// Function to retrieve all HTML files in the 'pages' directory
function getHtmlEntries() {
  const pagesDir = resolve(__dirname, );
  const files = fs.readdirSync(pagesDir);
  const htmlFiles = files.filter(file => file.endsWith('.html'));

  const entries = {};
  htmlFiles.forEach(file => {
    const name = file.replace('.html', '');
    entries[name] = resolve(pagesDir, file);
  });


  console.log(entries);
  return entries;
}

export default defineConfig({
  build: {
    // root: './src/pages',
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
