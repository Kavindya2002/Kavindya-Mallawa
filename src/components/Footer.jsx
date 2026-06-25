import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { personalInfo } from '../assets/data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="gradient-text">KM</span>
          </div>
          <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            Designed & built by Kavindya Mallawa · {year}
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.github, icon: <Github size={18} /> },
              { href: personalInfo.linkedin, icon: <Linkedin size={18} /> },
              { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} /> },
            ].map(({ href, icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
