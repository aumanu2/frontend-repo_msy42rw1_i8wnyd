import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const timeline = [
  {
    year: '2023',
    title: 'Junior SEO Specialist',
    desc: 'Managed one iGaming brand while mastering on-page and keyword fundamentals.'
  },
  {
    year: '2024',
    title: 'Senior SEO Specialist',
    desc: 'Oversaw multiple iGaming brands, focusing on technical SEO, content growth, and brand visibility.'
  },
  {
    year: '2025',
    title: 'Lead SEO Strategist',
    desc: 'Led large-scale SEO projects targeting iGaming and poker keywords, achieving top organic results.'
  }
]

export default function ExperienceContact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In a production app, integrate with a backend or email service
    setStatus('Thank you! Your message has been sent.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Experience</motion.h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />
          <div className="space-y-10">
            {timeline.map((t, idx) => (
              <motion.div key={t.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className={`relative sm:flex ${idx % 2 ? 'sm:flex-row-reverse' : ''} items-start gap-6`}>
                <div className="shrink-0 sm:w-1/2">
                  <div className="ml-8 sm:ml-0 rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="text-cyan-300 text-sm font-semibold">{t.year}</p>
                    <h3 className="mt-1 text-white text-xl font-semibold">{t.title}</h3>
                    <p className="mt-2 text-white/70">{t.desc}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="mt-3 w-8 h-8 rounded-full bg-cyan-500 shadow-[0_0_0_6px_rgba(34,211,238,0.15)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="mt-24 mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Let’s Collaborate 🚀</motion.h2>
        <div className="mt-8 grid lg:grid-cols-2 gap-8">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-white/70">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Tell me about your project" required />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
              <Send className="w-4 h-4" />
              Send Message
            </button>
            {status && <p className="mt-3 text-sm text-green-300">{status}</p>}

            <p className="mt-6 text-sm text-white/60">Instagram: <a className="text-cyan-300 hover:text-cyan-200" href="https://instagram.com/grigorirasptn" target="_blank" rel="noreferrer">instagram.com/grigorirasptn</a></p>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-6">
            <h3 className="text-white text-xl font-semibold">Why work with Grigori?</h3>
            <ul className="mt-4 space-y-3 text-white/80 list-disc list-inside">
              <li>Data-driven SEO for iGaming niches</li>
              <li>Hands-on technical implementation</li>
              <li>Clean reporting and stakeholder alignment</li>
              <li>Rapid experimentation and iteration</li>
            </ul>
            <p className="mt-6 text-white/60 text-sm">© 2025 Grigori Rasputin SEO Portfolio. All Rights Reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
