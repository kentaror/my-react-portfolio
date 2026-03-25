import Chatbot from './chatbot'

const Markup = () => (
  <>
    <div className="page-fadeup max-w-4xl mx-auto px-4 py-8 mt-2 sm:mt-3">

      <section id="heroCard" className="fadeup-item fadeup-1 grid grid-cols-[160px_minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)] md:grid-cols-[165px_minmax(0,1fr)] gap-3 sm:gap-4 mb-8 items-start">
        <div id="profileMedia" className="relative w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[136px] md:h-[136px] overflow-hidden">
          <img id="profileLight"
            className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-200" src="pfp2.png"
            alt="Profile light" />
          <img id="profileDark"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200" src="pfp.png"
            alt="Profile dark" />
          <img id="profileHover"
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-200 pointer-events-none" src="lec.jpeg"
            alt="Profile hover" />
        </div>
        <div className="min-h-[160px] sm:min-h-[180px] md:min-h-0 min-w-0 pr-1 sm:pr-0 pl-3 sm:pl-0 flex flex-col justify-between">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1 sm:mb-2">
              <h1 className="text-[15px] sm:text-[17px] md:text-[23px] lg:text-[26px] font-bold leading-tight flex items-center gap-1 sm:gap-2 min-w-0"><span className="sm:hidden">Ken Agbayani</span><span className="hidden sm:inline">Agbayani, Kristian Ken Lucero</span>
                <span className="relative inline-flex items-center justify-center w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]" aria-label="Verified"><i className="fa-solid fa-certificate text-sky-500 text-[10px] sm:text-[14px]"></i><i className="fa-solid fa-check absolute text-white text-[5px] sm:text-[8px]"></i></span>
              </h1>
              <div className="switch shrink-0 z-10 hidden lg:block" aria-label="Toggle dark mode">
                <input type="checkbox" id="themeToggle" aria-label="Toggle dark mode" />
                <label htmlFor="themeToggle"></label>
              </div>
            </div>
            <p className="text-[10px] sm:text-sm md:text-[15px] mt-0 mb-1 sm:mb-2 whitespace-nowrap">
              <svg
                className="mr-1 inline-block align-[-2px] w-3 h-3 sm:w-4 sm:h-4"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Pangasinan, Philippines
            </p>


            <p className="hero-role text-[8px] sm:text-sm md:text-base leading-tight max-w-full whitespace-nowrap">
              <div className="md:mb-4">
                <span>
                  GA <span className='text-gray-400'>\</span> Frontend Dev
                  <span className='text-gray-400'> \</span> Aspiring Fullstack Dev
                </span>
              </div>
            </p>

            
          </div>

          <div className="grid grid-cols-1 gap-1.5 mt-1 sm:mt-2">
            <div className="hero-actions grid grid-cols-2 gap-1 mb-2 sm:flex sm:flex-row sm:gap-1.5">
              <a id="scheduleCallBtn"
                href="https://calendly.com/agbayanikristianken/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-action-btn order-1 sm:order-1 h-[23px] sm:h-[34px] px-1 sm:px-3 border border-black bg-black text-white text-[6px] sm:text-[12px] inline-flex items-center justify-center sm:justify-start w-full sm:w-auto sm:shrink-0 gap-0.5 sm:gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5"><i
                  className="fa-regular fa-calendar"></i> Schedule a Call <i className="fa-solid fa-angle-right"></i></a>
              <a






                href="https://mail.google.com/mail/?view=cm&fs=1&to=agbayanikristianken@gmail.com&su=Get%20in%20touch"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-action-btn hero-action-hover-bg order-3 sm:order-2 h-[23px] sm:h-[34px] px-1 sm:px-3 bg-white text-[6px] sm:text-[13px] inline-flex items-center justify-center sm:justify-start w-full sm:w-auto sm:shrink-0 gap-0.5 sm:gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(113,113,122,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(113,113,122,0.62)]"><i
                  className="fa-regular fa-envelope"></i> Send Email</a>
              <button id="openResumeModalBtn"
                className="hero-action-btn hero-action-hover-bg order-2 sm:order-3 h-[23px] sm:h-[34px] px-1 sm:px-3 bg-white text-[6px] sm:text-[13px] inline-flex items-center justify-center sm:justify-start w-full sm:w-auto sm:shrink-0 gap-0.5 sm:gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(113,113,122,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(113,113,122,0.62)]"><i
                  className="fa-regular fa-file-lines"></i> View Resume</button>
              <a
                href="/blog-post" target='_blank'
                className="hero-action-btn hero-action-hover-bg order-4 sm:order-4 h-[23px] sm:h-[34px] px-1 sm:px-3 bg-white text-[6px] sm:text-[13px] inline-flex items-center justify-center sm:justify-between w-full sm:flex-1 sm:min-w-[240px] sm:ml-auto gap-0.5 sm:gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-[0_0_0_0_rgba(113,113,122,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(113,113,122,0.62)]">
                <span className="inline-flex items-center gap-0.5 sm:gap-2">
                  <i className="fa-regular fa-pen-to-square"></i> Read my blog
                </span>
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="fadeup-item fadeup-2 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mb-2 md:items-stretch">
        <div className="flex flex-col gap-2 h-full">
          <article className="bg-white p-3 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold mb-2">About</h2>
              <p className="text-sm leading-6 mb-3">I am a Bachelor of Science in Information Technology student from
                Pangasinan State University and a dedicated working student with over three years of experience as a
                Senior Full Graphic Sublimation Artist. My background in graphic design has strengthened my creativity,
                attention to detail, and visual problem-solving skills.</p>
              <p className="text-sm leading-6 mb-3.5">I am now focused on web development, where I combine technical skills and design thinking to build clean, user-centered interfaces. I enjoy turning ideas into responsive, accessible, and performance-driven websites that feel modern across desktop and mobile devices.</p>
              <p className="text-sm leading-6">My goal is to grow as a full-stack developer while continuing to build products that solve real problems and create meaningful value for users. I value clear structure, reliable performance, and thoughtful user experience, and I approach each project with ownership, consistency, and long-term maintainability in mind, while continuously learning, improving my technical and problem-solving skills, and delivering impactful solutions.</p>
            </div>
          </article>
        </div>


        <div className="flex flex-col gap-2 h-full">
          <aside className="bg-white p-3 transition-all duration-300 ease-out 
                 hover:-translate-y-0.5 ">
            <h2 className="text-lg font-bold mb-2">Experience</h2>
            <div id="experienceTimeline" className="relative ml-2 pl-3 space-y-2.5">
              <span className="experience-line absolute left-[-1px] top-[10px] bottom-[10px] w-px bg-zinc-200" aria-hidden="true"></span>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker is-current absolute -left-[17px] top-1.5 w-2 h-2 bg-black border border-black"></span>
                <p className="text-sm font-bold">Full Subli Graphic Artist</p>
                <p className="text-[13px]">Ryzn Clothing <span className="float-right text-[10px]">2026</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">On-the-Job Training</p>
                <p className="text-[13px]">Graphic Designer <span className="float-right text-[10px]">2026</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">Leading Programmer</p>
                <p className="text-[13px]">Capstone 101-102 <span className="float-right text-[10px]">2025</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">Mid-Level Graphic Artist </p>
                <p className="text-[13px] ">Ryzn Clothing <span className="float-right text-[10px]">2025</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">Junior Graphic Artist</p>
                <p className="text-[13px]">Ryzn Clothing<span className="float-right text-[10px]">2024</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">Ps & Ai</p>
                <p className="text-[13px]">Made my first pen tool <span className="float-right text-[10px]">2023</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">BS Information Technology</p>
                <p className="text-[13px]">Pangasinan State University  <span className="float-right text-[10px]">2022</span></p>
              </div>
              <div className="relative group cursor-pointer" tabIndex={0}><span
                className="experience-marker absolute -left-[17px] top-1.5 w-2 h-2 bg-white border border-zinc-200 transition-colors duration-200 group-hover:bg-black group-hover:border-black group-active:bg-black group-active:border-black"></span>
                <p className="text-sm font-bold">Hello World! <span className="text-xs">👋🏻</span></p>
                <p className="text-[13px]">Wrote my first line of code <span className="float-right text-[10px]">2021</span></p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="fadeup-item fadeup-3 grid grid-cols-1 md:grid-cols-2 gap-2 mb-2">
        <article className="bg-white p-3 ">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold">Tech Stack</h2><a href="/techstack" className="text-xs">View All <i
              className="fa-solid fa-angle-right"></i></a>
          </div>
          <div className="mb-3">
            <h3 className="text-[13px] font-semibold mb-1.5">Frontend</h3>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="px-2 py-0.5">Html</span>
              <span className="px-2 py-0.5">Css</span>
              <span className="px-2 py-0.5">JavaScript</span><span
                className="px-2 py-0.5">Bootstrap</span><span
                  className="px-2 py-0.5">Tailwind CSS</span><span
                    className="px-2 py-0.5">Next.js</span><span
                      className="px-2 py-0.5">React.js</span>
            </div>
          </div>
          <div className="mb-3">
            <h3 className="text-[13px] font-semibold mb-1.5">Backend</h3>
            <div className="flex flex-wrap gap-1.5 text-xs"><span
              className="px-2 py-0.5">Node.js</span><span
                className="px-2 py-0.5">PHP</span><span
                  className="px-2 py-0.5">Laravel</span><span
                    className="px-2 py-0.5">MySQL</span></div>
          </div>
          <div>
            <h3 className="text-[13px] font-semibold mb-1.5">Object-Oriented Programming</h3>
            <div className="flex flex-wrap gap-1.5 text-xs"><span
              className="px-2 py-0.5">Java</span><span
                className="px-2 py-0.5">C++</span><span
                  className="px-2 py-0.5">C#</span><span
                    className="px-2 py-0.5">Kotlin</span>
              <span
                className="px-2 py-0.5">PHP</span>
              <span
                className="px-2 py-0.5">Dart</span>
            </div>
          </div>
        </article>

        <article className="bg-white p-3">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold">Recent Projects</h2><a href="/recent-projects" className="text-xs">View All <i
              className="fa-solid fa-angle-right"></i></a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className=" bg-zinc-50 p-2.5 transition-all duration-300 ease-out 
               hover:-translate-y-0.5">
              <h4 className="text-sm font-semibold mb-1">Cabanas</h4>
              <p className="text-xs mb-1.5">Hotel and boat booking for cabanas</p><code
                className="text-xs bg-zinc-200 px-1.5 py-0.5">cabanas.fun</code>
            </div>
            <div className=" bg-zinc-50 p-2.5 transition-all duration-300 ease-out 
               hover:-translate-y-0.5">
              <h4 className="text-sm font-semibold mb-1">sm404</h4>
              <p className="text-xs mb-1.5">Online coding bootcamp</p><code
                className="text-xs bg-zinc-200 px-1.5 py-0.5">sm-404.com</code>
            </div>
            <div className=" bg-zinc-50 p-2.5 transition-all duration-300 ease-out 
               hover:-translate-y-0.5">
              <h4 className="text-sm font-bold mb-1">DIIN.PH</h4>
              <p className="text-xs mb-1.5">AI-powered wardrobe assistant</p><code
                className="text-xs bg-zinc-200 px-1.5 py-0.5">diin.ph</code>
            </div>
            <div className=" bg-zinc-50 p-2.5 transition-all duration-300 ease-out 
               hover:-translate-y-0.5">
              <h4 className="text-sm font-bold mb-1">DYNAMIS Workout Tracker</h4>
              <p className="text-xs mb-1.5">AI-powered workout tracker</p><code
                className="text-xs bg-zinc-200 px-1.5 py-0.5">dynamis-app.online</code>
            </div>
          </div>
        </article>
      </section>

      <section className="fadeup-item fadeup-4 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mb-2 md:items-stretch">
        <div className="grid grid-cols-1 gap-2 items-stretch md:flex-1 md:grid-rows-2">
          <article className="bg-white p-3 h-full min-h-[120px] md:min-h-0 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold">UI Designs</h2>
              <a href="/ui-design" className="text-xs">View All <i
                className="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="relative space-y-2.5">
              <div className="relative group">
                <div className="grid grid-cols-5 gap-1.5">
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal1.jpeg" alt="UI design 1" loading="lazy" decoding="async" />
                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal2.JPG" alt="UI design 2" loading="lazy" decoding="async" />
                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal3.png" alt="UI design 3" loading="lazy" decoding="async" />
                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal4.png" alt="UI design 4" loading="lazy" decoding="async" />
                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal5.jpg" alt="UI design 5" loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article className="bg-white p-3 h-full min-h-[120px] md:min-h-0 ">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold">Graphic Designs</h2>
              <a href="/graphic-design" className="text-xs">View All <i className="fa-solid fa-angle-right"></i></a>
            </div>
            <div className="relative space-y-2.5">
              <div className="relative group">
                <div className="grid grid-cols-5 gap-1.5">
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal1.jpeg" alt="Graphic design Gold" loading="lazy" decoding="async" />

                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal2.JPG" alt="Graphic design Black" loading="lazy" decoding="async" />

                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal3.png" alt="Graphic design Red" loading="lazy" decoding="async" />

                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal4.png" alt="Graphic design Maroon" loading="lazy" decoding="async" />

                  </div>
                  <div className="overflow-hidden">
                    <img className="js-gallery-image w-full h-16 object-cover border border-zinc-200 cursor-pointer transition duration-200 ease-in-out hover:scale-105" src="/gal5.jpg" alt="Graphic design White Black" loading="lazy" decoding="async" />

                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="grid grid-cols-1 gap-2 items-stretch md:flex-1 md:grid-rows-2">
          <article className="bg-white p-3 h-full min-h-[120px] md:min-h-0 transition-all duration-300 ease-out 
               hover:-translate-y-0.5 ">
            <h2 className="text-lg font-bold mb-2">Education</h2>
            <div className="relative ml-2 pl-3 space-y-2.5">
              <div className="relative group">
                <p className="text-sm font-bold">Pangasinan State University</p>
                <p className="text-[13px]">Alaminos City Campus</p>
              </div>
            </div>
          </article>

          <article className="bg-white p-3 h-full min-h-[120px] md:min-h-0 transition-all duration-300 ease-out 
               hover:-translate-y-0.5">
            <h2 className="text-lg font-bold mb-2">On-the-Job Training</h2>
            <div className="relative ml-2 pl-3 space-y-2.5">
              <div className="relative group">
                <p className="text-sm font-bold">Virtual Wonders Web Solutions</p>
                <p className="text-[13px]">Palamis, Alaminos City</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="fadeup-item fadeup-5 grid grid-cols-1 md:grid-cols-2 gap-2 mb-2 md:items-stretch">
        <article className=" bg-white p-2 md:p-2.5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold">Certifications</h2>
            <a href="/certifications" className="text-xs">
              View All <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>

          <div className="bg-zinc-100 p-1 mb-1.5 hover:bg-gray-200">
            <b className="text-[13px] ml-1">Lecturer</b>
            <p className="text-[12px] ml-1">Techtalk</p>
          </div>

          <div className="bg-zinc-100 p-1 mb-1.5 hover:bg-gray-200">
            <b className="text-[13px] ml-1">CBT Web Design 1st Place</b>
            <p className="text-[12px] ml-1">CBT Fest</p>
          </div>

          <div className="bg-zinc-100 p-1 mb-1.5 hover:bg-gray-200">
            <b className="text-[13px] ml-1">Legacy Responsive Web Design</b>
            <p className="text-[12px] ml-1">FreeCodeCamp</p>
          </div>

          <div className="bg-zinc-100 p-1 mb-1.5 hover:bg-gray-200">
            <b className="text-[13px] ml-1">CodeCred</b>
            <p className="text-[12px] ml-1">HTML Fundamentals</p>
          </div>
        </article>

        <article className=" bg-white p-2 md:p-2.5">
          <h2 className="text-lg font-bold mb-2">Recommendations</h2>

          <p
            id="recommendationQuote"
            className="text-[13px] leading-6 mb-1 min-h-[96px] sm:min-h-[110px]"
          ></p>

          <div className="border-t border-zinc-200 pt-1 min-h-[48px] sm:min-h-[56px]">
            <b id="recommendationName" className="text-[13px] font-semibold"></b>
            <div id="recommendationRole" className="text-[12px]"></div>
          </div>

          <div
            id="recommendationDots"
            className="flex gap-1.5 mt-auto pt-2"
            aria-label="Recommendation indicators"
          ></div>
        </article>
      </section>

      <section className="fadeup-item fadeup-6 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-3 mb-2">
        <div className="p-2.5">
          <h3 className="text-sm font-bold mb-2">A member of</h3>
          <p className="text-[11.5px] leading-5">Analytics & Artificial Intelligence Association of the Philippines (AAP)</p>
          <p className="text-[11.5px] leading-5 mt-2.5">Philippine Software Industry Association</p>
        </div>
        <div className="p-2.5">
          <h3 className="text-sm font-bold mb-1">Social Links</h3>
          <a className="social-link contact-outline text-[11.5px] inline-flex items-center w-full transition-all duration-300 ease-out 
               hover:-translate-y-0.5 border px-2 py-2.5 shadow-[0_0_0_0_rgba(113,113,122,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(113,113,122,0.62)]" href="#"><i
              className="fa-brands fa-linkedin mr-1"></i> LinkedIn</a>
          <a className="social-link contact-outline text-[11.5px] inline-flex items-center w-full transition-all duration-300 ease-out 
               hover:-translate-y-0.5 border px-2 py-2.5 shadow-[0_0_0_0_rgba(113,113,122,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(113,113,122,0.62)]" href="#"><i
              className="fa-brands fa-github mr-1"></i> GitHub</a>
          <a className="social-link contact-outline text-[11.5px] inline-flex items-center w-full transition-all duration-300 ease-out 
               hover:-translate-y-0.5 border px-2 py-2.5 shadow-[0_0_0_0_rgba(113,113,122,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(113,113,122,0.62)]" href="#"><i
              className="fa-brands fa-instagram mr-1"></i> Instagram</a>
        </div>
        <div className="p-2.5">
          <h3 className="text-sm font-bold mb-2">Work With Me</h3>
          <div className="contact-outline border px-2 py-2.5 w-full transition-all duration-300 ease-out hover:border-transparent">
            <p className="text-[11.5px] leading-5">Available for freelance web development, custom UI/UX design, and digital branding solutions.</p>
            <a className="text-[11.5px] mt-3 hover:underline inline-flex items-center gap-1" href="https://mail.google.com/mail/?view=cm&fs=1&to=agbayanikristianken@gmail.com&su=Get%20in%20touch">Get in touch <i className="fa-solid fa-angle-right"></i></a>
          </div>

        </div>
        <div className="contact-actions p-2">
          <h3 className="text-sm font-bold mb-1">Insights & Inquiries </h3>
          <div className="contact-action-group group">
            <a
              className="contact-link contact-outline inline-flex flex-col items-start transition-all duration-300 ease-out border px-2 py-1.5 w-full shadow-[0_0_0_0_rgba(82,82,91,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(82,82,91,0.76)] hover:-translate-y-0.5"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=agbayanikristianken@gmail.com&su=Get%20in%20touch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-[11px] font-bold mb-0.5 inline-flex items-center leading-tight">
                <i className="fa-regular fa-envelope mr-1"></i> Email
              </h3>
              <span className="text-[11px] leading-tight">
                agbayanikristianken@gmail.com
              </span>
            </a>
          </div>
          <div className="contact-action-group group">
            <a
              className="contact-link contact-outline inline-flex flex-col items-start transition-all duration-300 ease-out border px-2 py-1.5 w-full shadow-[0_0_0_0_rgba(82,82,91,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(82,82,91,0.76)] hover:-translate-y-0.5"
              href="https://calendly.com/agbayanikristianken/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[11px] mt-0.5 font-semibold inline-flex items-center leading-tight">
                <i className="fa-regular fa-calendar mr-1"></i> Let's Talk
              </span>
              <span className="text-[11px] leading-tight">
                Schedule a Call <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
          <div className="contact-action-group group">
            <a
              className="contact-link contact-outline inline-flex flex-col items-start transition-all duration-300 ease-out border px-2 py-1.5 w-full shadow-[0_0_0_0_rgba(82,82,91,0)] hover:border-transparent hover:shadow-[0_8px_14px_-10px_rgba(82,82,91,0.76)] hover:-translate-y-0.5"
              href="/blog-post"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[11px] mt-0.5 font-semibold inline-flex items-center leading-tight">
                <i className="fa-regular fa-pen-to-square mr-1"></i> Blog
              </span>
              <span className="text-[11px] leading-tight">
                Read my blog <i className="fa-solid fa-angle-right"></i>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="portfolioGallery" className="fadeup-item fadeup-7 bg-white p-3 overflow-hidden">
        <h2 className="text-lg font-bold mb-2">Gallery</h2>
        <div className="relative z-[40]">
          <button id="galleryPrevBtn" type="button"
            className="grid absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-9 sm:w-9 sm:h-10 border border-zinc-200 bg-zinc-50 place-items-center text-sm text-zinc-500 z-[50] pointer-events-auto cursor-pointer"><i
              className="fa-solid fa-angle-left"></i></button>
          <div id="galleryViewport" className="overflow-hidden relative z-[1]">
            <div id="galleryTrack" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              <div className="js-gallery-frame overflow-hidden border border-zinc-200 bg-zinc-50">
                <img className="js-gallery-image w-full h-full object-cover cursor-pointer transition duration-200 ease-out hover:scale-105"
                  src="/gal1.jpeg"
                  alt="Gallery 1"
                  loading="lazy"
                  decoding="async" />
              </div>
              <div className="js-gallery-frame overflow-hidden border border-zinc-200 bg-zinc-50">
                <img className="js-gallery-image w-full h-full object-cover cursor-pointer transition duration-200 ease-out hover:scale-105"
                  src="/gal2.JPG"
                  alt="Gallery 2"
                  loading="lazy"
                  decoding="async" />
              </div>
              <div className="js-gallery-frame overflow-hidden border border-zinc-200 bg-zinc-50">
                <img className="js-gallery-image w-full h-full object-cover cursor-pointer transition duration-200 ease-out hover:scale-105"
                  src="/gal3.png"
                  alt="Gallery 3"
                  loading="lazy"
                  decoding="async" />
              </div>
              <div className="js-gallery-frame overflow-hidden border border-zinc-200 bg-zinc-50">
                <img className="js-gallery-image w-full h-full object-cover cursor-pointer transition duration-200 ease-out hover:scale-105"
                  src="/gal4.png"
                  alt="Gallery 4"
                  loading="lazy"
                  decoding="async" />
              </div>
              <div className="js-gallery-frame overflow-hidden border border-zinc-200 bg-zinc-50">
                <img className="js-gallery-image w-full h-full object-cover cursor-pointer transition duration-200 ease-out hover:scale-105"
                  src="/gal5.jpg"
                  alt="Gallery 5"
                  loading="lazy"
                  decoding="async" />
              </div>
            </div>
          </div>
          <button id="galleryNextBtn" type="button"
            className="grid absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-9 sm:w-9 sm:h-10 border border-zinc-200 bg-zinc-50 place-items-center text-sm text-zinc-500 z-[50] pointer-events-auto cursor-pointer"><i
              className="fa-solid fa-angle-right"></i></button>
        </div>
      </section>

      <div id="portfolioLightbox" className="fixed inset-0 z-50 hidden items-center justify-center px-4 sm:px-10 bg-[rgba(15,15,18,0.9)] backdrop-blur-[4px]"
        aria-hidden="true">
        <button id="lightboxClose" className="absolute right-4 top-4 w-[45px] h-[42px] bg-[rgba(72,72,80,0.78)] text-white grid place-items-center transition-colors duration-200 hover:bg-[rgba(96,96,106,0.9)] text-lg" type="button"
          aria-label="Close preview">
          <i className="fa-solid fa-xmark text-white opacity-100"></i>
        </button>
        <button id="lightboxPrev" className="absolute left-4 top-1/2 -translate-y-1/2 w-[45px] h-[42px] bg-[rgba(72,72,80,0.78)] text-white grid place-items-center transition-colors duration-200 hover:bg-[rgba(96,96,106,0.9)] text-lg" type="button"
          aria-label="Previous image">
          <i className="fa-solid fa-angle-left text-white opacity-100"></i>
        </button>
        <button id="lightboxNext" className="absolute right-4 top-1/2 -translate-y-1/2 w-[45px] h-[42px] bg-[rgba(72,72,80,0.78)] text-white grid place-items-center transition-colors duration-200 hover:bg-[rgba(96,96,106,0.9)] text-lg
      " type="button"
          aria-label="Next image">
          <i className="fa-solid fa-angle-right text-white opacity-100"></i>
        </button>
        <div className="relative max-w-[92vw] max-h-[88vh] w-full flex items-center justify-center">
          <img id="lightboxImage" className="max-h-[82vh] w-auto max-w-full object-contain" src="" alt="Gallery preview" />
        </div>
        <div id="lightboxCounter" className="absolute left-4 top-4 px-3 py-2 text-sm bg-[rgba(44,44,50,0.72)] text-[#f4f4f5]">1 / 1</div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 text-xs font-semibold bg-[rgba(44,44,50,0.72)] text-[#f4f4f5]">Use arrow
          keys to navigate • ESC to close</div>
      </div>

      <footer className="mt-3.5 pt-3 border-t border-zinc-200 text-center text-sm mb-2">© 2026 Agbayani, Kristian Ken Lucero.
        All rights reserved.</footer>
    </div>
    <Chatbot />

    <div id="resumeModal" className="fixed inset-0 z-[70] hidden items-center justify-center bg-black/55 px-2 sm:px-4 py-3" aria-hidden="true">
      <div className="bg-white border border-zinc-200 w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] h-[94vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 px-3 sm:px-4 py-3">
          <h2 className="text-base sm:text-lg font-bold">My Resume</h2>
          <div className="flex items-center gap-2">
            <a href="/2025-template_bullet.pdf" target="_blank" rel="noopener noreferrer" className="text-sm border border-zinc-200 px-3 py-1">Open Full</a>
            <button id="closeResumeModalBtn" type="button" className="text-sm border border-zinc-200 px-3 py-1">Close</button>
          </div>
        </div>
        <div className="p-2 sm:p-3 bg-zinc-50 flex-1 min-h-0 flex justify-center overflow-auto">
          <div className="w-full max-w-[560px] aspect-[8.5/11] bg-white border border-zinc-200">
            <iframe title="Resume Preview" src="/2025-template_bullet.pdf#view=FitH" className="w-full h-full bg-white"></iframe>
          </div>
        </div>
      </div>
    </div>

  </>
)

export default Markup

