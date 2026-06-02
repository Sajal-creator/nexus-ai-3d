import { motion } from 'framer-motion'
import { useState } from 'react'
import ShowcaseScene from './three/ShowcaseScene'

const tabs = [
  {
    id: 'reasoning',
    label: 'Reasoning',
    title: 'Multi-step problem solving',
    body: 'Nexus breaks complex problems into atomic steps, verifies intermediate results, and self-corrects — all in a single inference pass.',
  },
  {
    id: 'vision',
    label: 'Vision',
    title: 'Native multimodal understanding',
    body: 'Parse charts, screenshots, UIs, and PDF documents with the same model that writes your code. No glue models required.',
  },
  {
    id: 'tools',
    label: 'Tools',
    title: 'Autonomous tool use',
    body: 'Agents plan, call, and verify external tools — APIs, databases, browsers, code interpreters — with built-in retry and fallback.',
  },
]

export default function Showcase() {
  const [active, setActive] = useState(tabs[0].id)
  const current = tabs.find((t) => t.id === active)!

  return (
    <section
      id="showcase"
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
            Live showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            See it in <span className="gradient-text">motion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-white/60 sm:text-lg"
          >
            Drag to orbit. Scroll to explore. Every capability, end-to-end.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="glass relative overflow-hidden rounded-3xl">
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white/60 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                Live render
              </div>
              <div className="absolute right-4 top-4 z-10 flex gap-1.5 rounded-full bg-black/40 px-3 py-1.5 backdrop-blur-md">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              </div>
              <div className="aspect-[4/3] w-full sm:aspect-[16/11]">
                <ShowcaseScene />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-white/40">
              <span>Drag · Pinch · Scroll to interact</span>
              <span className="font-mono">60 FPS · WebGL2</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass flex h-full flex-col rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`relative rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                      active === t.id
                        ? 'text-black'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {active === t.id && (
                      <motion.span
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative">{t.label}</span>
                  </button>
                ))}
              </div>

              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 flex-1"
              >
                <h3 className="font-[Space_Grotesk] text-2xl font-bold sm:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 sm:text-base">
                  {current.body}
                </p>

                <div className="mt-8 space-y-3">
                  {[
                    { label: 'Latency', value: '78ms', hint: 'p50 streaming' },
                    { label: 'Accuracy', value: '94.2%', hint: 'on MMLU-Pro' },
                    { label: 'Throughput', value: '12k tps', hint: 'per replica' },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-3"
                    >
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                          {m.label}
                        </div>
                        <div className="text-xs text-white/50">{m.hint}</div>
                      </div>
                      <div className="font-[Space_Grotesk] text-lg font-bold gradient-text-soft">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
