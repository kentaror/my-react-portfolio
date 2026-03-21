import { useEffect, useState } from 'react'
import './App.css'

const certifications = [
  { title: 'Lecturer', 
    source: 'Techtalk',
    link: 'https://www.facebook.com/share/1BiaVr5RGA/' 
  },

{ title: 'Web Design Champion', 
    source: 'CBT Fest',
    link: 'https://www.facebook.com/photo.php?fbid=669636665811880&set=a.136747215767497&type=3'
  },

  { title: 'Legacy Responsive Web Design', 
    source: 'FreeCodeCamp',
    link: 'https://www.freecodecamp.org/certification/fcc2f5a3655-1aa6-412b-a926-40887cf8d2cd/responsive-web-design'},

  { title: 'CodeCred', 
    source: 'HTML Fundamentals',
    link: 'https://www.codecred.dev/verify/77b5afcb-4900-4b67-aa98-9a9e0966b750' 
  },

  {
    title: 'Python Essentials 1',
    source: 'Cisco Networking Academy',
    link: 'https://www.credly.com/badges/97abe206-4958-471a-a26d-f29ce293297d/public_url',
  },

  {
    title: 'Best in Org Shirt Design',
    source: 'DOIT Organizational Shirt',
    link: 'https://www.facebook.com/ynotDOITnow/posts/we-are-thrilled-to-introduce-our-new-org-shirt-a-standout-design-chosen-as-the-w/622014330349147/',
  },
]

const Certifications = () => {
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
          <h1 className="hidden sm:block text-lg font-bold text-center">Attainments</h1>
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
        <h1 className="sm:hidden text-lg font-bold text-center mt-2">Attainments</h1>
        <p className="text-sm leading-6">
          A curated list of awards, recognitions, and certifications that mark my growth in design and development.
        </p>
      </section>

      <section className="fadeup-item fadeup-2 p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {certifications.map((item) =>
            item.link ? (
              <a
                key={item.title}
                className="block no-underline hover:no-underline"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className="border-b border-zinc-200 p-2.5 transition-all duration-300 ease-out hover:-translate-y-0.5">
                  <b className="text-sm">{item.title}</b>
                  <p className="text-xs mt-1">{item.source}</p>
                </article>
              </a>
            ) : (
              <article
                key={item.title}
                className="border-b border-zinc-200 p-2.5 transition-all duration-300 ease-out hover:-translate-y-0.5"
              >
                <b className="text-sm">{item.title}</b>
                <p className="text-xs mt-1">{item.source}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <footer className="fadeup-item fadeup-3 mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">
        © 2026 Agbayani, Kristian Ken Lucero. All rights reserved.
      </footer>
    </div>
  )
}

export default Certifications















