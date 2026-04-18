import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TechStack from './techstack.jsx'
import UiDesign from './ui-design.jsx'
import GraphicDesign from './graphic-design.jsx'
import RecentProj from './recent-proj.jsx'
import Certifications from './certifications.jsx'
import BlogPost from './blog-post.jsx'
import BlogCleanFastPortfolioUi from './blog-clean-fast-portfolio-ui.jsx'
import BlogWelcomeToKensBlog from './blog-welcome-to-kens-blog.jsx'
import BlogGraphicDesignToFrontend from './blog-graphic-design-to-frontend.jsx'
import BlogReusableReactSections from './blog-reusable-react-sections.jsx'
import BlogBetterMobileCarousels from './blog-better-mobile-carousels.jsx'
import BlogAiIntegrationModernWebApps from './blog-ai-integration-modern-web-apps.jsx'
import BlogOptimizingReactPerformance from './blog-optimizing-react-performance.jsx'
import { applyDocumentTheme, getSavedTheme } from './theme.js'

applyDocumentTheme(getSavedTheme())

const path = window.location.pathname
const page =
  path === '/techstack' ? <TechStack /> :
  path === '/ui-design' ? <UiDesign /> :
  path === '/graphic-design' ? <GraphicDesign /> :
  path === '/recent-projects' ? <RecentProj /> :
  path === '/certifications' ? <Certifications /> :
  path === '/blog-post' ? <BlogPost /> :
  path === '/blog/building-clean-fast-portfolio-ui' ? <BlogCleanFastPortfolioUi /> :
  path === '/blog/welcome-to-kens-blog' ? <BlogWelcomeToKensBlog /> :
  path === '/blog/graphic-design-to-frontend' ? <BlogGraphicDesignToFrontend /> :
  path === '/blog/reusable-react-sections' ? <BlogReusableReactSections /> :
  path === '/blog/better-mobile-carousels' ? <BlogBetterMobileCarousels /> :
  path === '/blog/ai-integration-modern-web-apps' ? <BlogAiIntegrationModernWebApps /> :
  path === '/blog/optimizing-react-performance' ? <BlogOptimizingReactPerformance /> :
  <App />

createRoot(document.getElementById('root')).render(page)
