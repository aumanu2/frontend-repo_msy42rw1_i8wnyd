import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Briefcase } from 'lucide-react'

export default function About() {
  const items = [
    { icon: MapPin, label: 'Location', value: 'Global / Remote' },
    { icon: Clock, label: 'Experience', value: '3+ Years' },
    { icon: Briefcase, label: 'Focus', value: 'iGaming, Keyword Strategy, Entity SEO' },
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-white/80">
              I’m Grigori Rasputin, an SEO Specialist with 3+ years of hands-on experience in the iGaming sector. I help brands boost organic visibility, optimize content, and rank higher on Google.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {items.map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-cyan-400"><Icon className="w-5 h-5" /><span className="text-sm uppercase tracking-wide">{label}</span></div>
                  <p className="mt-2 text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative aspect-square w-full max-w-sm mx-auto rounded-full overflow-hidden border border-white/10 shadow-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
              {/* Simple avatar placeholder with initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl md:text-7xl font-bold text-white/80">GR</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
