import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Find Us',
  description: 'Visit Isabelle Cookies bakery in Sweet Town, NSW. Find our location, hours, and contact information.',
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
            Come visit our cozy bakery and experience the warm, welcoming atmosphere 
            where every pastry, cookie, cake, and bread is made with love and care.
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
                Our Location
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
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                      Hours
                    </h3>
                    <div className="text-lg text-text-muted dark:text-gray-300 whitespace-pre-line leading-relaxed">
                      {siteConfig.hours}
                    </div>
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
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-secondary dark:bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                    Isabelle Cookies Bakery
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Sweet Town, NSW 2000
                  </p>
                  <p className="text-sm text-text-muted dark:text-gray-400 mt-2">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Here */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-4">
              Getting Here
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              We're conveniently located in the heart of Sweet Town with easy access 
              from all directions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 12.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 12.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM5 12.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                By Car
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                Free parking available on-site and street parking nearby. 
                We're just off the main highway, easy to find with GPS.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                By Public Transport
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                Bus routes 101, 102, and 103 stop within a 2-minute walk. 
                Train station is a 10-minute walk away.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Walking
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                Perfect for a leisurely stroll from the town center. 
                We're located in a charming neighborhood with plenty of shops nearby.
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
              Your visit to Isabelle Cookies is more than just picking up cookies - 
              it's an experience that engages all your senses.
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
                    Warm Welcome
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    You'll be greeted with a smile and the irresistible aroma of freshly baked cookies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Fresh Selection
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Choose from our daily selection of cookies, all baked fresh that morning.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Expert Advice
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Our team is happy to share baking tips and help you choose the perfect cookies.
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
                    Cozy Atmosphere
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Enjoy your cookies in our comfortable seating area with a cup of coffee or tea.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Special Orders
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Place custom orders for special occasions, parties, or corporate events.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-text dark:text-white mb-2">
                    Take Home
                  </h3>
                  <p className="text-text-muted dark:text-gray-300">
                    Leave with a box of cookies and memories of a delightful bakery experience.
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
            Questions Before You Visit?
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 mb-8">
            We're here to help! Give us a call or send us a message on social media.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-primary text-lg px-8 py-3"
            >
              Call Us Now
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
