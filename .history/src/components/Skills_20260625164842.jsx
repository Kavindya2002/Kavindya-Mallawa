import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skills } from '../assets/data/portfolioData'

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

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
        <span className="text-xs font-mono text-primary-500">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary-600 to-accent-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

function TagCloud({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.08, y: -2 }}
          className="tag cursor-default"
        >
          {item}
        </motion.span>
      ))}
    </div>
  )
}

const tabs = [
  { key: 'cloud', label: '☁️ Cloud & Azure' },
  { key: 'backend', label: '⚙️ Backend' },
  { key: 'frontend', label: '🎨 Frontend' },
  { key: 'tools', label: '🛠️ Tools' },
  { key: 'ai', label: '🤖 AI & Data' },
  { key: 'soft', label: '💼 Soft Skills' },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('cloud')

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">What I work with</p>
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">A broad stack spanning backend, frontend, cloud and AI — built through real-world projects and enterprise internship experience.</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        {/* Tab navigation */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8"
        >
          {(activeTab === 'cloud' || activeTab === 'backend') && (
            <div className="max-w-2xl mx-auto">
              {skills[activeTab].map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
              ))}
            </div>
          )}
          {(activeTab === 'frontend' || activeTab === 'tools' || activeTab === 'ai' || activeTab === 'soft') && (
            <TagCloud items={skills[activeTab]} />
          )}
        </motion.div>

        {/* Quick overview cards */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {[
              { icon: '☁️', label: 'Azure Cloud', count: '5+' },
              { icon: '⚙️', label: 'Backend APIs', count: '4+' },
              { icon: '🎨', label: 'Frontend Libs', count: '6+' },
              { icon: '🛠️', label: 'Dev Tools', count: '8+' },
              { icon: '🤖', label: 'AI/ML Tools', count: '5+' },
              { icon: '🛢️', label: 'Databases', count: '4+' },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                className="glass-card p-4 text-center cursor-default"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xl font-bold gradient-text">{item.count}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
