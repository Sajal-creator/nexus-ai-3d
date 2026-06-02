import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  title: string
  description: string
  icon: JSX.Element
  gradient: string
  accent: string
}

const features: Feature[] = [
  {
    title: 'Neural Reasoning',
    description:
      'Multi-step reasoning across code, language, and vision — built on a frontier transformer architecture.',
    gradient: 'from-cyan-500/20 to-blue-500/0',
    accent: '#00d4ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4v2a4 4 0 0 0 4 4" />
        <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4v2a4 4 0 0 1-4 4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Real-time Memory',
    description:
      'Persistent context across sessions, tools, and teams. Your agents remember what matters.',
    gradient: 'from-purple-500/20 to-fuchsia-500/0',
    accent: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    title: 'Tool Orchestration',
    description:
      'Connect to APIs, databases, and codebases. Agents plan, call, and verify — autonomously.',
    gradient: 'from-cyan-500/20 to-purple-500/0',
    accent: '#00d4ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Visual Understanding',
    description:
      'Native multimodal comprehension — analyze charts, screenshots, UIs, and diagrams with precision.',
    gradient: 'from-violet-500/20 to-purple-500/0',
    accent: '#a855f7',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II, zero-retention modes, and customer-managed keys. Built for regulated industries.',
    gradient: 'from-cyan-500/20 to-emerald-500/0',
    accent: '#00d4ff',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Global Edge',
    description:
      'Sub-100ms inference across 32 regions. Stream tokens from the edge with no cold starts.',
    gradient: 'from-purple-500/20 to-cyan-500/0',
    accent: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300"
          >
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Built for the <span className="gradient-text">frontier</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-white/60 sm:text-lg"
          >
            Six core capabilities engineered into every layer of the stack.
            Designed to compose, scale, and ship to production on day one.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="feature-card group relative overflow-hidden rounded-2xl p-[1px]"
              style={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(135deg, ${f.accent}80, transparent 60%)`,
                }}
              />
              <div className="glass relative h-full rounded-2xl p-7 transition-transform duration-500 group-hover:-translate-y-1">
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${f.gradient} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-60`}
                />
                <div
                  className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${f.accent}25, transparent)`,
                    border: `1px solid ${f.accent}40`,
                    color: f.accent,
                  }}
                >
                  <div className="h-6 w-6">{f.icon}</div>
                </div>
                <h3 className="font-[Space_Grotesk] text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.description}
                </p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-white/40 transition-colors group-hover:text-white/80">
                  <span>Learn more</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </div>
                <div
                  className="absolute bottom-3 right-3 text-[10px] font-mono opacity-30"
                  style={{ color: f.accent }}
                >
                  0{i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
