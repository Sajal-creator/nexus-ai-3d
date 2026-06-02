import { useEffect, useState } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setLoaded(true), 1800)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#050505] text-white">
      <LoadingScreen done={loaded} />
      <div
        className={`transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Showcase />
          <Pricing />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
