# Deployment Guide for Isabelle Cookies Blog

This guide will walk you through deploying your Isabelle Cookies blog website to GoDaddy hosting.

## Prerequisites

- GoDaddy hosting account with cPanel access
- Domain name pointed to your hosting
- Node.js installed on your local machine

## Local Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Build and Export
```bash
# Option 1: Use the build script
npm run build:full

# Option 2: Manual build
npm run build
npm run export
```

### 3. Verify Output
After building, check that the `out/` directory contains:
- `index.html`
- All static assets (CSS, JS, images)
- `sitemap.xml`
- `robots.txt`

## GoDaddy Deployment

### 1. Access cPanel
- Log into your GoDaddy hosting account
- Navigate to cPanel
- Find the "File Manager" section

### 2. Navigate to Public Directory
- Open File Manager
- Navigate to `public_html/` (or your domain's root directory)
- **Important**: Backup any existing files first!

### 3. Upload Files
- Upload all contents from your local `out/` directory
- Ensure the file structure matches:
  ```
  public_html/
  ├── index.html
  ├── about/
  ├── blog/
  ├── find-us/
  ├── privacy/
  ├── _next/
  ├── images/
  ├── sitemap.xml
  ├── robots.txt
  └── .htaccess
  ```

### 4. Upload .htaccess
- Upload the `.htaccess` file to the root of `public_html/`
- This file contains security headers and caching rules

### 5. Set File Permissions
- Set directories to `755`
- Set files to `644`
- Set `.htaccess` to `644`

## Post-Deployment Verification

### 1. Check Website
- Visit your domain to ensure the site loads
- Test all pages and navigation
- Verify images and assets load correctly

### 2. Check Security Headers
Use a tool like [Security Headers](https://securityheaders.com/) to verify:
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

### 3. Test SEO Elements
- Verify `robots.txt` is accessible
- Check `sitemap.xml` loads correctly
- Test meta tags and Open Graph

### 4. Performance Testing
- Run Lighthouse audit
- Check Core Web Vitals
- Verify caching headers

## Troubleshooting

### Common Issues

#### 1. 404 Errors
- Ensure `.htaccess` is uploaded
- Check file permissions
- Verify URL rewriting is enabled

#### 2. Assets Not Loading
- Check file paths in `out/` directory
- Verify all files uploaded completely
- Check browser console for errors

#### 3. Security Headers Not Working
- Ensure `.htaccess` is in root directory
- Check if mod_headers is enabled
- Verify Apache configuration

#### 4. Slow Loading
- Check caching headers
- Verify image optimization
- Test CDN if applicable

### GoDaddy-Specific Issues

#### 1. .htaccess Not Working
- Contact GoDaddy support to enable mod_rewrite
- Verify Apache configuration allows .htaccess overrides

#### 2. File Upload Limits
- Use FTP if File Manager has size limits
- Split large uploads into smaller batches

#### 3. SSL/HTTPS Issues
- Enable SSL certificate in cPanel
- Update site configuration to use HTTPS

## Maintenance

### Regular Updates
- Keep Node.js and dependencies updated
- Monitor security advisories
- Update content regularly

### Backup Strategy
- Backup `out/` directory before each deployment
- Keep local copy of source code
- Backup database if applicable

### Monitoring
- Set up uptime monitoring
- Monitor error logs
- Track performance metrics

## Advanced Configuration

### Custom Domain
- Point domain to GoDaddy nameservers
- Configure DNS records in cPanel
- Set up subdomains if needed

### SSL Certificate
- Enable Let's Encrypt SSL in cPanel
- Update site configuration for HTTPS
- Redirect HTTP to HTTPS

### CDN Integration
- Configure Cloudflare or similar CDN
- Update DNS records
- Optimize caching rules

## Support Resources

### GoDaddy Support
- [GoDaddy Help Center](https://www.godaddy.com/help)
- [cPanel Documentation](https://docs.cpanel.net/)
- 24/7 Phone Support

### Technical Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Apache .htaccess Guide](https://httpd.apache.org/docs/current/howto/htaccess.html)
- [Web Performance Best Practices](https://web.dev/performance/)

## Contact Information

For technical support with this website:
- **Email**: support@isabellecookies.com
- **Phone**: +61 4xx xxx xxx
- **Business Hours**: Monday-Friday 8:00 AM - 6:00 PM

---

**Note**: This deployment guide is specific to GoDaddy hosting with cPanel. If you're using a different hosting provider or control panel, the steps may vary.
