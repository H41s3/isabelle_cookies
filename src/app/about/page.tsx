import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story behind Isabelle Cookies, our values, and our passion for creating the most delicious artisanal cookies.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/10 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text dark:text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            From our family kitchen to your table, discover the passion and tradition 
            behind every pastry, cookie, cake, and bread we bake in our new home bakery.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-6">
                How It All Began
              </h2>
              <p className="text-lg text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                Isabelle Cookies was born in the heart of our family kitchen, where the aroma of 
                freshly baked pastries, cookies, cakes, and breads filled the air every Sunday afternoon. What started as a 
                grandmother's love for baking has grown into a passion that we're excited to share with our community.
              </p>
              <p className="text-lg text-text-muted dark:text-gray-300 mb-6 leading-relaxed">
                We're just starting our journey as a home bakery with a simple mission: to create baked goods 
                that taste like they were made with love in your own kitchen. Every recipe has been 
                passed down through generations, perfected over time, and made with the finest ingredients.
              </p>
              <p className="text-lg text-text-muted dark:text-gray-300 leading-relaxed">
                As we begin this exciting adventure, we're baking with the same care and attention to detail 
                that our grandmother taught us. Every pastry, cookie, cake, and bread tells a story of tradition, passion, 
                and pure deliciousness - and we can't wait to share it with you!
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-6xl">👩‍🍳</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Quality First
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We never compromise on quality. Every ingredient is carefully selected, and every 
                batch is made with the same attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Tradition & Innovation
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We honor traditional recipes while embracing new techniques and flavors that 
                delight our customers and keep baking exciting.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Community Connection
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We're more than just a bakery - we're part of the community. Every customer 
                becomes part of our extended family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-muted dark:text-gray-300 max-w-2xl mx-auto">
              The passionate bakers and staff who make it all possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👩‍🍳</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Isabelle
              </h3>
              <p className="text-primary font-medium mb-2">Founder & Head Baker</p>
              <p className="text-text-muted dark:text-gray-300">
                The heart and soul of our bakery, Isabelle brings decades of baking experience 
                and a passion for creating perfect cookies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👨‍🍳</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Michael
              </h3>
              <p className="text-primary font-medium mb-2">Pastry Chef</p>
              <p className="text-text-muted dark:text-gray-300">
                Our creative pastry chef who experiments with new flavors and techniques 
                while maintaining our traditional quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-2">
                Sarah
              </h3>
              <p className="text-primary font-medium mb-2">Customer Experience</p>
              <p className="text-text-muted dark:text-gray-300">
                Sarah ensures every customer feels welcome and leaves with a smile, 
                making our bakery feel like a second home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-secondary dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-text dark:text-white mb-6">
            Our Commitment to You
          </h2>
          <p className="text-xl text-text-muted dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            We promise to continue baking with the same love, care, and attention to detail 
            that has made us a beloved part of the community for over a decade.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Fresh Every Day
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                Every cookie is baked fresh daily, ensuring the best taste and texture 
                for our customers.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Local Ingredients
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We source ingredients from local suppliers whenever possible, supporting 
                our community and ensuring freshness.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Allergen Aware
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We're committed to providing clear information about ingredients and 
                offering options for various dietary needs.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-serif text-xl font-semibold text-text dark:text-white mb-3">
                Sustainable Practices
              </h3>
              <p className="text-text-muted dark:text-gray-300">
                We minimize waste, use eco-friendly packaging, and implement sustainable 
                practices throughout our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
