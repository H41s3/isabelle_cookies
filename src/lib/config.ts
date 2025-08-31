import { SiteConfig } from '@/types'

export const siteConfig: SiteConfig = {
  title: 'Isabelle Cookies',
  description: 'Artisanal bakery delights made with love and the finest ingredients. From cookies to cakes, pastries to breads - discover our warm, friendly bakery and delicious baked goods.',
  url: 'https://isabellecookies.com',
  author: 'Isabelle',
  socials: {
    instagram: 'https://instagram.com/isabellecookies',
    facebook: 'https://facebook.com/isabellecookies',
    x: 'https://x.com/isabellecookies',
  },
  phone: '+61 4xx xxx xxx',
  address: '123 Cookie Lane, Sweet Town, NSW 2000, Australia',
  hours: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 5:00 PM\nSunday: 10:00 AM - 4:00 PM',
}

export const categories = [
  'Pastries',
  'Cookies',
  'Cakes',
  'Breads',
  'Behind the Oven',
  'Tips',
  'News'
] as const

export const categoryColors = {
  'Pastries': 'bg-primary text-white',
  'Cookies': 'bg-secondary text-text',
  'Cakes': 'bg-accent text-white',
  'Breads': 'bg-green-500 text-white',
  'Behind the Oven': 'bg-purple-500 text-white',
  'Tips': 'bg-orange-500 text-white',
  'News': 'bg-blue-500 text-white',
}
