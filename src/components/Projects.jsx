import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { projects } from '../assets/data/portfolioData'

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

const typeColors = {
  'Full-Stack': 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  'Enterprise': 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  'AI-Powered': 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
  'Collaborative': 'bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  'Social': 'bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800',
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card p-6 flex flex-col glow-border group relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-primary-500/60 text-sm font-bold">{project.number}</span>
            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${typeColors[project.type] || typeColors['Full-Stack']}`}>
              {project.type}
            </span>
          </div>
          <Code2 size={20} className="text-slate-300 dark:text-slate-600 group-hover:text-primary-500 transition-colors" />
        </div>

        <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 text-xs font-medium rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors"
            >
              <Github size={15} />
              View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors ml-auto"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayed = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">What I've built</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">A selection of real-world applications built with modern technology stacks.</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayed.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>

        {!showAll && projects.length > displayed.length && (
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <motion.button
                onClick={() => setShowAll(true)}
                className="btn-outline"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Projects ({projects.length - displayed.length} more)
              </motion.button>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/Kavindya2002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-primary-500 transition-colors text-sm"
            >
              <Github size={16} />
              More projects on GitHub →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
