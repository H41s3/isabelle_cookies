import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary to-primary/10 dark:from-gray-800 dark:to-gray-900 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text dark:text-white mb-6 leading-tight">
            Welcome to{' '}
            <span className="text-primary">Isabelle Cookies</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
            Artisanal bakery delights made with love and the finest ingredients in our home kitchen. 
            From cookies to cakes, pastries to breads - order online and enjoy fresh baked goods delivered to your door or pickup from our home kitchen!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/blog/" className="btn-primary text-lg px-8 py-3">
              Explore Our Offerings
            </Link>
            <Link href="/find-us/" className="btn-secondary text-lg px-8 py-3">
              Order Online
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-text dark:text-gray-300">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors duration-200">
                {siteConfig.phone}
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-text dark:text-gray-300">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">San Miguel, Bulacan, Philippines</span>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-text dark:text-gray-300">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">Open Daily</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  )
}
