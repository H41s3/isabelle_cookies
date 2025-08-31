import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Find Us',
  description: 'Isabelle Cookies - A new home-based bakery in Villacorte St., San Juan, San Miguel, Bulacan, Philippines. Order fresh pastries, cookies, and cakes made with love.',
}

export default function FindUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/10 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text dark:text-white mb-6">
            Find Us
          </h1>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            We're a new, passionate home bakery just starting our sweet journey! 
            Every pastry, cookie, cake, and bread is made with love in our home kitchen.
          </p>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Location */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-6">
                Our Home Kitchen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                      Address
                    </h3>
                    <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                      {siteConfig.address}
                    </p>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-2">
                      (Home-based bakery - please call ahead to arrange pickup)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                      Hours
                    </h3>
                    <div className="text-lg text-text-muted dark:text-gray-300 whitespace-pre-line leading-relaxed">
                      {siteConfig.hours}
                    </div>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-2">
                      (Flexible hours - please call to confirm availability)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                      Phone
                    </h3>
                    <a 
                      href={`tel:${siteConfig.phone}`}
                      className="text-lg text-primary hover:text-primary-dark transition-colors duration-200 font-medium"
                    >
                      {siteConfig.phone}
                    </a>
                    <p className="text-sm text-text-muted dark:text-gray-400 mt-2">
                      (Call or message to place orders and arrange pickup)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Kitchen Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-secondary dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">🏠</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                    Isabelle Cookies Home Kitchen
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Villacorte St., San Juan, San Miguel, Bulacan, Philippines
                  </p>
                  <p className="text-sm text-text-muted dark:text-gray-400 mt-2">
                    🆕 New home bakery - growing our business with love!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-4">
              How to Order
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Since we're just starting out as a home bakery, here's how you can order 
              our delicious treats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Call or Message
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                Give us a call or send us a message on social media to place your order. 
                We'll discuss what you'd like and when you need it.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Fresh Baking
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We'll bake your order fresh in our home kitchen, usually the same day 
                or next day depending on your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Pickup Arrangement
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                Arrange a convenient pickup time at our home location. 
                We'll have your order ready and waiting for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              As a new home bakery, we're building our business with every order. 
              Here's what you can expect from us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Personal Service
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Since we're just starting, every order gets our personal attention and care.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Fresh from Our Kitchen
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Every item is baked fresh in our home kitchen, just like we'd make for our own family.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Growing Together
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    We're learning and improving with every order. Your feedback helps us grow!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Flexible Orders
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    We can accommodate special requests and dietary needs as we build our menu.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Building Relationships
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    We're not just selling cookies - we're building a community of cookie lovers!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Future Growth
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    As we grow, we hope to offer delivery, more flavors, and maybe even a storefront someday!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-6">
            Ready to Try Our Home-Baked Treats?
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 mb-8">
            We're excited to share our passion for baking with you! Give us a call or message us to start your order.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-primary text-lg px-8 py-3"
            >
              Call to Order
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-lg px-8 py-3"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
