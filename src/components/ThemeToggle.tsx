'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  if (!mounted) {
    return (
      <div className="flex items-center space-x-1">
        <div className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
        <div className="w-8 h-8 rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse" />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-1 p-1 bg-secondary dark:bg-gray-700 rounded-lg">
      {/* Light Theme Button */}
      <button
        onClick={() => setTheme('light')}
        className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
          theme === 'light' 
            ? 'bg-primary text-white shadow-md' 
            : 'text-text hover:text-primary hover:bg-white/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-600/50'
        }`}
        aria-label="Switch to light theme"
        title="Light theme"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dark Theme Button */}
      <button
        onClick={() => setTheme('dark')}
        className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
          theme === 'dark' 
            ? 'bg-primary text-white shadow-md' 
            : 'text-text hover:text-primary hover:bg-white/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-600/50'
        }`}
        aria-label="Switch to dark theme"
        title="Dark theme"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </button>

      {/* System Theme Button */}
      <button
        onClick={() => setTheme('system')}
        className={`w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 ${
          theme === 'system' 
            ? 'bg-primary text-white shadow-md' 
            : 'text-text hover:text-primary hover:bg-white/50 dark:text-gray-300 dark:hover:text-primary dark:hover:bg-gray-600/50'
        }`}
        aria-label="Switch to system theme"
        title="System theme (follows your device setting)"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  )
}
