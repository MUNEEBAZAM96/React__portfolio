'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certificates from '@/components/Certificates'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThreeJSBackground from '@/components/ThreeJSBackground'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-navy text-gray-300">
      {/* Three.js Background */}
      {mounted && <ThreeJSBackground />}
      
      {/* Fixed Navigation */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

