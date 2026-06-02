import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Step {
  num: string
  title: string
  description: string
  code: string
  color: string
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Connect your data',
    description:
      'Plug in your stack — databases, files, APIs, or entire codebases. Nexus indexes everything in minutes.',
    code: `nexus.connect({
  source: 'postgres://prod',
  vectorize: true,
  refresh: '5m'
})`,
    color: '#00d4ff',
  },
  {
    num: '02',
    title: 'Compose agents',
    description:
      'Mix reasoning, tools, and memory in a visual canvas. Define workflows in plain English or TypeScript.',
    code: `const agent = nexus.agent({
  model: 'nexus-4-pro',
  tools: ['search', 'sql', 'http'],
  memory: 'persistent'
})`,
    color: '#7c3aed',
  },
  {
    num: '03',
    title: 'Deploy to production',
    description:
      'Ship to the edge in one click. Monitor every call, version every model, scale without limits.',
    code: `nexus.deploy(agent, {
  region: 'global',
  autoscale: true,
  version: 'v1.0.0'
})`,
    color: '#a855f7',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.step-block',
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      )

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 80%',
              scrub: 1,
            },
          },
        )
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="how"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="radial-purple absolute inset-0 opacity-40" />
      <div className="grid-bg absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            How it works
          </div>
          <h2 className="font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            From idea to <span className="gradient-text">production</span>
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Three deliberate steps. Engineered to be invisible.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            ref={lineRef}
            className="absolute left-6 top-0 hidden h-full w-[2px] origin-top bg-gradient-to-b from-cyan-400/60 via-purple-500/60 to-transparent sm:left-1/2 sm:block"
          />
          <div className="absolute left-6 top-0 h-full w-[2px] bg-white/5 sm:hidden" />

          <div className="space-y-16 sm:space-y-24">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="step-block relative grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-12"
                style={{ opacity: 0 }}
              >
                <div
                  className={`relative pl-16 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:order-2 sm:pl-12'
                  }`}
                >
                  <div
                    className="absolute left-3 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold sm:left-1/2 sm:top-3 sm:h-8 sm:w-8 sm:-translate-x-1/2"
                    style={{
                      background: `linear-gradient(135deg, ${s.color}, ${s.color}80)`,
                      boxShadow: `0 0 20px ${s.color}80`,
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="mb-3 inline-block text-xs font-mono uppercase tracking-[0.3em] text-white/40">
                    Step {s.num}
                  </div>
                  <h3 className="font-[Space_Grotesk] text-2xl font-bold sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base text-white/60">
                    {s.description}
                  </p>
                </div>

                <div
                  className={`pl-16 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pl-12' : 'sm:order-1 sm:pr-12'
                  }`}
                >
                  <div
                    className="glass relative overflow-hidden rounded-2xl p-5 sm:p-6"
                    style={{
                      borderColor: `${s.color}40`,
                    }}
                  >
                    <div className="mb-3 flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                      <span className="ml-2 text-[10px] font-mono uppercase tracking-widest text-white/30">
                        nexus.config.ts
                      </span>
                    </div>
                    <pre className="overflow-x-auto text-[13px] leading-relaxed">
                      <code>
                        {s.code.split('\n').map((line, idx) => (
                          <div key={idx} className="flex">
                            <span className="mr-4 inline-block w-4 select-none text-right text-white/20">
                              {idx + 1}
                            </span>
                            <span>
                              {line.split(/(\bnexus\b|\bagent\b|\bconnect\b|\bdeploy\b|\btrue\b)/g).map(
                                (part, j) =>
                                  part === 'nexus' ||
                                  part === 'agent' ||
                                  part === 'connect' ||
                                  part === 'deploy' ? (
                                    <span
                                      key={j}
                                      style={{ color: s.color }}
                                      className="font-medium"
                                    >
                                      {part}
                                    </span>
                                  ) : part === 'true' ? (
                                    <span key={j} className="text-emerald-400">
                                      {part}
                                    </span>
                                  ) : (
                                    <span key={j} className="text-white/80">
                                      {part}
                                    </span>
                                  ),
                              )}
                            </span>
                          </div>
                        ))}
                      </code>
                    </pre>
                    <div
                      className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full blur-3xl opacity-30"
                      style={{ background: s.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
