import { getAllPosts } from '@/lib/mdx'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import { siteConfig } from '@/lib/config'

export default async function HomePage() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.slice(0, 3)
  const recentPosts = allPosts.slice(3, 6)

  return (
    <>
      <Hero />
      
      {/* Featured Posts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              Featured Offerings
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most popular pastries, cookies, cakes, and bakery highlights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <PostCard 
                key={post.slug} 
                post={post} 
                featured={index === 0}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/blog/"
              className="btn-primary text-lg px-8 py-3"
            >
              View All Offerings
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-text dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                Isabelle Cookies began as a small family bakery with a big dream: to create the most 
                delicious, artisanal pastries, cookies, cakes, and breads using traditional recipes and the finest ingredients.
              </p>
              <p className="text-lg text-text-muted dark:text-gray-300 mb-8 leading-relaxed">
                Today, we continue that tradition, baking with love and sharing our passion for 
                perfect baked goods with every customer who walks through our doors.
              </p>
              <a
                href="/about/"
                className="btn-primary text-lg px-6 py-3"
              >
                Learn More About Us
              </a>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🍪</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Posts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-text dark:text-white mb-4">
              What's New at Isabelle Cookies
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              Stay updated with our newest flavors, events, and business services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="card overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <div className="relative overflow-hidden h-48">
                <img
                  src="/images/baking-tips.jpg"
                  alt="New Seasonal Flavors Available Now"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent text-white">
                    New Flavors
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-text-muted mb-3">
                  <time dateTime="2024-01-25">January 25, 2024</time>
                  <span>•</span>
                  <span>New Release</span>
                </div>
                <h3 className="font-serif font-bold text-text dark:text-white mb-3 text-xl">
                  <a
                    href="/blog/baking-tips/"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    New Seasonal Flavors Available Now
                  </a>
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-4 line-clamp-3">
                  Discover our latest seasonal cookie creations! From winter spice to spring blossom, 
                  we're bringing new flavors to delight your taste buds.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      seasonal
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      new flavors
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      limited time
                    </span>
                  </div>
                  <a
                    href="/blog/baking-tips/"
                    className="text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </article>
            <article className="card overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <div className="relative overflow-hidden h-48">
                <img
                  src="/images/oatmeal-raisin-cookies.jpg"
                  alt="Upcoming Cookie Decorating Workshop"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary text-white">
                    Events
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-text-muted mb-3">
                  <time dateTime="2024-01-20">January 20, 2024</time>
                  <span>•</span>
                  <span>Workshop</span>
                </div>
                <h3 className="font-serif font-bold text-text dark:text-white mb-3 text-xl">
                  <a
                    href="/blog/oatmeal-raisin-cookies/"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Cookie Decorating Workshop
                  </a>
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-4 line-clamp-3">
                  Join us for a fun-filled cookie decorating workshop! Learn techniques from our 
                  expert bakers and take home your beautiful creations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      workshop
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      events
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      fun
                    </span>
                  </div>
                  <a
                    href="/blog/oatmeal-raisin-cookies/"
                    className="text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </article>
            <article className="card overflow-hidden transition-transform duration-200 hover:-translate-y-1">
              <div className="relative overflow-hidden h-48">
                <img
                  src="/images/chocolate-chip-cookies.jpg"
                  alt="Corporate Catering Services"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary text-white">
                    Services
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-sm text-text-muted mb-3">
                  <time dateTime="2024-01-15">January 15, 2024</time>
                  <span>•</span>
                  <span>Business</span>
                </div>
                <h3 className="font-serif font-bold text-text dark:text-white mb-3 text-xl">
                  <a
                    href="/blog/classic-chocolate-chip/"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    Corporate Catering Services
                  </a>
                </h3>
                <p className="text-text-muted dark:text-gray-400 mb-4 line-clamp-3">
                  Elevate your next corporate event with our premium cookie catering! 
                  Perfect for meetings, celebrations, and client appreciation.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      catering
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      corporate
                    </span>
                    <span className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md">
                      events
                    </span>
                  </div>
                  <a
                    href="/blog/classic-chocolate-chip/"
                    className="text-primary hover:text-primary-dark font-medium transition-colors duration-200"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      
      {/* Find Us Section */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text dark:text-white mb-6">
            Order from Our Home Kitchen
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're a new home bakery just starting out! Order our fresh pastries, cookies, cakes, and breads made with love in our home kitchen
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">Location</h3>
              <p className="text-text-muted dark:text-gray-300">{siteConfig.address}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">Hours</h3>
              <p className="text-text-muted dark:text-gray-300 whitespace-pre-line">{siteConfig.hours}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">Phone</h3>
              <a 
                href={`tel:${siteConfig.phone}`}
                className="text-primary hover:text-primary-dark transition-colors duration-200"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
          
                      <a
              href="/find-us/"
              className="btn-primary text-lg px-8 py-3"
            >
              How to Order
            </a>
        </div>
      </section>
    </>
  )
}
