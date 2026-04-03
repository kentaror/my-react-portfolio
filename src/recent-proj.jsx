import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const projects = [
  {
    title: 'Cabanas',
    description: 'Hotel and boat booking for cabanas',
    site: 'cabanas.fun',
  },
  {
    title: 'sm404',
    description: 'Online coding bootcamp',
    site: 'sm-404.com',
  },
  {
    title: 'DIIN.PH',
    description: 'AI-powered wardrobe assistant',
    site: 'diin.ph',
  },
  {
    title: 'DYNAMIS Workout Tracker',
    description: 'AI-powered workout tracker',
    site: 'dynamis-app.online',
  },
]

const RecentProj = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(localStorage.getItem('portfolio-theme') === 'dark')
  }, [])

  useEffect(() => {
    applyDocumentTheme(isDark)
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const onThemeButtonClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className="page-fadeup max-w-4xl mx-auto px-4 py-8">
      <section className="fadeup-item fadeup-1 p-3 border-b border-zinc-200 mb-3">
        <div className="grid grid-cols-[auto_1fr_auto] items-center mb-2 min-h-[32px]">
          <a
            href="/"
            className="justify-self-start inline-flex items-center gap-1 text-[12px] sm:text-[13px] text-zinc-900"
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
          <h1 className="hidden sm:block text-lg font-bold text-center">Recent Projects</h1>
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
        <h1 className="sm:hidden text-lg font-bold text-center mt-2">Recent Projects</h1>
        <p className="text-sm leading-6">
          A summary of selected projects I built across booking platforms, bootcamps, and AI-powered products.
        </p>
      </section>

      <section className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="stagger-item border-b border-zinc-200 bg-zinc-100 p-2.5 transition-all duration-300 ease-out hover:-translate-y-0.5"
              style={{ '--stagger-delay': `${index * 100}ms` }}
            >
              <h4 className="text-sm font-semibold mb-1">{project.title}</h4>
              <p className="text-xs mb-1.5">{project.description}</p>
              <code className="text-xs bg-zinc-200 px-1.5 py-0.5">{project.site}</code>
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

export default RecentProj












