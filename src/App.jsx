import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import QuotePage from './pages/QuotePage'
import BlogPage from './pages/BlogPage'
import ArticlePage from './pages/ArticlePage'
import AllProjectsPage from './pages/AllProjectsPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <Process />
      <Clients />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
      </Routes>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
