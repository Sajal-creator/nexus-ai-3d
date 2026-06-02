import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HeroScene from './three/HeroScene'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      setMouse({
        x: (e.clientX - cx) / rect.width,
        y: (e.clientY - cy) / rect.height,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    if (!orbRef.current) return
    const rx = mouse.y * 6
    const ry = mouse.x * -6
    orbRef.current.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`
  }, [mouse])

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden pt-28 sm:pt-32"
    >
      <div className="grid-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="radial-cyan absolute inset-0" />
      <div className="radial-purple absolute inset-0" />

      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div
        ref={orbRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-out"
        style={{ willChange: 'transform' }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(0,212,255,0.35) 0%, transparent 60%)',
            transform: `translate(${mouse.x * 30}px, ${mouse.y * 30}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
        <div
          className="absolute inset-0 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 60%)',
            transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          Introducing Nexus v4.0 — Now Generally Available
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="font-[Space_Grotesk] text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-white">Intelligence</span>
          <span className="block gradient-text">Beyond Limits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base text-white/65 sm:text-lg md:text-xl"
        >
          The next generation of artificial intelligence for forward-thinking
          teams. Build, automate, and scale with a platform designed for the
          decade ahead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <a href="#pricing" className="btn-primary">
            Start building free
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
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#showcase" className="btn-ghost">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
            Watch demo
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-4 text-xs uppercase tracking-[0.3em] text-white/40"
        >
          <span>Trusted by teams at</span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/60">
            {['NORTHWIND', 'OBSIDIAN', 'VERTEX', 'HELIOS', 'QUANTUM'].map(
              (b) => (
                <span
                  key={b}
                  className="font-[Space_Grotesk] text-sm font-semibold tracking-[0.25em] opacity-60"
                >
                  {b}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.4em]">
            Scroll to explore
          </span>
          <div className="h-8 w-[1px] overflow-hidden bg-white/20">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="h-full w-full bg-gradient-to-b from-cyan-400 to-purple-500"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
