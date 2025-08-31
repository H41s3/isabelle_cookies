import { getAllPosts, getAllCategories, getAllTags } from '@/lib/mdx'
import PostCard from '@/components/PostCard'
import BlogFilters from '@/components/BlogFilters'

export default async function BlogPage() {
  const posts = getAllPosts()
  const categories = getAllCategories()
  const tags = getAllTags()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary/10 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-text dark:text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-text-muted dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest pastries, cookies, cakes, events, behind-the-scenes stories, and everything 
            happening at Isabelle Cookies.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <BlogFilters posts={posts} categories={categories} tags={tags} />
    </div>
  )
}
