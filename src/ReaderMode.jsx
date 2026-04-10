gimport { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const ReaderMode = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const isReaderMode = searchParams.get('view') === 'reader'
  const currentFont = searchParams.get('font') || 'sans'

  const toggleReaderMode = () => {
    const newParams = new URLSearchParams(searchParams)
    if (isReaderMode) {
      newParams.delete('view')
      if (currentFont === 'sans') {
        newParams.delete('font')
      }
    } else {
      newParams.set('view', 'reader')
    }
    setSearchParams(newParams)
  }

  const setFont = (font) => {
    const newParams = new URLSearchParams(searchParams)
    if (font === 'sans') {
      newParams.delete('font')
    } else {
      newParams.set('font', font)
    }
    setSearchParams(newParams)
  }

  const getFontClass = () => {
    switch (currentFont) {
      case 'serif':
        return 'font-serif'
      case 'geist':
        return 'font-geist'
      default:
        return 'font-sans'
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'r' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggleReaderMode()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [isReaderMode])

  // Apply font class to body when reader mode is active
  useEffect(() => {
    if (isReaderMode) {
      const fontClass = getFontClass()
      document.documentElement.classList.add('reader-mode-active')
      document.documentElement.setAttribute('data-reader-font', currentFont)
    } else {
      document.documentElement.classList.remove('reader-mode-active')
      document.documentElement.removeAttribute('data-reader-font')
    }
    return () => {
      document.documentElement.classList.remove('reader-mode-active')
      document.documentElement.removeAttribute('data-reader-font')
    }
  }, [isReaderMode, currentFont])

  return (
    <>
      {/* Reader Mode Icon - Safari Style */}
      <button
        onClick={toggleReaderMode}
        className={`fixed top-4 right-20 z-50 w-10 h-10 flex items-center justify-center transition-all duration-300 ${
          isReaderMode 
            ? 'bg-black dark:bg-white text-white dark:text-black' 
            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
        }`}
        aria-label="Toggle reader mode"
        title="Reader View"
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          <line x1="10" y1="8" x2="16" y2="8" />
          <line x1="10" y1="12" x2="16" y2="12" />
          <line x1="10" y1="16" x2="16" y2="16" />
        </svg>
      </button>

      {/* Font Selector - Only visible in Reader Mode */}
      {isReaderMode && (
        <div className="fixed top-4 right-32 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-xs font-semibold transition-all duration-300"
            aria-label="Font options"
            title="Font Options"
          >
            AA
          </button>

          {/* Font Menu */}
          <div
            className={`absolute top-12 right-0 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl transition-all duration-200 ease-in-out origin-top-right ${
              isMenuOpen
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="p-3 space-y-2">
              <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">Font Family</p>
              <button
                onClick={() => { setFont('serif'); setIsMenuOpen(false); }}
                className={`w-full px-3 py-2 text-sm text-left transition-all duration-200 ${
                  currentFont === 'serif'
                    ? 'bg-black dark:bg-white text-white dark:text-black font-serif'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 font-serif'
                }`}
              >
                Serif
              </button>
              <button
                onClick={() => { setFont('sans'); setIsMenuOpen(false); }}
                className={`w-full px-3 py-2 text-sm text-left transition-all duration-200 ${
                  currentFont === 'sans'
                    ? 'bg-black dark:bg-white text-white dark:text-black font-sans'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 font-sans'
                }`}
              >
                Sans
              </button>
              <button
                onClick={() => { setFont('geist'); setIsMenuOpen(false); }}
                className={`w-full px-3 py-2 text-sm text-left transition-all duration-200 ${
                  currentFont === 'geist'
                    ? 'bg-black dark:bg-white text-white dark:text-black font-geist'
                    : 'bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 font-geist'
                }`}
              >
                Geist
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - No layout changes, only font changes */}
      {children}

      {/* Click outside to close menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}

export default ReaderMode
