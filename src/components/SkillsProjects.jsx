import React from 'react'
import { motion } from 'framer-motion'
import { BarChart2, Settings, Search, Link as LinkIcon, Wrench, TrendingUp, Shield, Crown } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const skills = [
  { icon: Search, label: 'On-page SEO' },
  { icon: LinkIcon, label: 'Off-page SEO' },
  { icon: Settings, label: 'Technical SEO' },
  { icon: Wrench, label: 'Keyword Mapping' },
  { icon: Shield, label: 'Entity Optimization' },
  { icon: TrendingUp, label: 'Content Strategy' },
  { icon: BarChart2, label: 'SERP Feature Targeting' },
]

const tools = [
  'Ahrefs', 'Ubersuggest', 'GSC', 'GA4', 'SurferSEO', 'Cloudflare', 'Google Trends'
]

const projectData = [
  { name: 'Jan', clicks: 100, impressions: 800, ctr: 4.3 },
  { name: 'Feb', clicks: 180, impressions: 1200, ctr: 5.6 },
  { name: 'Mar', clicks: 260, impressions: 1800, ctr: 6.8 },
  { name: 'Apr', clicks: 320, impressions: 2300, ctr: 7.9 },
  { name: 'May', clicks: 400, impressions: 3000, ctr: 9.4 },
  { name: 'Jun', clicks: 520, impressions: 3600, ctr: 10.8 },
  { name: 'Jul', clicks: 620, impressions: 4200, ctr: 12.2 },
]

export default function SkillsProjects() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Skills & Tools</motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(({ icon: Icon, label }) => (
            <motion.div key={label} whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300"><Icon className="w-5 h-5" /></div>
              <span className="text-white/90 font-medium">{label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-white/90">Tools</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {tools.map((t) => (
              <span key={t} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section with Featured Campaign */}
      <div id="projects" className="mt-24 mx-auto max-w-7xl px-4">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-white">Featured Project – IDN Poker Campaign</motion.h2>
        <p className="mt-2 text-white/80">#1 Ranking for ‘IDN Poker’ Keyword</p>

        <div className="mt-8 grid lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <Stat label="Organic Clicks" value="+300%" />
              <Stat label="Impressions" value="+200%" />
              <Stat label="CTR" value="4.3% → 12.2%" />
              <Stat label="Avg. Position" value="3.8 → 2.4" />
              <Stat label="Top Rankings" value="Top 3 iGaming terms" />
            </div>

            <div className="mt-6 h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={projectData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="name" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                  <YAxis yAxisId="left" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} />
                  <Tooltip contentStyle={{ background: '#0b1020', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }} />
                  <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#22d3ee" strokeWidth={2} dot={false} name="Clicks" />
                  <Line yAxisId="right" type="monotone" dataKey="ctr" stroke="#a78bfa" strokeWidth={2} dot={false} name="CTR %" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors">
                View Full Case Study
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-6">
            <p className="text-white/80">
              Grigori led an aggressive SEO strategy targeting iGaming and poker keywords. By aligning content with search intent, structuring entities, and technical clean-up, the campaign achieved exponential growth across core KPIs.
            </p>
            <ul className="space-y-2 text-white/70 list-disc list-inside">
              <li>Semantic entity mapping for ‘IDN Poker’ and related clusters</li>
              <li>Internal linking and topical authority build-up</li>
              <li>Structured data and SERP feature optimization</li>
              <li>Site performance optimization via CDN and caching</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-wider text-white/60">{label}</p>
      <p className="mt-1 text-xl font-semibold text-white">{value}</p>
    </div>
  )
}
