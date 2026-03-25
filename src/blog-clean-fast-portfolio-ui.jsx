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
        <div className="mb-2 flex items-start justify-between gap-3 min-h-[28px]">
          <a
            href="/blog-post"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 transition-colors duration-200 hover:text-sky-600"
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
        <h1 className="text-2xl font-bold">Building Clean, Fast Portfolio UI</h1>
        <p className="text-xs text-zinc-500 mb-1">Frontend • February 10, 2026 • 6 min read</p>
        <p className="text-sm leading-6">
          A practical walkthrough of the structure, spacing, and small interface decisions that make a portfolio feel polished without making the code harder to manage.
        </p>
      </section>

      <article className="p-3 text-sm leading-7">
        <section className="blog-card-separator border-b border-zinc-200 pb-6 mb-6">
          <p className="mb-4">
            A portfolio is usually one of the first projects people build, but making it feel clean and fast takes more than putting sections on a page. What helps most is having a simple structure, consistent spacing, and clear priorities for what the visitor should notice first.
          </p>
          <p>
            When I design a portfolio UI, I try to make every part feel intentional. The layout should be easy to scan, the content should have room to breathe, and the page should still feel smooth on smaller screens. That balance is what makes a simple portfolio look more professional.
          </p>
        </section>

        <section className="blog-card-separator border-b border-zinc-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Start With Clear Sections</h2>
          <p className="mb-4">
            I usually break the page into clear blocks like hero, about, experience, projects, and contact. That keeps the content easier to organize and makes the page feel predictable in a good way.
          </p>
          <p>
            Clear sections also make the code easier to maintain. If each part has one purpose, it becomes simpler to update later without affecting the whole page.
          </p>
        </section>

        <section className="blog-card-separator border-b border-zinc-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Use Spacing As a System</h2>
          <p className="mb-4">
            Spacing does a lot of the visual work. Consistent padding, margin, and gap values help the UI feel calmer and more balanced, even before colors or animations are added.
          </p>
          <p>
            Instead of guessing spacing for every section, I repeat the same rhythm across cards and containers. That makes the whole page feel connected and avoids random-looking layouts.
          </p>
        </section>

        <section className="blog-card-separator border-b border-zinc-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Keep Components Easy To Reuse</h2>
          <p className="mb-4">
            Reusable sections help a portfolio stay clean as it grows. Cards, buttons, badges, and content blocks should be simple enough to repeat without copying too much markup.
          </p>
          <p>
            This also improves speed while building. Once the pattern is set, I can focus more on content and polish instead of rebuilding the same structure again and again.
          </p>
        </section>

        <section className="blog-card-separator border-b border-zinc-200 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-3">Polish The Small Details</h2>
          <p className="mb-4">
            Small details do a lot of work in a portfolio. A subtle hover state, a balanced line length, and a stable layout in dark mode all add up to a better experience.
          </p>
          <p>
            None of these are huge features on their own, but together they make the project feel more thoughtful and more complete.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3">Final Thought</h2>
          <p>
            Clean portfolio UI is not about adding more. It is about choosing better structure, better spacing, and better priorities. When those parts are handled well, the page feels faster, clearer, and more professional from the first scroll.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        © 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogCleanFastPortfolioUi
