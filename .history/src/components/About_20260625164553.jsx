import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, MapPin, GraduationCap, Briefcase } from 'lucide-react'
import { personalInfo } from '../assets/data/portfolioData'
import profileImg from '../assets/images/profile.webp'

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

const infoItems = [
  { icon: <Mail size={16} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: <MapPin size={16} />, label: 'Location', value: personalInfo.location },
  { icon: <GraduationCap size={16} />, label: 'University', value: personalInfo.university },
  { icon: <Briefcase size={16} />, label: 'Status', value: personalInfo.status },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-slate-50 dark:bg-dark-800">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Get to know me</p>
            <h2 className="section-title">About Me</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="right">
            <div className="relative mx-auto lg:mx-0 w-fit">
              <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
                <img src={profileImg} alt="Kavindya Mallawa" className="w-full h-full object-cover" />
              </div>
              {/* Decorative offset box */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary-500/30 rounded-2xl -z-10" />
              {/* Badge */}
              <div className="absolute -top-4 -left-4 glass-card p-4 shadow-xl">
                <div className="text-2xl font-bold gradient-text font-display">4+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years at SLIIT</div>
              </div>
            </div>
          </FadeIn>

          {/* Content */}
          <div>
            <FadeIn delay={0.1}>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Who I Am
              </h3>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I'm a 4th-year BSc (Hons) Information Technology student at SLIIT, passionate about building scalable software solutions. My internship at Hayleys Advantis gave me deep exposure to enterprise-level .NET development, cloud architecture on Azure and modern DevOps practices.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                I thrive at the intersection of backend engineering and cloud — designing RESTful APIs, implementing distributed system patterns and deploying containerized apps. I'm equally comfortable building responsive frontends with React and Angular.
              </p>
            </FadeIn>

            {/* Info grid */}
            <FadeIn delay={0.3}>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <span className="text-primary-500">{item.icon}</span>
                    <div>
                      <div className="text-xs text-slate-400 dark:text-slate-500">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-500 transition-colors">{item.value}</a>
                        : <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex items-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
