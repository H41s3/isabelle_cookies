import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary dark:bg-gray-800 text-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl">I</span>
              </div>
              <span className="font-serif text-2xl font-bold text-text dark:text-white">
                {siteConfig.title}
              </span>
            </Link>
            <p className="text-text-muted dark:text-gray-400 mb-4 max-w-md">
              Artisanal bakery delights made with love and the finest ingredients in our home kitchen. 
              From cookies to cakes, pastries to breads - order online and enjoy fresh baked goods delivered to your door or pickup from our new home bakery!
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-text dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#offers" className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200">
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-text dark:text-white">
              Contact
            </h3>
            <div className="space-y-2 text-text-muted dark:text-gray-400">
              <p className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors duration-200">
                  {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="whitespace-pre-line">{siteConfig.address}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-600 mt-8 pt-8 text-center text-text-muted dark:text-gray-400">
          <p>&copy; {currentYear} {siteConfig.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
