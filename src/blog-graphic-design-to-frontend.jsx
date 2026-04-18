import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogGraphicDesignToFrontend = () => {
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

        <h1 className="text-2xl font-bold mb-3">Graphic Design to Frontend</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          How graphic design shaped the way I build clearer and more polished interfaces.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; January 25, 2026 &bull; 5 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            Before coding, I worked as a graphic designer for over two years. That experience shaped how I build interfaces today.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Design Thinking in Code</h2>
          <p className="mb-5">
            Principles like alignment, spacing, and hierarchy work the same in design and code. I think about how elements should be grouped and how users' eyes should move across the page.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">From Photoshop to React</h2>
          <p className="mb-5">
            In design, I worked with layers and reusable assets. In React, I work with components and props. The mindset is similar—break complex visuals into smaller, manageable pieces.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Attention to Detail</h2>
          <p className="mb-5">
            Design taught me to care about small things—pixel-perfect alignment, consistent spacing, smooth transitions. I bring that same attention to my frontend work.
          </p>

          <p>
            My journey from design to development wasn't a shift—it was an evolution. Design and development are two sides of the same process for me.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogGraphicDesignToFrontend
