import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award } from 'lucide-react'
import { certifications } from '../assets/data/portfolioData'

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-dark-800">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Credentials</p>
            <h2 className="section-title">Licenses & Certifications</h2>
            <p className="section-subtitle">Industry-recognized credentials across cloud, AI, and software engineering.</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-5 flex items-start gap-4 glow-border group cert-card"
            >
              <div className="cert-icon text-3xl flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-100 dark:bg-white/10 rounded-xl transition-transform duration-300">
                {cert.icon}
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-sm text-slate-900 dark:text-white leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs text-primary-500 font-medium mb-1">{cert.issuer}</p>
                {cert.sub && (
                  <p className="text-xs text-slate-400 dark:text-slate-500 italic mb-1">{cert.sub}</p>
                )}
                {cert.date && (
                  <p className="text-xs text-slate-400 dark:text-slate-500">{cert.date}</p>
                )}
                {cert.id && (
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500 truncate">ID: {cert.id}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium">
              <Award size={16} />
              {certifications.length}+ Certifications Earned
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
