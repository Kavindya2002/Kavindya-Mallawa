import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown, MapPin } from 'lucide-react'
import { personalInfo } from '../assets/data/portfolioData'
import profileImg from '../assets/images/profile.webp'

const roles = personalInfo.roles
const TYPING_SPEED = 80
const DELETING_SPEED = 40
const PAUSE = 1800

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && displayed === current) {
      timeout = setTimeout(() => setDeleting(true), PAUSE)
    } else if (deleting && displayed === '') {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayed(prev =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      }, deleting ? DELETING_SPEED : TYPING_SPEED)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="floating-shape w-96 h-96 bg-primary-500 -top-20 -left-20"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="floating-shape w-72 h-72 bg-accent-500 top-1/2 -right-20"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="floating-shape w-64 h-64 bg-purple-500 bottom-20 left-1/3"
          style={{ animationDelay: '6s' }}
        />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-600 dark:text-accent-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="block text-slate-900 dark:text-white">Hi, I'm</span>
              <span className="block gradient-text mt-1">{personalInfo.name.split(' ')[0]}</span>
              <span className="block text-slate-900 dark:text-white">{personalInfo.name.split(' ')[1]}</span>
            </h1>

            <div className="flex items-center gap-2 mb-6 text-xl sm:text-2xl font-mono font-medium text-slate-600 dark:text-slate-300 h-8">
              <span className="text-primary-500">{'<'}</span>
              <span>{displayed}</span>
              <span className="type-cursor" />
              <span className="text-primary-500">{'/>'}</span>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-4 max-w-lg">
              {personalInfo.bio}
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
              <MapPin size={14} className="text-primary-500" />
              {personalInfo.location} · {personalInfo.university}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={16} />
                Let's Connect
              </motion.a>
              <motion.a
                href="/Kavindya_Mallawa.pdf"
                download
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>

            <div className="flex items-center gap-4 mt-8">
              {[
                { href: personalInfo.github, icon: <Github size={20} />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300
                             hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400
                             transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-700 animate-spin-slow" />
              {/* Glow */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20 blur-2xl" />
              {/* Image frame */}
              <motion.div
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl shadow-primary-500/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src={profileImg}
                  alt="Kavindya Mallawa"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card px-3 py-2 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>☁️</span>
                  <span className="text-slate-700 dark:text-slate-200">Azure AZ-900</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>⚙️</span>
                  <span className="text-slate-700 dark:text-slate-200">.NET Developer</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-200 dark:border-white/10"
        >
          {personalInfo.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold font-display gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-primary-500 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown size={20} />
      </motion.button>
    </section>
  )
}
