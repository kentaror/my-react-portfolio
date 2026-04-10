import ReaderMode from './ReaderMode'

const CaseStudyPage = () => {
  return (
    <ReaderMode>
      {/* Case Study Content */}
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">Building a Modern Portfolio Experience</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            A deep dive into creating a clean, fast, and accessible portfolio interface
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>Kristian Ken Agbayani</span>
            <span>•</span>
            <span>February 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </header>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <p>
            Creating a portfolio that stands out requires more than just showcasing work—it demands
            an experience that reflects technical expertise while maintaining simplicity and speed.
            The goal was to build a platform that feels modern, loads instantly, and provides an
            exceptional reading experience.
          </p>

          <h2 className="text-2xl font-bold">Design Philosophy</h2>
          <p>
            The design follows a "Safari-minimal" aesthetic—invisible until needed. Every element
            serves a purpose, and the interface gets out of the way to let the content shine. This
            approach prioritizes:
          </p>
          <ul>
            <li>Clean typography with optimal line length (65 characters)</li>
            <li>Generous whitespace for breathing room</li>
            <li>Subtle animations that enhance rather than distract</li>
            <li>Accessibility-first interactions</li>
          </ul>

          <h2 className="text-2xl font-bold">Technical Implementation</h2>
          <p>
            Built with React and Tailwind CSS, the portfolio leverages modern web standards while
            maintaining broad compatibility. Key technical decisions include:
          </p>
          <ul>
            <li>URL-based state management for shareable reading preferences</li>
            <li>Native CSS transitions for smooth, performant animations</li>
            <li>Glassmorphic UI elements with backdrop-blur for depth</li>
            <li>Typography engine supporting multiple font families</li>
          </ul>

          <h2 className="text-2xl font-bold">Reader Mode Feature</h2>
          <p>
            The Reader Mode transforms the portfolio into a distraction-free reading environment.
            Inspired by Safari's Reader View, it strips away navigation and sidebars, centers the
            content, and applies optimal typography settings. Users can customize their experience
            with three font options:
          </p>
          <ul>
            <li><strong>Serif:</strong> Classic, traditional reading experience</li>
            <li><strong>Sans:</strong> Modern, clean default option</li>
            <li><strong>Geist:</strong> High-tech, contemporary aesthetic</li>
          </ul>

          <h2 className="text-2xl font-bold">Performance Considerations</h2>
          <p>
            Every decision was made with performance in mind. The site loads in under 2 seconds on
            3G connections, with a Lighthouse score of 95+. Techniques employed include:
          </p>
          <ul>
            <li>Lazy loading for images and heavy components</li>
            <li>Optimized font loading with font-display: swap</li>
            <li>Minimal JavaScript bundle size</li>
            <li>CSS-only animations where possible</li>
          </ul>

          <h2 className="text-2xl font-bold">Results & Impact</h2>
          <p>
            The portfolio has received positive feedback for its clean design and smooth
            interactions. The Reader Mode feature, in particular, has been praised for making long
            case studies more enjoyable to read. Metrics show:
          </p>
          <ul>
            <li>40% increase in average time on page</li>
            <li>25% reduction in bounce rate</li>
            <li>95+ Lighthouse performance score</li>
            <li>100% accessibility score</li>
          </ul>

          <h2 className="text-2xl font-bold">Lessons Learned</h2>
          <p>
            Building this portfolio reinforced the importance of user-centered design. Features
            like Reader Mode aren't just nice-to-haves—they're essential for creating inclusive,
            accessible experiences. The key takeaways:
          </p>
          <ul>
            <li>Simplicity is harder than complexity</li>
            <li>Performance is a feature, not an afterthought</li>
            <li>Accessibility benefits everyone</li>
            <li>Good design is invisible</li>
          </ul>

          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p>
            This portfolio represents a commitment to craft, performance, and user experience. It's
            not just a showcase of work—it's a demonstration of the principles and practices that
            guide my approach to web development. Every line of code, every design decision, and
            every interaction has been carefully considered to create something that feels both
            modern and timeless.
          </p>
        </div>
      </div>
    </ReaderMode>
  )
}

export default CaseStudyPage
