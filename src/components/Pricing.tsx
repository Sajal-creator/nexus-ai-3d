import { useState } from 'react'
import { motion } from 'framer-motion'

interface Tier {
  name: string
  tagline: string
  price: { monthly: number; yearly: number }
  features: string[]
  cta: string
  highlighted?: boolean
  badge?: string
}

const tiers: Tier[] = [
  {
    name: 'Starter',
    tagline: 'For curious builders & side projects.',
    price: { monthly: 0, yearly: 0 },
    features: [
      '50k tokens / month',
      '1 seat included',
      'Standard inference',
      'Community support',
      'Public model access',
      'Basic analytics',
    ],
    cta: 'Start for free',
  },
  {
    name: 'Pro',
    tagline: 'For teams shipping production AI.',
    price: { monthly: 49, yearly: 39 },
    features: [
      '10M tokens / month',
      'Up to 10 seats',
      'Priority inference (p95 < 200ms)',
      'Email & chat support',
      'Tool & function calling',
      'Persistent memory & workflows',
      'SOC 2 reports',
    ],
    cta: 'Start 14-day trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Enterprise',
    tagline: 'For organizations that need everything.',
    price: { monthly: 499, yearly: 399 },
    features: [
      'Unlimited tokens',
      'Unlimited seats & SSO',
      'Dedicated GPU clusters',
      '24/7 dedicated support',
      'Self-hosted & on-prem options',
      'Custom SLAs (99.99%)',
      'Customer-managed keys',
      'Custom model fine-tuning',
    ],
    cta: 'Contact sales',
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <section
      id="pricing"
      className="relative w-full overflow-hidden py-24 sm:py-32"
    >
      <div className="grid-bg absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="radial-purple absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-purple-300"
          >
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Space_Grotesk] text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            Simple, <span className="gradient-text">scalable</span> pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base text-white/60 sm:text-lg"
          >
            Start free. Scale seamlessly. No hidden fees, no surprise overages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md"
          >
            <button
              onClick={() => setYearly(false)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                !yearly ? 'text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              {!yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative">Monthly</span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                yearly ? 'text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              {yearly && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative">
                Yearly{' '}
                <span
                  className={`ml-1 text-[10px] font-semibold ${
                    yearly ? 'text-black/70' : 'text-emerald-400'
                  }`}
                >
                  −20%
                </span>
              </span>
            </button>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {tiers.map((t) => {
            const price = yearly ? t.price.yearly : t.price.monthly
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`group relative ${t.highlighted ? 'lg:-mt-4' : ''}`}
              >
                {t.highlighted && (
                  <div
                    className="absolute -inset-px rounded-3xl opacity-100"
                    style={{
                      background:
                        'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                    }}
                  />
                )}
                <div
                  className={`relative h-full rounded-3xl p-7 sm:p-8 ${
                    t.highlighted
                      ? 'bg-[#0a0a14]'
                      : 'glass'
                  }`}
                >
                  {t.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                        {t.badge}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="font-[Space_Grotesk] text-xl font-bold">
                      {t.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/55">
                      {t.tagline}
                    </p>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="font-[Space_Grotesk] text-5xl font-bold tracking-tight">
                      ${price}
                    </span>
                    <span className="text-sm text-white/50">
                      /{yearly ? 'mo, billed yearly' : 'month'}
                    </span>
                  </div>

                  <a
                    href="#"
                    className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                      t.highlighted
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-black hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]'
                        : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                    }`}
                  >
                    {t.cta}
                    <svg
                      width="14"
                      height="14"
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

                  <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <ul className="space-y-3">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-white/75"
                      >
                        <span
                          className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full ${
                            t.highlighted
                              ? 'bg-gradient-to-br from-cyan-400 to-purple-500'
                              : 'bg-white/10'
                          }`}
                        >
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={t.highlighted ? 'black' : 'white'}
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-sm text-white/40">
          All plans include unlimited API requests, full audit logs, and 99.9%
          uptime SLA.
        </p>
      </div>
    </section>
  )
}
