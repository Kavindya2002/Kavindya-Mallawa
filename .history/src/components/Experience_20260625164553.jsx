import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experience } from '../assets/data/portfolioData'

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-dark-800">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Work History</p>
            <h2 className="section-title">Professional Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-accent-500 hidden sm:block" />

          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="relative flex gap-6 sm:gap-10 mb-12">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="timeline-dot mt-1 flex-shrink-0"
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="flex-1 glass-card p-6 sm:p-8 glow-border"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary-500 font-medium">{exp.company}</p>
                      {exp.department && (
                        <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">{exp.department}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/10 px-3 py-1.5 rounded-lg flex-shrink-0">
                      <Calendar size={14} className="text-primary-500" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: j * 0.05 + 0.3 }}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                      >
                        <CheckCircle2 size={15} className="text-accent-500 mt-0.5 flex-shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          ))}

          {/* Education placeholder */}
          <FadeIn delay={0.3}>
            <div className="relative flex gap-6 sm:gap-10">
              <div className="hidden sm:flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="w-4 h-4 rounded-full bg-accent-500 border-4 border-white dark:border-dark-800 shadow-lg shadow-accent-500/50 mt-1 flex-shrink-0"
                />
              </div>
              <div className="flex-1 glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">BSc (Hons) Information Technology</h3>
                    <p className="text-accent-500 font-medium">Sri Lanka Institute of Information Technology (SLIIT)</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 ml-11">Currently in 4th Year · Pannala, Sri Lanka</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
