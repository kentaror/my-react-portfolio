import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const BlogStuckInVim = () => {
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

        <h1 className="text-2xl font-bold mb-3">Stuck in Vim? Here's How to Exit</h1>
        <p className="text-base leading-7 text-zinc-600 mb-4">
          A complete guide to exiting Vim in every situation with all the methods you need.
        </p>
        <p className="text-xs text-zinc-500">
          Kristian Ken Agbayani &bull; May 5, 2026 &bull; 5 min read
        </p>
      </section>

      <article className="p-3 text-sm leading-8">
        <section className="blog-card-separator page-divider-b pb-8">
          <p className="text-[15px] sm:text-base font-medium mb-5" style={{ fontFamily: '"PT Serif", serif' }}>
            If you've accidentally opened Vim and can't figure out how to exit, you're not alone. Here's every method to escape Vim.
          </p>

          <h2 className="text-lg font-bold mb-3 mt-6">Quick Exit Methods</h2>
          
          <h3 className="text-base font-semibold mb-2 mt-4">Exit Without Saving</h3>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li>Press <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">Esc</code> first to enter Normal mode</li>
            <li>Type <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:q!</code> and press Enter</li>
            <li>This forces Vim to quit without saving any changes</li>
          </ul>

          <h3 className="text-base font-semibold mb-2 mt-4">Save and Exit</h3>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:wq</code> — Write (save) and quit</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:x</code> — Save and exit (shorter)</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">ZZ</code> — Save and exit (no colon needed)</li>
          </ul>

          <h3 className="text-base font-semibold mb-2 mt-4">Exit Without Changes</h3>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:q</code> — Quit (only if no changes made)</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">ZQ</code> — Quit without saving (no colon)</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Advanced Methods</h2>

          <h3 className="text-base font-semibold mb-2 mt-4">Multiple Files Open</h3>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:qa</code> — Quit all files</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:qa!</code> — Force quit all without saving</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:wqa</code> — Save and quit all files</li>
          </ul>

          <h3 className="text-base font-semibold mb-2 mt-4">Stuck in Insert Mode</h3>
          <p className="mb-3">If you see <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">-- INSERT --</code> at the bottom:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li>Press <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">Esc</code> to return to Normal mode</li>
            <li>Then use any exit command above</li>
          </ul>

          <h3 className="text-base font-semibold mb-2 mt-4">Stuck in Visual Mode</h3>
          <p className="mb-3">If text is highlighted and you see <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">-- VISUAL --</code>:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li>Press <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">Esc</code> to exit Visual mode</li>
            <li>Then use normal exit commands</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Emergency Methods</h2>

          <h3 className="text-base font-semibold mb-2 mt-4">Terminal Shortcuts</h3>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">Ctrl + Z</code> — Suspend Vim to background</li>
            <li>Type <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">fg</code> to bring it back</li>
            <li>Type <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">kill %1</code> to terminate suspended process</li>
          </ul>

          <h3 className="text-base font-semibold mb-2 mt-4">Force Kill</h3>
          <p className="mb-3">As a last resort from another terminal:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li>Run <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">ps aux | grep vim</code> to find process ID</li>
            <li>Run <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">kill -9 [PID]</code> to force kill</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Understanding Vim Modes</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><strong>Normal Mode</strong> — Default mode for navigation and commands</li>
            <li><strong>Insert Mode</strong> — For typing text (press <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">i</code>)</li>
            <li><strong>Visual Mode</strong> — For selecting text (press <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">v</code>)</li>
            <li><strong>Command Mode</strong> — For executing commands (press <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:</code>)</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Quick Reference</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:q!</code> — Exit without saving</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:wq</code> — Save and exit</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:x</code> — Save and exit (shorter)</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">ZZ</code> — Save and exit (no colon)</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">ZQ</code> — Exit without saving (no colon)</li>
            <li><code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:qa!</code> — Exit all files without saving</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Pro Tips</h2>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li><strong>Always press Esc first</strong> — Ensures you're in Normal mode</li>
            <li><strong>Check the bottom of screen</strong> — Shows which mode you're in</li>
            <li><strong>Don't panic</strong> — Your file is safe, just exit properly</li>
            <li><strong>Practice helps</strong> — Commands become natural with use</li>
          </ul>

          <h2 className="text-lg font-bold mb-3 mt-6">Avoiding Vim Accidentally</h2>
          <p className="mb-3">If you keep opening Vim by accident:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6" style={{ fontFamily: '"PT Serif", serif' }}>
            <li>Set different editor: <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">export EDITOR=nano</code></li>
            <li>Add to <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">.bashrc</code> or <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">.zshrc</code> file</li>
            <li>Or embrace Vim and learn the basics</li>
          </ul>

          <p className="mt-6">
            Remember: <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">Esc</code> followed by <code className="text-xs bg-zinc-200 dark:bg-zinc-700 px-1.5 py-0.5">:q!</code> will get you out in almost any situation.
          </p>
        </section>
      </article>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        &copy; 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default BlogStuckInVim
