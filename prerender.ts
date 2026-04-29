import 'ignore-styles';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from './src/entry-server';
import { routes } from './src/routes';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbs = (p: string) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8');

// Define routes to prerender
const routesToPrerender = [
  '/',
  '/tools',
  '/blog',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/tools/student-loan-calculator',
  '/tools/auto-loan-calculator',
  '/tools/personal-loan-calculator',
  '/tools/emi-loan-calculator'
];

const BASE_URL = 'https://omnitool-pk.vercel.app';

async function prerender() {
  console.log('🚀 Starting manual SSG prerendering...');
  
  // Generate sitemap
  console.log('  🌐 Generating page_sitemap.xml...');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routesToPrerender.map(url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.startsWith('/tools/') ? '0.8' : '0.5'}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  fs.writeFileSync(toAbs('dist/page_sitemap.xml'), sitemap);
  
  // Generate robots.txt
  console.log('  🤖 Generating robots.txt...');
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/page_sitemap.xml`;
  fs.writeFileSync(toAbs('dist/robots.txt'), robots);
  
  for (const url of routesToPrerender) {
    console.log(`  📄 Rendering ${url}...`);
    const { html, helmet } = render(url);

    const appHtml = template
      .replace(`<!--app-html-->`, html)
      .replace(`<title>Omnitools</title>`, helmet?.title?.toString() || '')
      .replace(`<!--app-head-->`, `
        ${helmet?.meta?.toString() || ''}
        ${helmet?.link?.toString() || ''}
      `);

    const fileName = url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`;
    const filePath = toAbs(`dist/${fileName}`);
    
    // Ensure directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, appHtml);
  }

  console.log('✅ SSG completed successfully.');
}

prerender().catch(err => {
  console.error('❌ SSG failed:', err);
  process.exit(1);
});
