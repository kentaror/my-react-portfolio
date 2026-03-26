import { useEffect, useState } from 'react'
import './App.css'

const blogPosts = [
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
    excerpt:
      'How graphic design shaped the way I build clearer and more polished interfaces.',
  },
  {
    title: 'Reusable React Sections Workflow',
    date: 'January 8, 2026',
    readTime: '7 min',
    category: 'React',
    excerpt:
      'How I build reusable React sections without making the markup messy or repetitive.',
  },
  {
    title: 'Better Mobile Carousels',
    date: 'December 18, 2025',
    readTime: '4 min ',
    category: 'UI/UX',
    excerpt:
      'A simple guide to making mobile carousels look cleaner and feel more consistent.',
  },
]

const BlogPost = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(localStorage.getItem('portfolio-theme') === 'dark')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark)
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Ken's Blog"

    return () => {
      document.title = previousTitle
    }
  }, [])

  const onThemeButtonClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="blog-header-separator p-3 border-b border-zinc-200 mb-3">
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
          Notes, lessons, and practical write-ups about frontend development, UI design, and my progress as Ken.
        </p>
      </section>

      <section className="p-3">
        <div className="grid grid-cols-1 gap-2">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="blog-card-separator group border-b border-zinc-300 px-3 pt-3 pb-5"
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
                <a
                  href={post.href ?? '#'}
                  className="inline-flex items-center gap-1 transition-colors duration-300 ease-out group-hover:text-sky-600 group-active:text-sky-600 focus-visible:text-sky-600 active:text-sky-600"
                >
                  Read article{' '}
                  <i
                    className="fa-solid fa-angle-right transition-transform duration-300 ease-out group-hover:translate-x-1 group-active:translate-x-1 hover:translate-x-1 focus-visible:translate-x-1 active:translate-x-1"
                    aria-hidden="true"
                  ></i>
                </a>
                <span className="text-zinc-500">{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        © 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogPost
