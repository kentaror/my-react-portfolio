import { useEffect, useState } from 'react'
import './App.css'

const graphicImages = [
  { src: '/g1.png', alt: 'Graphic design 1' },
  { src: '/g2.png', alt: 'Graphic design 2' },
  { src: '/g3.png', alt: 'Graphic design 3' },
  { src: '/g4.png', alt: 'Graphic design 4' },
  { src: '/g5.jpg', alt: 'Graphic design 5' },
]

const GraphicDesign = () => {
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
          <h1 className="text-lg font-bold text-center">Graphic Designs</h1>
          <button
            type="button"
            onClick={onThemeButtonClick}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`justify-self-end w-[28px] h-[28px] border-0 bg-transparent text-[12px] inline-flex items-center justify-center p-0 rounded-full transition-colors duration-200 ${
              isDark ? 'text-zinc-100 hover:bg-zinc-700' : 'text-zinc-700 hover:bg-zinc-200'
            }`}
          >
            {isDark ? <i className="fa-solid fa-moon" aria-hidden="true"></i> : <i className="fa-regular fa-sun" aria-hidden="true"></i>}
          </button>
        </div>
        <p className="text-sm leading-6">A collection of my visual and branding works focused on composition, typography, and impactful storytelling.</p>
      </section>

      <section className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {graphicImages.map((image) => (
            <article key={image.src} className="transition-all duration-300 ease-out hover:-translate-y-0.5 border-b border-zinc-200 p-2">
              <img
                className="w-full h-44 sm:h-52 md:h-56 object-cover border border-zinc-200"
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
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

export default GraphicDesign


