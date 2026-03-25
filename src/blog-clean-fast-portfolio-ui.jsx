import { useEffect, useState } from 'react'
import './App.css'

const BlogCleanFastPortfolioUi = () => {
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="blog-header-separator p-3 border-b border-zinc-200 mb-3">
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

        <h1 className="text-2xl font-bold mb-3">Building Clean, Fast Portfolio UI</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          Why simple structure and tighter spacing make a portfolio feel more polished.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Lucero Agbayani &bull; February 10, 2026 &bull; 2 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator border-b border-zinc-200 pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5">
            A clean portfolio feels stronger when the layout is short, clear, and easy to scan. The essentials are:
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-6">
            <li>
              <strong>Clear sections</strong> - Hero, work, skills, and contact should each have one job.
            </li>
            <li>
              <strong>Consistent spacing</strong> - Repeating the same gaps and padding makes the page feel calmer.
            </li>
            <li>
              <strong>Reusable patterns</strong> - Cards, buttons, and content blocks should be easy to repeat.
            </li>
          </ul>

          <p className="mb-5">
            You do not need a complex layout to make a portfolio feel polished. A few strong sections, balanced spacing, and readable content already do most of the work.
          </p>

          <p>
            The best portfolio UI is usually the one that stays simple, loads fast, and lets the work speak first.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogCleanFastPortfolioUi
