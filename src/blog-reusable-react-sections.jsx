import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogReusableReactSections = () => {
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

        <h1 className="text-2xl font-bold mb-3">Reusable React Sections Workflow</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          How I build reusable React sections without making the markup messy or repetitive.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; January 8, 2026 &bull; 7 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            Keeping React code clean and reusable is tricky. Here's my simple approach to building components that don't get messy.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">The Problem</h2>
          <p className="mb-5">
            Copying and pasting code across pages is easy at first, but it becomes hard to maintain. Changing one thing means updating it everywhere.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">My Workflow</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><strong>Build first</strong> — Write the full markup before thinking about reusability</li>
            <li><strong>Find patterns</strong> — Look for parts that repeat more than twice</li>
            <li><strong>Extract with purpose</strong> — Create components with a single, clear job</li>
            <li><strong>Keep it readable</strong> — If extraction makes code confusing, leave it as is</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Example: Cards</h2>
          <p className="mb-5">
            Instead of one generic Card component with many props, I create specific ones like ProjectCard, BlogCard, and CertificationCard. Each handles its own layout and styling.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">When Not to Extract</h2>
          <p className="mb-5">
            If a section only appears once, keep it inline. If extracting requires too many props, it's doing too much. Clarity is more important than reusability.
          </p>

          <p>
            Start simple, refactor when needed, and always prioritize readability over abstraction.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogReusableReactSections
