import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogBetterMobileCarousels = () => {
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

        <h1 className="text-2xl font-bold mb-3">Better Mobile Carousels</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          A simple guide to making mobile carousels look cleaner and feel more consistent.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; December 18, 2025 &bull; 4 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            Most mobile carousels feel clunky. Here's how to make them smooth and easy to use.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Common Problems</h2>
          <p className="mb-5">
            Carousels often scroll too fast, have awkward spacing, or don't show where you are in the sequence. These small issues make them frustrating to use.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">My Approach</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><strong>Smooth scrolling</strong> — Use CSS scroll-snap-type for natural swiping</li>
            <li><strong>Clear navigation</strong> — Add arrows and dots so users know where they are</li>
            <li><strong>Consistent spacing</strong> — Use Tailwind gap utilities to keep items balanced</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Handle Edge Cases</h2>
          <p className="mb-5">
            Disable arrows at the start and end to avoid confusion. Test on different screen sizes to make sure spacing works everywhere.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Keep It Fast</h2>
          <p className="mb-5">
            Use lazy loading for images. Only load them when they're about to appear. This keeps the carousel fast and responsive.
          </p>

          <p>
            A good carousel should feel effortless. Users shouldn't have to think about how to use it—they should just swipe and browse.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogBetterMobileCarousels
