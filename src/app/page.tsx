import { getAllPosts } from '@/lib/mdx'
import Hero from '@/components/Hero'
import PostCard from '@/components/PostCard'
import { siteConfig } from '@/lib/config'

export default async function HomePage() {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <>
      <Hero />
      
      {/* Featured Posts */}
      <section id="offers" className="py-16 bg-white dark:bg-gray-900">
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
          
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-16 bg-secondary dark:bg-gray-800">
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
                perfect baked goods with every customer who orders from our online home bakery.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">🍪</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Find Us Section */}
      <section id="contact" className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-text dark:text-white mb-6">
            Order Online from Our Home Kitchen
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We're a new online home bakery! Order through social media or phone, then enjoy fresh pastries, cookies, cakes, and breads delivered to your door or pickup from our home kitchen
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">Location</h3>
              <p className="text-text-muted dark:text-gray-300">{siteConfig.address}</p>
              <p className="text-sm text-text-muted dark:text-gray-400 mt-2">Home kitchen • Pickup & delivery available</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">Order Now</h3>
              <a 
                href={`tel:${siteConfig.phone}`}
                className="text-primary hover:text-primary-dark transition-colors duration-200 text-lg font-medium block mb-2"
              >
                {siteConfig.phone}
              </a>
              {siteConfig.socials?.instagram && (
                <a 
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted dark:text-gray-400 hover:text-primary text-sm"
                >
                  or message us on Instagram
                </a>
              )}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phone}`}
              className="btn-primary text-lg px-8 py-3"
            >
              Call to Order
            </a>
            {siteConfig.socials?.instagram && (
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg px-8 py-3"
              >
                Order on Instagram
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
