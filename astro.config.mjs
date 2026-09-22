import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

// Build the set of noindex permalinks directly from content frontmatter, so
// the sitemap stays correct automatically as pages are added, without
// needing a manually maintained exclusion list.
function findNoindexPermalinks(dir) {
  const noindex = new Set();
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      for (const p of findNoindexPermalinks(full)) noindex.add(p);
      continue;
    }
    if (!entry.endsWith('.md')) continue;
    const content = readFileSync(full, 'utf-8');
    const fm = content.split('---')[1] ?? '';
    const indexMatch = fm.match(/^index:\s*(true|false)/m);
    const permalinkMatch = fm.match(/^permalink:\s*"([^"]*)"/m);
    if (indexMatch && indexMatch[1] === 'false' && permalinkMatch) {
      noindex.add(`https://ateshism.com${permalinkMatch[1]}`);
    }
  }
  return noindex;
}

const noindexUrls = findNoindexPermalinks(new URL('./src/content/pages', import.meta.url).pathname);

export default defineConfig({
  site: 'https://ateshism.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        video: false,
        xhtml: false,
      },
      filter: (page) => !noindexUrls.has(page),
    }),
  ],
});

