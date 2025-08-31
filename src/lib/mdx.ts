import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, PostMeta } from '@/types'
import { calculateReadTime } from './utils'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export function getPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter(fileName => fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const post: Post = {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
      author: data.author,
      tags: data.tags || [],
      category: data.category,
      coverImage: data.coverImage,
      draft: data.draft || false,
      content,
      readTime: calculateReadTime(content),
    }
    
    return post
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return posts
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  const allPosts = getAllPosts().filter(post => post.slug !== currentPost.slug)
  
  // Score posts based on category and tag overlap
  const scoredPosts = allPosts.map(post => {
    let score = 0
    if (post.category === currentPost.category) score += 3
    const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag))
    score += commonTags.length * 2
    return { post, score }
  })
  
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set<string>()
  posts.forEach(post => {
    categories.add(post.category)
  })
  return Array.from(categories).sort()
}
