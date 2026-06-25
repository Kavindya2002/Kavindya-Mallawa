import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../assets/data/portfolioData'

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

const contactItems = [
  { icon: <Mail size={20} />, label: 'Email', value: 'kavindyamallawa@gmail.com', href: `mailto:${personalInfo.email}`, color: 'text-primary-500' },
  
  { icon: <MapPin size={20} />, label: 'Location', value: personalInfo.location, href: null, color: 'text-purple-500' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.open(mailtoLink, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-dark-800">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Get in touch</p>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* LEFT COLUMN — info cards */}
          <div className="lg:col-span-2 space-y-5">
            <FadeIn delay={0.1}>
              <div className="glass-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-accent-500 animate-pulse" />
                  <span className="font-semibold text-slate-900 dark:text-white">Available for Opportunities</span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Currently seeking full-time roles in software engineering and cloud development. Let's connect!
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-card p-6 space-y-4">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`${item.color} flex-shrink-0`}>{item.icon}</div>
                    <div className="min-w-0">
                      <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">{item.label}</div>
                      {item.href
                        ? <a href={item.href} className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary-500 transition-colors break-all">{item.value}</a>
                        : <div className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="glass-card p-6">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-4">Find me on</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: personalInfo.linkedin, icon: <Linkedin size={16} />, label: 'LinkedIn', bg: 'bg-blue-600' },
                    { href: personalInfo.github, icon: <Github size={16} />, label: 'GitHub', bg: 'bg-slate-800 dark:bg-slate-700' },
                    { href: `mailto:${personalInfo.email}`, icon: <Mail size={16} />, label: 'Email', bg: 'bg-primary-600' },
                  ].map(({ href, icon, label, bg }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium ${bg} hover:opacity-90 transition-opacity`}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {icon}
                      {label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN — form */}
          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all text-sm resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3.5"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {sent ? (
                    <><CheckCircle size={16} /> Opening email client...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
