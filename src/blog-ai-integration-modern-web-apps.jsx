import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogAiIntegrationModernWebApps = () => {
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

        <h1 className="text-2xl font-bold mb-3">AI Integration in Modern Web Apps</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          Exploring how AI is transforming web development and practical ways to integrate it into your projects.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; April 15, 2026 &bull; 8 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            AI is changing how we build web apps. It's not just a trend—it's becoming a practical tool for creating smarter, more responsive applications.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Why Use AI in Web Apps?</h2>
          <p className="mb-5">
            AI helps apps adapt to users, predict their needs, and automate tasks. Instead of static experiences, you can build interfaces that learn and improve over time.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Simple Ways to Add AI</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><strong>Chatbots</strong> — Handle support and answer questions automatically</li>
            <li><strong>Smart Search</strong> — Understand natural language and fix typos</li>
            <li><strong>Recommendations</strong> — Suggest content based on user behavior</li>
            <li><strong>Content Generation</strong> — Create text, images, or code snippets</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Getting Started</h2>
          <p className="mb-5">
            You don't need to build AI from scratch. Use APIs like OpenAI, Google Vision, or AWS services. Start with one feature, test it, and expand from there.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Things to Watch</h2>
          <p className="mb-5">
            AI can be slow or expensive if not optimized. Cache responses, batch requests, and monitor usage. Also, be transparent about how you handle user data.
          </p>

          <p>
            AI is becoming more accessible every day. Learning how to integrate it now will give you an edge as it continues to evolve.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogAiIntegrationModernWebApps
