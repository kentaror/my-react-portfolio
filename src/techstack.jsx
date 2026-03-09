import { useEffect, useState } from 'react'
import './App.css'

const TechStack = () => {
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
          <h1 className="text-lg font-bold text-center">Tech Stack</h1>
          <button
            type="button"
            onClick={onThemeButtonClick}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className={`justify-self-end w-[28px] h-[28px] border-0 bg-transparent text-[12px] inline-flex items-center justify-center p-0 rounded-full transition-colors duration-200 ${isDark ? 'text-zinc-100 hover:bg-zinc-700' : 'text-zinc-700 hover:bg-zinc-200'
              }`}
          >
            {isDark ? <i className="fa-solid fa-moon" aria-hidden="true"></i> : <span className="sun-icon-tabler" aria-hidden="true"></span>}
          </button>
        </div>
      </section>

      <section className="p-3">
        <div className="mb-4">
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

        <div className="mb-4">
          <h2 className="text-[14px] font-semibold mb-2">Backend</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Node.js</span>
            <span className="px-2 py-1 border border-zinc-200">PHP</span>
            <span className="px-2 py-1 border border-zinc-200">Laravel</span>
            <span className="px-2 py-1 border border-zinc-200">MySQL</span>
          </div>
        </div>

        <div className='mb-4'>
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

        <div className='mb-4'>
          <h2 className="text-[14px] font-semibold mb-2">Mobile Dev</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Dart</span>
            <span className="px-2 py-1 border border-zinc-200">Flutter</span>
            <span className="px-2 py-1 border border-zinc-200">Kotlin</span>
            <span className="px-2 py-1 border border-zinc-200">Java</span>
          </div>
        </div>

        <div className='mb-4'>
          <h2 className="text-[14px] font-semibold mb-2">DevOps</h2>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-2 py-1 border border-zinc-200">Github Actions</span>
          </div>
        </div>

        <div className='mb-4'>
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

        <div>
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













