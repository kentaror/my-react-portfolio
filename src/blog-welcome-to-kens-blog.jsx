import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogWelcomeToKensBlog = () => {
  const [isDark, setIsDark] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsDark(localStorage.getItem('portfolio-theme') === 'dark')
  }, [])

  useEffect(() => {
    applyDocumentTheme(isDark)
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsVisible(true)
    })
  }, [])

  const onThemeButtonClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <section className="blog-header-separator page-divider-b p-3 mb-3">
        <div className="mb-4 flex items-start justify-between gap-3 min-h-[28px]">
          <a
            href="/blog-post"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors duration-200 hover:!text-sky-600 focus-visible:!text-sky-600 active:!text-sky-600"
          >
            <i className="fa-solid fa-angle-left" aria-hidden="true"></i>
            All posts
          </a>
          <button
            type="button"
            onClick={onThemeButtonClick}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`group relative w-[28px] h-[28px] border-0 bg-transparent text-[12px] inline-flex items-center justify-center p-0 rounded-full !rounded-full overflow-hidden transition-all duration-200 ${
              isDark ? 'text-zinc-100' : 'text-zinc-700'
            }`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 rounded-full !rounded-full opacity-0 transition-opacity duration-200 ${
                isDark ? 'bg-zinc-700/80 group-hover:opacity-100' : 'bg-zinc-200 group-hover:opacity-100'
              }`}
            ></span>
            {isDark ? (
              <i className="fa-solid fa-moon relative z-[1]" aria-hidden="true"></i>
            ) : (
              <span className="sun-icon-tabler relative z-[1]" aria-hidden="true"></span>
            )}
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-3">Welcome to Ken&apos;s Blog</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          A short introduction to what this blog is about and the kinds of things I&apos;ll be sharing here.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; December 18, 2025 &bull; 4 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            Welcome to my blog. This is where I share the ideas, lessons, and practical workflows behind the work I build.
          </p>

          <p className="mb-5">
            Some posts will focus on frontend development, especially React, layout structure, responsive design, and cleaner UI decisions.
            Others will be about design thinking, portfolio improvements, and the small details that make projects feel more polished.
          </p>

          <p className="mb-5">
            I also want this space to document my progress. As I keep learning, building, and improving, this blog gives me a place to write
            about what is working, what I am refining, and what I am discovering along the way.
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li>
              <strong>Tutorials</strong> about UI structure, styling, and practical frontend techniques.
            </li>
            <li>
              <strong>Workflows</strong> that help me keep projects organized, reusable, and easier to maintain.
            </li>
            <li>
              <strong>Reflections</strong> on growth, design choices, and the process behind building better work.
            </li>
          </ul>

          <p>
            If you&apos;re interested in clean interfaces, thoughtful design, and steady progress in web development, you&apos;ll feel right at home here.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogWelcomeToKensBlog
