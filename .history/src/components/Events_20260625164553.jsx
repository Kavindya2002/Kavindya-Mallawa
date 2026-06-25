import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Calendar, Building2, Tag, X, ZoomIn } from 'lucide-react'
import { events } from '../assets/data/portfolioData'

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

function ImageGallery({ images, title }) {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [showingAll, setShowingAll] = useState(false)

  const prev = () => setCurrent(c => (c - 1 + images.length) % images.length)
  const next = () => setCurrent(c => (c + 1) % images.length)

  return (
    <>
      <div className="space-y-3">
        {/* Main image */}
        <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-200 dark:bg-dark-700 group cursor-pointer"
          onClick={() => setLightbox(true)}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`${title} - Photo ${current + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onError={(e) => { e.target.style.display='none' }}
            />
          </AnimatePresence>
          {/* Overlay controls */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-between px-3">
            <motion.button
              onClick={(e) => { e.stopPropagation(); prev() }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={18} className="text-slate-800 dark:text-white" />
            </motion.button>
            <motion.button
              onClick={(e) => { e.stopPropagation(); next() }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-full bg-white/90 dark:bg-black/70 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={18} className="text-slate-800 dark:text-white" />
            </motion.button>
          </div>
          {/* Zoom icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-white/90 dark:bg-black/70 flex items-center justify-center">
              <ZoomIn size={14} className="text-slate-700 dark:text-white" />
            </div>
          </div>
          {/* Counter */}
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/50 text-white text-xs font-mono">
            {current + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail strip — hidden initially, shown after button click */}
        <AnimatePresence>
          {showingAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex gap-2 overflow-x-auto pb-1"
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`gallery-thumb flex-shrink-0 w-20 h-14 ${current === i ? 'active' : ''}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display='none' }}
                  />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle button */}
        <button
          onClick={() => setShowingAll(v => !v)}
          className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
        >
          {showingAll ? (
            <><ChevronLeft size={14} /> Hide thumbnails</>
          ) : (
            <><ChevronRight size={14} /> View all {images.length} photos</>
          )}
        </button>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setLightbox(false)}
            >
              <X size={20} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); prev() }}
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={current}
              src={images[current]}
              alt={`${title} - Photo ${current + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); next() }}
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function Events() {
  return (
    <section id="events" className="py-20 bg-white dark:bg-dark-900">
      <div className="section-container">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-primary-500 font-mono text-sm font-medium mb-2 tracking-widest uppercase">Community & Growth</p>
            <h2 className="section-title">Events & Programs</h2>
            <p className="section-subtitle">Active participation in workshops and community events to stay at the forefront of technology.</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="space-y-12">
          {events.map((event, i) => (
            <FadeIn key={event.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -2 }}
                className={`grid lg:grid-cols-2 gap-8 glass-card p-6 sm:p-8 glow-border ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Images — always first on mobile, alternates on desktop */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <ImageGallery images={event.images} title={event.title} />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-primary-500 font-mono text-sm font-bold">#{String(i + 1).padStart(2, '0')}</span>
                    <span className="w-px h-4 bg-slate-300 dark:bg-slate-600" />
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Event</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 dark:text-white mb-2 leading-snug">
                    {event.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Building2 size={14} className="text-primary-500" />
                      {event.organizer}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent-500" />
                      {event.date}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-5">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
