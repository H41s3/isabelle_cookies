# Isabelle Cookies Blog Website 🍪

A production-quality, static blog website for **"Isabelle Cookies"** - an artisanal cookie bakery with a warm, friendly vibe.

## ✨ Features

- **Static Export**: Built with Next.js 14+ and exports to static HTML
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Accessibility**: WCAG 2.2 AA compliant with keyboard navigation and screen reader support
- **Security**: Strict CSP headers, security best practices
- **Performance**: Optimized images, lazy loading, efficient caching
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark Mode**: Theme toggle with system preference detection
- **MDX Support**: Rich content with Markdown and React components

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd isabelle-cookies-blog

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build and export static files
npm run build:full

# Or manually
npm run build
npm run export
```

The static files will be generated in the `out/` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # Reusable React components
├── content/            # MDX blog posts
├── lib/                # Utility functions and configurations
└── types/              # TypeScript type definitions

public/                  # Static assets
├── images/             # Image files
├── robots.txt          # Search engine crawling rules
└── favicon.ico         # Site favicon

scripts/                 # Build and utility scripts
├── build.js            # Full build script
└── generate-sitemap.js # Sitemap generator

.htaccess               # Apache configuration for GoDaddy
```

## 🍪 Content Management

### Blog Posts
Blog posts are written in MDX format and stored in `src/content/posts/`. Each post includes:

- **Frontmatter**: Title, description, date, tags, category, cover image
- **Content**: MDX content with support for React components
- **Metadata**: SEO optimization and social sharing

### Categories
Posts are organized into categories:
- **Recipes**: Cookie recipes and baking instructions
- **Behind the Oven**: Bakery stories and behind-the-scenes content
- **Tips**: Baking tips and techniques
- **News**: Bakery updates and announcements

## 🎨 Customization

### Brand Colors
The color scheme is defined in `tailwind.config.js`:
- **Primary**: `#B67E4C` (caramel)
- **Secondary**: `#F3E9E2` (cream)
- **Accent**: `#7A3E2E` (cocoa)
- **Text**: `#1F2937` (dark gray)

### Fonts
- **Headings**: Fraunces (serif)
- **Body**: Inter (sans-serif)

### Components
All components are built with Tailwind CSS and can be easily customized by modifying the component files in `src/components/`.

## 🌐 Deployment

### GoDaddy (cPanel/Apache)
1. Build the project: `npm run build:full`
2. Upload contents of `out/` directory to `public_html/`
3. Upload `.htaccess` file to root directory
4. Set proper file permissions

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Other Hosting Providers
The static export works with any hosting provider that supports static websites:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any traditional web hosting

## 📱 Pages

- **Home** (`/`): Hero section, featured posts, about snippet, contact info
- **About** (`/about/`): Company story, values, team information
- **Blog** (`/blog/`): All blog posts with search and filtering
- **Find Us** (`/find-us/`): Location, hours, directions
- **Privacy** (`/privacy/`): Privacy policy and data handling
- **404**: Custom not-found page

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build Next.js project
- `npm run export` - Export static files
- `npm run build:full` - Full build with sitemap generation
- `npm run generate-sitemap` - Generate sitemap.xml
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🛡️ Security Features

- **Content Security Policy**: Strict CSP headers
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **HTTPS Ready**: Configured for secure connections
- **Input Sanitization**: MDX content is sanitized

## 📊 SEO Features

- **Meta Tags**: Comprehensive meta tag optimization
- **Structured Data**: JSON-LD for Organization, Website, Blog
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling configuration
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags

## ♿ Accessibility Features

- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: AA+ compliant color combinations
- **Skip Links**: Skip to main content functionality
- **Focus Management**: Visible focus indicators

## 🚀 Performance Features

- **Static Export**: No server-side rendering overhead
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Route-level code splitting
- **Caching**: Optimized caching headers
- **Compression**: Gzip compression enabled
- **Minification**: CSS and JavaScript minification

## 📝 Adding New Content

### New Blog Post
1. Create new `.mdx` file in `src/content/posts/`
2. Add frontmatter with required fields
3. Write content in MDX format
4. Build and deploy

### New Page
1. Create new directory in `src/app/`
2. Add `page.tsx` file
3. Update navigation if needed
4. Build and deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support with this website:
- **Email**: support@isabellecookies.com
- **Phone**: +61 4xx xxx xxx
- **Business Hours**: Monday-Friday 8:00 AM - 6:00 PM

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **MDX** for the content authoring experience
- **Community** for feedback and contributions

---

**Built with ❤️ for Isabelle Cookies**

*Every cookie tells a story, and every story deserves to be shared.* 🍪✨
