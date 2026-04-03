import { useEffect, useState } from 'react'
import './App.css'
import { applyDocumentTheme } from './theme.js'

const TechStack = () => {
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
          <h1 className="hidden sm:block text-lg font-bold text-center">Tech Stack</h1>
          <button
            type="button"
            onClick={onThemeButtonClick}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`group relative justify-self-end w-[28px] h-[28px] border-0 bg-transparent text-[12px] inline-flex items-center justify-center p-0 rounded-full !rounded-full overflow-hidden transition-all duration-200 ${isDark ? 'text-zinc-100' : 'text-zinc-700'
              }`}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 rounded-full !rounded-full opacity-0 transition-opacity duration-200 ${isDark ? 'bg-zinc-700/80 group-hover:opacity-100' : 'bg-zinc-200 group-hover:opacity-100'}`}
            ></span>
            {isDark ? <i className="fa-solid fa-moon relative z-[1]" aria-hidden="true"></i> : <span className="sun-icon-tabler relative z-[1]" aria-hidden="true"></span>}
          </button>
        </div>
        <h1 className="sm:hidden text-lg font-bold text-center mt-2">Tech Stack</h1>
        <p className="text-sm leading-6">
          A overview of the tools and technologies I use across frontend, backend, mobile, and design workflows.
        </p>
      </section>

      <section className="p-3">
        <div className="stagger-item mb-4" style={{ '--stagger-delay': '0ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">Frontend</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Html</span>
            <span className="px-2 py-1 border border-zinc-200">Css</span>
            <span className="px-2 py-1 border border-zinc-200">JavaScript</span>
            <span className="px-2 py-1 border border-zinc-200">Bootstrap</span>
            <span className="px-2 py-1 border border-zinc-200">Tailwind CSS</span>
            <span className="px-2 py-1 border border-zinc-200">Next.js</span>
            <span className="px-2 py-1 border border-zinc-200">React.js</span>
          </div>
        </div>

        <div className="stagger-item mb-4" style={{ '--stagger-delay': '100ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">Backend</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Node.js</span>
            <span className="px-2 py-1 border border-zinc-200">PHP</span>
            <span className="px-2 py-1 border border-zinc-200">Laravel</span>
            <span className="px-2 py-1 border border-zinc-200">MySQL</span>
          </div>
        </div>

        <div className='stagger-item mb-4' style={{ '--stagger-delay': '200ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">Object-Oriented Programming</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Java</span>
            <span className="px-2 py-1 border border-zinc-200">C++</span>
            <span className="px-2 py-1 border border-zinc-200">C#</span>
            <span className="px-2 py-1 border border-zinc-200">Kotlin</span>
            <span className="px-2 py-1 border border-zinc-200">PHP</span>
            <span className="px-2 py-1 border border-zinc-200">Dart</span>
          </div>
        </div>

        <div className='stagger-item mb-4' style={{ '--stagger-delay': '300ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">Mobile Dev</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Dart</span>
            <span className="px-2 py-1 border border-zinc-200">Flutter</span>
            <span className="px-2 py-1 border border-zinc-200">Kotlin</span>
            <span className="px-2 py-1 border border-zinc-200">Java</span>
          </div>
        </div>

        <div className='stagger-item mb-4' style={{ '--stagger-delay': '400ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">DevOps</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Github Actions</span>
          </div>
        </div>

        <div className='stagger-item mb-4' style={{ '--stagger-delay': '500ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">Developer Tools</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Code::Blocks</span>
            <span className="px-2 py-1 border border-zinc-200">VS Code</span>
            <span className="px-2 py-1 border border-zinc-200">JetBrains IntelliJ</span>
            <span className="px-2 py-1 border border-zinc-200">BlueJ</span>
            <span className="px-2 py-1 border border-zinc-200">Android Studio</span>
            <span className="px-2 py-1 border border-zinc-200">Visual Studio</span>
            <span className="px-2 py-1 border border-zinc-200">Git</span>
            <span className="px-2 py-1 border border-zinc-200">Github</span>
            <span className="px-2 py-1 border border-zinc-200">Teams</span>
            <span className="px-2 py-1 border border-zinc-200">Discord</span>
          </div>
        </div>

        <div className="stagger-item" style={{ '--stagger-delay': '600ms' }}>
          <h2 className="text-[14px] font-semibold mb-2">Software and Cloud-based Designing Tools</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Adobe Photoshop</span>
            <span className="px-2 py-1 border border-zinc-200">Adobe Illustrator</span>
            <span className="px-2 py-1 border border-zinc-200">CorelDRAW</span>
               <span className="px-2 py-1 border border-zinc-200">Inkscape</span>
            <span className="px-2 py-1 border border-zinc-200">Vectr</span>
            <span className="px-2 py-1 border border-zinc-200">Graphite</span>
            <span className="px-2 py-1 border border-zinc-200">Figma</span>
            <span className="px-2 py-1 border border-zinc-200">Canva</span>
              <span className="px-2 py-1 border border-zinc-200">photomateMULTIv11</span>
            <span className="px-2 py-1 border border-zinc-200">Vector Magic</span>
            <span className="px-2 py-1 border border-zinc-200">Vectorgen</span>
                        <span className="px-2 py-1 border border-zinc-200">Kttl</span>
            <span className="px-2 py-1 border border-zinc-200">Freepik</span>
                        <span className="px-2 py-1 border border-zinc-200">VectorStock</span>
          </div>
        </div>
      </section>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        © 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default TechStack





