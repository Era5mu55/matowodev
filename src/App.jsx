import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatStrip from './components/StatStrip'
import Projects from './components/Projects'
import Services from './components/Services'
import Process from './components/Process'
import Consultation from './components/Consultation'
import Testimonials from './components/Testimonials'
import FiverrPromo from './components/FiverrPromo'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFAB from './components/WhatsAppFAB'
import QuotePage from './pages/QuotePage'
import AllProjectsPage from './pages/AllProjectsPage'

function HomePage() {
  return (
    <main>
      <Hero />
      <StatStrip />
      <Projects />
      <Services />
      <Process />
      <Consultation />
      <Testimonials />
      <FiverrPromo />
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
      </Routes>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}

export default App
