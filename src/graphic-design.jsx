import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const graphicImages = [
  { src: '/g1.png', alt: 'Graphic design 1' },
  { src: '/g2.png', alt: 'Graphic design 2' },
  { src: '/g3.png', alt: 'Graphic design 3' },
  { src: '/g4.png', alt: 'Graphic design 4' },
  { src: '/g5.png', alt: 'Graphic design 5' },
  { src: '/g6.png', alt: 'Graphic design 6' },
  { src: '/g7.png', alt: 'Graphic design 7' },
]

const GraphicDesign = () => {
  const [isDark, setIsDark] = useState(false)
  const [visibleImages, setVisibleImages] = useState(3)
  const [loadedImages, setLoadedImages] = useState(new Set())
  const [isVisible, setIsVisible] = useState(false)
  const observerRef = useRef(null)
  const sentinelRef = useRef(null)

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

  const loadMoreImages = useCallback(() => {
    setVisibleImages(prev => Math.min(prev + 3, graphicImages.length))
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleImages < graphicImages.length) {
          loadMoreImages()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current)
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [visibleImages, loadMoreImages])

  const handleImageLoad = useCallback((index) => {
    setLoadedImages(prev => new Set([...prev, index]))
  }, [])

  const onThemeButtonClick = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className={`max-w-4xl mx-auto px-4 py-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <section className="p-3 page-divider-b mb-3">
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
          <h1 className="hidden sm:block text-lg font-bold text-center">Graphic Designs</h1>
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
        <h1 className="sm:hidden text-lg font-bold text-center mt-2">Graphic Designs</h1>
        <p className="text-sm leading-6">
          A collection of my visual and branding works focused on composition, typography, and impactful storytelling.
        </p>
      </section>

      <section className="p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {graphicImages.slice(0, visibleImages).map((image, index) => (
            <article
              key={image.src}
              className="transition-all duration-300 ease-out hover:-translate-y-0.5 page-divider-b p-2"
            >
              <div className="relative w-full h-44 sm:h-52 md:h-56 bg-zinc-100 dark:bg-zinc-800">
                {!loadedImages.has(index) && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-zinc-300 border-t-zinc-600 rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  className={`w-full h-full object-cover border border-zinc-200 transition-opacity duration-300 ${
                    loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
            </article>
          ))}
        </div>
        
        {visibleImages < graphicImages.length && (
          <div ref={sentinelRef} className="h-20 flex items-center justify-center mt-4">
            <div className="text-sm text-zinc-500">Loading more...</div>
          </div>
        )}
      </section>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        © 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default GraphicDesign













