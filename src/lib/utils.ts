import { format, formatDistanceToNow } from 'date-fns'

export function formatDate(date: string): string {
  return format(new Date(date), 'MMMM d, yyyy')
}

export function formatDateRelative(date: string): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.substring(0, length).trim() + '...'
}

export function classNames(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
