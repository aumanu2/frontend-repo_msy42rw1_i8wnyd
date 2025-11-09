import React from 'react'
import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'

const links = [
  { label: 'Home', href: 'home' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Contact', href: 'contact' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border border-white/10 rounded-2xl shadow-sm"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <button
              className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-wide text-white"
              onClick={() => scrollToId('home')}
            >
              <Rocket className="w-5 h-5 text-cyan-400" />
              <span className="whitespace-nowrap">Grigori Rasputin SEO</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollToId(l.href)}
                  className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              {/* Simple compact menu for mobile: horizontal scroll */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {links.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => scrollToId(l.href)}
                    className="px-2 py-1 text-xs text-white/80 hover:text-white"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
    </div>
  )
}
