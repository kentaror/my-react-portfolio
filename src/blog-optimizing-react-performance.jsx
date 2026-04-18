import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogOptimizingReactPerformance = () => {
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

        <h1 className="text-2xl font-bold mb-3">Optimizing React Performance</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          Practical techniques for improving React app performance and avoiding common bottlenecks.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; March 20, 2026 &bull; 6 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            React is fast, but as apps grow, performance issues can appear. Here's how to keep your React app running smoothly.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Common Problems</h2>
          <p className="mb-5">
            The biggest issue is unnecessary re-renders. When components re-render too often, the app feels slow. Large JavaScript bundles also cause slow load times.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Stop Unnecessary Re-renders</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><strong>React.memo</strong> — Prevents re-renders when props don't change</li>
            <li><strong>useMemo</strong> — Caches expensive calculations</li>
            <li><strong>useCallback</strong> — Prevents functions from being recreated</li>
            <li><strong>Avoid inline functions</strong> — Define functions outside JSX</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Load Code Faster</h2>
          <p className="mb-5">
            Use React.lazy and Suspense to split your code into smaller chunks. Load heavy components only when needed. This reduces initial load time.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Manage State Better</h2>
          <p className="mb-5">
            Keep state local when possible. If only one component needs it, store it there. For global state, use lightweight libraries like Zustand or split context into smaller pieces.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Measure First</h2>
          <p className="mb-5">
            Use React DevTools Profiler to see which components are slow. Use Lighthouse to check overall performance. Measure before optimizing.
          </p>

          <p>
            Focus on the biggest bottlenecks first. Don't over-optimize early. Small improvements in the right places make a big difference.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogOptimizingReactPerformance
