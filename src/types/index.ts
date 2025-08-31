export interface Post {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  author: "Isabelle"
  tags: string[]
  category: "Recipes" | "Behind the Oven" | "Tips" | "News"
  coverImage?: string
  draft?: boolean
  content: string
  readTime: number
}

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  updated?: string
  author: "Isabelle"
  tags: string[]
  category: "Recipes" | "Behind the Oven" | "Tips" | "News"
  coverImage?: string
  draft?: boolean
}

export interface SiteConfig {
  title: string
  description: string
  url: string
  author: string
  socials: {
    instagram: string
    facebook: string
    x: string
  }
  phone: string
  address: string
  hours: string
}

export interface SEOProps {
  title: string
  description: string
  canonical?: string
  noindex?: boolean
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: string
  }
  twitter?: {
    card?: string
    title?: string
    description?: string
    image?: string
  }
}
