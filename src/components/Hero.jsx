import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-cyan-400 font-medium tracking-wide mb-3">iGaming SEO Strategist</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
            Grigori Rasputin – iGaming SEO Strategist
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Helping iGaming brands dominate Google rankings through data-driven SEO.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 text-white px-6 py-3 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
