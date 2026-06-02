import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  gradient: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Nexus replaced three internal tools and cut our model spend by 60% in the first quarter. The reasoning quality is in a different league.',
    name: 'Maya Okafor',
    role: 'CTO',
    company: 'Northwind Labs',
    initials: 'MO',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    quote:
      'We shipped a production agent in 11 days. The tool-use loop is the most reliable I have ever benchmarked — and I have benchmarked them all.',
    name: 'Daniel Reyes',
    role: 'Head of AI',
    company: 'Obsidian Systems',
    initials: 'DR',
    gradient: 'from-purple-400 to-fuchsia-500',
  },
  {
    quote:
      'Sub-100ms streaming at the edge. Our users cannot tell they are talking to a model. That is the highest compliment I can give.',
    name: 'Aiko Tanaka',
    role: 'VP Engineering',
    company: 'Vertex Health',
    initials: 'AT',
    gradient: 'from-violet-400 to-cyan-400',
  },
  {
    quote:
      'The compliance posture is what closed the deal for our security team. SOC 2, customer-managed keys, regional isolation — all on day one.',
    name: 'Lucas Bergström',
    role: 'CISO',
    company: 'Helios Capital',
    initials: 'LB',
    gradient: 'from-cyan-400 to-purple-500',
  },
  {
    quote:
      'Fine-tuning took an afternoon. We lifted task accuracy from 71% to 96% on a 4k-example dataset. Nothing else came close.',
    name: 'Priya Sharma',
    role: 'Research Lead',
    company: 'Quantum Bio',
    initials: 'PS',
    gradient: 'from-purple-500 to-pink-500',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const t = window.setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => window.clearInterval(t)
  }, [autoplay])

  const goTo = (i: number) => {
    setDirection(i > index ? 1 : -1)
    setIndex(i)
  }
  const next = () => {
    setDirection(1)
    setIndex((i) => (i + 1) % testimonials.length)
  }
  const prev = () => {
    setDirection(-1)
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="radial-cyan absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300"
          >
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            Loved by builders
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Trusted by <span className="gradient-text">thousands</span>
          </motion.h2>
        </div>

        <div
          className="relative mt-16"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-8 sm:p-12 md:p-16">
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl" />

            <svg
              className="absolute right-6 top-6 h-12 w-12 text-white/10 sm:right-8 sm:top-8 sm:h-20 sm:w-20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.5 7.5C5.36 7.5 2 10.86 2 15v2h6v-6H5.5c.41-2.04 1.84-3.5 4-3.5v-2zm10 0c-4.14 0-7.5 3.36-7.5 7.5v2h6v-6h-2.5c.41-2.04 1.84-3.5 4-3.5v-2z" />
            </svg>

            <div className="relative min-h-[280px] sm:min-h-[240px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                >
                  <p className="font-[Space_Grotesk] text-2xl font-medium leading-relaxed sm:text-3xl md:text-4xl">
                    "{current.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${current.gradient} font-[Space_Grotesk] text-sm font-bold text-black`}
                    >
                      {current.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{current.name}</div>
                      <div className="text-sm text-white/55">
                        {current.role} · {current.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="group relative h-1.5 overflow-hidden rounded-full transition-all"
                  style={{
                    width: i === index ? '2rem' : '1.5rem',
                    background:
                      i === index
                        ? 'rgba(255,255,255,0.15)'
                        : 'rgba(255,255,255,0.1)',
                  }}
                >
                  {i === index && (
                    <motion.div
                      key={`fill-${index}-${autoplay}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 6, ease: 'linear' }}
                      className="absolute inset-0 origin-left bg-gradient-to-r from-cyan-400 to-purple-500"
                      onAnimationComplete={() => {}}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
