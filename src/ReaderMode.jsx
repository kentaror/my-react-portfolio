import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const ReaderMode = ({ children, showNav = true, showFooter = true }) => {
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

  return (
    <>
      {/* AA Control Center */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 backdrop-blur-md bg-white/70 dark:bg-black/70 border border-zinc-200/50 dark:border-zinc-700/50 flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:bg-white/90 dark:hover:bg-black/90 shadow-lg"
          aria-label="Reader mode controls"
        >
          AA
        </button>

        {/* Control Menu */}
        <div
          className={`absolute top-14 right-0 w-64 backdrop-blur-md bg-white/70 dark:bg-black/70 border border-zinc-200/50 dark:border-zinc-700/50 shadow-xl transition-all duration-300 ease-in-out origin-top-right ${
            isMenuOpen
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="p-4 space-y-4">
            {/* Reader Mode Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Reader Mode</span>
              <button
                onClick={toggleReaderMode}
                className={`relative w-11 h-6 transition-colors duration-300 ${
                  isReaderMode ? 'bg-black dark:bg-white' : 'bg-zinc-300 dark:bg-zinc-600'
                }`}
                aria-label="Toggle reader mode"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-black transition-transform duration-300 ${
                    isReaderMode ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* Font Switcher */}
            <div>
              <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 mb-2 block">
                Font Family
              </label>
              <div className="grid grid-cols-3 gap-1">
                <button
                  onClick={() => setFont('serif')}
                  className={`px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    currentFont === 'serif'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  Serif
                </button>
                <button
                  onClick={() => setFont('sans')}
                  className={`px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    currentFont === 'sans'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  Sans
                </button>
                <button
                  onClick={() => setFont('geist')}
                  className={`px-3 py-2 text-xs font-medium transition-all duration-200 ${
                    currentFont === 'geist'
                      ? 'bg-black dark:bg-white text-white dark:text-black'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                  }`}
                >
                  Geist
                </button>
              </div>
            </div>

            {/* Keyboard Shortcut Hint */}
            <div className="pt-3 border-t border-zinc-200/50 dark:border-zinc-700/50">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600">
                  ⌘R
                </kbd>{' '}
                to toggle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isReaderMode ? 'bg-zinc-50 dark:bg-zinc-900' : ''
        }`}
      >
        {/* Navigation - Hidden in Reader Mode */}
        {showNav && (
          <div
            className={`transition-all duration-500 ease-in-out ${
              isReaderMode
                ? 'opacity-0 h-0 overflow-hidden pointer-events-none'
                : 'opacity-100 h-auto'
            }`}
          >
            {/* Your navigation component goes here */}
          </div>
        )}

        {/* Content Area */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isReaderMode
              ? 'max-w-2xl mx-auto px-6 py-12'
              : 'w-full'
          }`}
        >
          <article
            className={`transition-all duration-500 ease-in-out ${
              isReaderMode
                ? `prose prose-zinc dark:prose-invert prose-lg ${getFontClass()} max-w-none`
                : ''
            }`}
          >
            {children}
          </article>
        </div>

        {/* Footer - Hidden in Reader Mode */}
        {showFooter && (
          <div
            className={`transition-all duration-500 ease-in-out ${
              isReaderMode
                ? 'opacity-0 h-0 overflow-hidden pointer-events-none'
                : 'opacity-100 h-auto'
            }`}
          >
            {/* Your footer component goes here */}
          </div>
        )}
      </div>

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
