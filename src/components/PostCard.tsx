import Image from 'next/image'
import { Post } from '@/types'
import { categoryColors as categoryColorMap } from '@/lib/config'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const categoryColor = categoryColorMap[post.category] || 'bg-gray-500 text-white'

  return (
    <article className={`card overflow-hidden transition-transform duration-200 hover:-translate-y-1 ${
      featured ? 'md:col-span-2' : ''
    }`}>
      {post.coverImage && (
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          />
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${categoryColor}`}>
              {post.category}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className={`font-serif font-bold text-text dark:text-white mb-3 ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>
        
        <p className="text-text-muted dark:text-gray-400 mb-4 line-clamp-3">
          {post.description}
        </p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs bg-secondary dark:bg-gray-700 text-text dark:text-gray-300 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
