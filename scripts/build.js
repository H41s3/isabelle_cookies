const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const { join } = require('path');

console.log('🚀 Starting full build process...');

try {
  // Step 1: Run Next.js build (this will create the static export)
  console.log('📦 Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Step 2: Generate a simple sitemap manually since the dynamic import has issues
  console.log('🗺️  Generating sitemap...');
  generateSimpleSitemap();
  
  console.log('✅ Full build completed successfully!');
  console.log('📁 Static files are ready in the "out/" directory');
  console.log('🚀 Ready for deployment to GoDaddy!');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

function generateSimpleSitemap() {
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
  
  // Blog posts (hardcoded for now since we can't import the MDX functions)
  const blogPosts = [
    { slug: 'classic-chocolate-chip', date: '2024-01-15' },
    { slug: 'oatmeal-raisin-cookies', date: '2024-01-20' },
    { slug: 'baking-tips', date: '2024-01-25' },
    { slug: 'behind-the-scenes', date: '2024-01-30' },
    { slug: 'seasonal-cookies', date: '2024-02-05' },
    { slug: 'bakery-news', date: '2024-02-10' },
  ];
  
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
  blogPosts.forEach(post => {
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
  console.log(`📊 Added ${staticPages.length} static pages and ${blogPosts.length} blog posts`);
}
