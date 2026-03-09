import { useEffect, useState } from 'react'
import './App.css'

const blogPosts = [
  {
    title: 'How I Build Portfolio UI That Looks Clean and Fast',
    date: 'February 10, 2026',
    readTime: '6 min read',
    category: 'Frontend',
    excerpt:
      'A practical breakdown of my layout process, spacing system, and component decisions to make portfolio pages feel polished on both desktop and mobile.',
  },
  {
    title: 'From Graphic Design to Frontend Development',
    date: 'January 25, 2026',
    readTime: '5 min read',
    category: 'Career',
    excerpt:
      'I shared how my experience in visual design improved my frontend work, especially in typography, contrast, and consistent UI hierarchy.',
  },
  {
    title: 'My React Workflow for Reusable Sections',
    date: 'January 8, 2026',
    readTime: '7 min read',
    category: 'React',
    excerpt:
      'This post covers how I structure reusable sections, keep component markup readable, and avoid duplication while scaling personal projects.',
  },
  {
    title: 'Building Better Mobile Carousels and Galleries',
    date: 'December 18, 2025',
    readTime: '4 min read',
    category: 'UI/UX',
    excerpt:
      'A short guide on fixed aspect ratios, clipping, and carousel behavior so mixed image sizes still look consistent and professional.',
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

  const onThemeButtonClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className="max-w-[1800px] mx-auto pt-4 sm:pt-5 px-5 sm:px-8 md:px-12 lg:px-44 xl:px-52 py-4 sm:py-6 md:py-10">
      <section className="p-3 border-b border-zinc-200 mb-3">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center mb-2 min-h-[32px]">
          <a
            href="/"
            className="justify-self-start inline-flex items-center gap-1 text-[13px] sm:text-[14px] text-zinc-900"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <path
                d="M14 10H4M4 10L8 6M4 10L8 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span>Back to Home</span>
          </a>
          <h1 className="text-lg font-bold text-center">Ken Blogs</h1>
          <button
            type="button"
            onClick={onThemeButtonClick}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`justify-self-end w-[28px] h-[28px] border-0 bg-transparent text-[12px] inline-flex items-center justify-center p-0 rounded-full transition-colors duration-200 ${
              isDark ? 'text-zinc-100 hover:bg-zinc-700' : 'text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            {isDark ? <i className="fa-solid fa-moon" aria-hidden="true"></i> : <span aria-hidden="true">☀</span>}
          </button>
        </div>
        <p className="text-sm leading-6">
          Notes, lessons, and practical write-ups about frontend development, UI design, and my progress as Ken.
        </p>
      </section>

      <section className="p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {blogPosts.map((post) => (
            <article key={post.title} className="border-b border-zinc-200 p-3 bg-zinc-50 transition-all duration-300 ease-out hover:-translate-y-0.5">
              <div className="flex items-center gap-2 mb-2 text-xs">
                <span className="px-2 py-0.5 bg-zinc-200">{post.category}</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-base font-semibold mb-2">{post.title}</h2>
              <p className="text-sm leading-6 mb-3">{post.excerpt}</p>
              <a href="#" className="text-xs inline-flex items-center gap-1 border-b border-zinc-200 pb-1">
                Read article <i className="fa-solid fa-angle-right" aria-hidden="true"></i>
              </a>
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
