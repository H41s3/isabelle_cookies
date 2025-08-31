import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-secondary to-primary/10 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl">🍪</span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-text dark:text-white mb-4">
            404
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text dark:text-white mb-6">
            Page Not Found
          </h2>
        </div>
        
        <p className="text-xl text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
          Oops! It looks like this page has gone missing, just like that last cookie from the jar. 
          Don't worry though - we've got plenty of delicious content waiting for you!
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="btn-primary text-lg px-8 py-3 block w-full sm:w-auto sm:inline-block"
          >
            Back to Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog/"
              className="btn-secondary text-lg px-6 py-3"
            >
              Browse Recipes
            </Link>
            
            <Link
              href="/find-us/"
              className="btn-secondary text-lg px-6 py-3"
            >
              Visit Our Bakery
            </Link>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
          <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
            Need Help?
          </h3>
          <p className="text-text-muted dark:text-gray-300 mb-4">
            If you're looking for something specific, give us a call and we'll be happy to help!
          </p>
          <a
            href={`tel:${siteConfig.phone}`}
            className="text-primary hover:text-primary-dark font-medium transition-colors duration-200"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
