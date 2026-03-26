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

const savedTheme = localStorage.getItem('portfolio-theme')
document.body.classList.toggle('dark-theme', savedTheme === 'dark')

const path = window.location.pathname
const page =
  path === '/techstack' ? <TechStack /> :
  path === '/ui-design' ? <UiDesign /> :
  path === '/graphic-design' ? <GraphicDesign /> :
  path === '/recent-projects' ? <RecentProj /> :
  path === '/certifications' ? <Certifications /> :
  path === '/blog-post' ? <BlogPost /> :
  path === '/blog/building-clean-fast-portfolio-ui' ? <BlogCleanFastPortfolioUi /> :
  <App />

createRoot(document.getElementById('root')).render(page)
