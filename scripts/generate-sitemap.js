import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the MDX functions using dynamic import
async function generateSitemap() {
  try {
    // Dynamic import to handle ES modules
    const { getAllPosts } = await import('../src/lib/mdx.js');
    
    const baseUrl = 'https://isabellecookies.com';
    const currentDate = new Date().toISOString();
    
    // Static pages
    const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/about/', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog/', priority: '0.9', changefreq: 'weekly' },
      { url: '/find-us/', priority: '0.7', changefreq: 'monthly' },
      { url: '/privacy/', priority: '0.5', changefreq: 'yearly' },
    ];
    
    // Get all blog posts
    const posts = getAllPosts();
    
    // Generate sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;
    
    // Add static pages
    staticPages.forEach(page => {
      sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });
    
    // Add blog posts
    posts.forEach(post => {
      sitemap += `  <url>
    <loc>${baseUrl}/blog/${post.slug}/</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    });
    
    sitemap += '</urlset>';
    
    // Write sitemap to public directory
    const sitemapPath = join(__dirname, '../public/sitemap.xml');
    writeFileSync(sitemapPath, sitemap);
    
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
    console.log(`📊 Added ${staticPages.length} static pages and ${posts.length} blog posts`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    process.exit(1);
  }
}

generateSitemap();
