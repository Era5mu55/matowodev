import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'
import QuotePage from './pages/QuotePage'

function HomePage() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <Clients />
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
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
