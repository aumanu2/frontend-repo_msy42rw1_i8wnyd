import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SkillsProjects from './components/SkillsProjects'
import ExperienceContact from './components/ExperienceContact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#060814] text-white">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[90vw] h-[90vw] max-w-[1200px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.25),_rgba(167,139,250,0.15)_40%,_transparent_60%)]" />
      </div>

      <Navbar />

      <main className="relative pt-24">
        <Hero />
        <About />
        <SkillsProjects />
        <ExperienceContact />
      </main>
    </div>
  )
}
