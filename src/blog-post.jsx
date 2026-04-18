import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const blogPosts = [
  {
    title: 'Stuck in Vim? Here\'s How to Exit',
    date: 'May 5, 2026',
    readTime: '5 min',
    category: 'Tutorial',
    href: '/blog/stuck-in-vim',
    excerpt:
      'A complete guide to exiting Vim in every situation with all the methods you need.',
  },
  {
    title: 'AI Integration in Modern Web Apps',
    date: 'April 15, 2026',
    readTime: '8 min',
    category: 'AI',
    href: '/blog/ai-integration-modern-web-apps',
    excerpt:
      'Exploring how AI is transforming web development and practical ways to integrate it into your projects.',
  },
  {
    title: 'Optimizing React Performance',
    date: 'March 20, 2026',
    readTime: '6 min',
    category: 'React',
    href: '/blog/optimizing-react-performance',
    excerpt:
      'Practical techniques for improving React app performance and avoiding common bottlenecks.',
  },
  {
    title: 'Building Clean, Fast Portfolio UI',
    date: 'February 10, 2026',
    readTime: '6 min',
    category: 'Frontend',
    href: '/blog/building-clean-fast-portfolio-ui',
    excerpt:
      'A quick look at how I design portfolio layouts that feel clean and fast.',
  },
  {
    title: 'Graphic Design to Frontend',
    date: 'January 25, 2026',
    readTime: '5 min',
    category: 'Career',
    href: '/blog/graphic-design-to-frontend',
    excerpt:
      'How graphic design shaped the way I build clearer and more polished interfaces.',
  },
  {
    title: 'Reusable React Sections Workflow',
    date: 'January 8, 2026',
    readTime: '7 min',
    category: 'React',
    href: '/blog/reusable-react-sections',
    excerpt:
      'How I build reusable React sections without making the markup messy or repetitive.',
  },
  {
    title: 'Better Mobile Carousels',
    date: 'December 18, 2025',
    readTime: '4 min ',
    category: 'UI/UX',
    href: '/blog/better-mobile-carousels',
    excerpt:
      'A simple guide to making mobile carousels look cleaner and feel more consistent.',
  },
  {
    title: 'Welcome to Ken’s Blog',
    date: 'December 18, 2025',
    readTime: '4 min ',
    category: 'UI/UX',
    href: '/blog/welcome-to-kens-blog',
    excerpt:
      'Welcome to the blog. Here is a quick look at what you’ll find.',
  },
]

const BlogPost = () => {
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsDark(localStorage.getItem('portfolio-theme') === 'dark')
  }, [])

  useEffect(() => {
    applyDocumentTheme(isDark)
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Ken's Blog"

    // Small delay before showing content
    requestAnimationFrame(() => {
      setIsVisible(true)
    })

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      document.title = previousTitle
      clearTimeout(timer)
    }
  }, [])

  const onThemeButtonClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'} ${!isLoading ? 'hidden' : ''}`}>
        {/* Full Page Skeleton */}
        <section className="blog-header-separator page-divider-b p-3 mb-3">
          <div className="grid grid-cols-[auto_1fr_auto] items-center mb-2 min-h-[32px]">
            <div className="h-8 bg-zinc-100 dark:bg-zinc-800 rounded w-32 skeleton-shimmer"></div>
            <div></div>
            <div className="w-[28px] h-[28px] bg-zinc-100 dark:bg-zinc-800 rounded-full skeleton-shimmer"></div>
          </div>
          <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-3/4 skeleton-shimmer"></div>
        </section>

        <section className="p-3">
          <div className="grid grid-cols-1 gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="blog-card-separator page-divider-b px-3 pt-3 pb-5"
              >
                <div className="mb-2 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                  <div className="h-5 bg-zinc-100 dark:bg-zinc-800 rounded w-3/4 sm:w-1/2 skeleton-shimmer"></div>
                  <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-24 skeleton-shimmer"></div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-full skeleton-shimmer"></div>
                  <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-5/6 skeleton-shimmer"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-3 bg-zinc-100 dark:bg-zinc-800 rounded w-20 skeleton-shimmer"></div>
                  <div className="h-3 bg-zinc-100 dark:bg-zinc-800 rounded w-12 skeleton-shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-3.5 pt-3 border-t border-zinc-200 dark:border-zinc-700 text-center text-sm mb-2">
          <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded w-64 mx-auto skeleton-shimmer"></div>
        </footer>
      </div>

      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Actual Content */}
        <section className="blog-header-separator page-divider-b p-3 mb-3">
            <div className="grid grid-cols-[auto_1fr_auto] items-center mb-2 min-h-[32px]">
              <h1 className="justify-self-start text-2xl font-bold">Ken's Blogs</h1>
              <div></div>
              <button
                type="button"
                onClick={onThemeButtonClick}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`group relative justify-self-end w-[28px] h-[28px] border-0 bg-transparent text-[12px] inline-flex items-center justify-center p-0 rounded-full !rounded-full overflow-hidden transition-all duration-200 ${
                  isDark ? 'text-zinc-100' : 'text-zinc-700'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 rounded-full !rounded-full opacity-0 transition-opacity duration-200 ${isDark ? 'bg-zinc-700/80 group-hover:opacity-100' : 'bg-zinc-200 group-hover:opacity-100'}`}
                ></span>
                {isDark ? <i className="fa-solid fa-moon relative z-[1]" aria-hidden="true"></i> : <span className="sun-icon-tabler relative z-[1]" aria-hidden="true"></span>}
              </button>
            </div>
            <p className="text-sm text-zinc-500 leading-6">
             Sharing my process through helpful Tutorials, Guides, and Workflows.
            </p>
          </section>

          <section className="p-3">
            <div className="grid grid-cols-1 gap-2">
              {blogPosts.map((post, index) => (
                <a
                  key={post.title}
                  href={post.href ?? '#'}
                  className="blog-card-separator group page-divider-b px-3 pt-3 pb-5 block cursor-pointer"
                >
                  <div className="mb-2 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <h2
                      className={`text-base font-semibold transition-opacity duration-300 ease-out ${
                        isDark ? 'group-hover:opacity-85 group-active:opacity-85' : 'group-hover:opacity-70 group-active:opacity-70'
                      }`}
                    >
                      {post.title}
                    </h2>
                    <span className="text-xs text-zinc-500 sm:shrink-0">{post.date}</span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-6 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span
                      className="inline-flex items-center gap-1 transition-colors duration-300 ease-out group-hover:text-sky-600 group-active:text-sky-600 focus-visible:text-sky-600 active:text-sky-600"
                    >
                      Read article{' '}
                      <i
                        className="fa-solid fa-angle-right transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-1 hover:translate-x-1 focus-visible:translate-x-1 active:translate-x-1"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span className="text-zinc-500">{post.readTime}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

        <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
          © 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

export default BlogPost
