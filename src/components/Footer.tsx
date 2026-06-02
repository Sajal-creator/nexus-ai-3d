const columns = [
  {
    title: 'Product',
    links: [
      'Models',
      'Agents',
      'Tools',
      'Memory',
      'Pricing',
      'Changelog',
    ],
  },
  {
    title: 'Developers',
    links: [
      'Documentation',
      'API reference',
      'SDKs',
      'Examples',
      'Status',
      'Discord',
    ],
  },
  {
    title: 'Company',
    links: [
      'About',
      'Careers',
      'Blog',
      'Press',
      'Customers',
      'Contact',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Security',
      'Compliance',
      'Privacy',
      'Terms',
      'DPA',
      'Trust center',
    ],
  },
]

const socials = [
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/5 pt-20">
      <div className="radial-cyan pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-y-1/2 opacity-30 blur-3xl" />
      <div className="radial-purple pointer-events-none absolute right-1/4 top-0 h-72 w-72 -translate-y-1/2 opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <div className="relative">
                <div className="absolute inset-0 rounded-md bg-cyan-400/40 blur-md opacity-60" />
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                  className="relative"
                >
                  <defs>
                    <linearGradient id="footgrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#00d4ff" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 48 L32 16 L48 48 M22 38 L42 38"
                    stroke="url(#footgrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-[0.25em] font-[Space_Grotesk]">
                NEXUS <span className="gradient-text-soft">AI</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              Intelligence beyond limits. The next generation of artificial
              intelligence for forward-thinking teams.
            </p>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
                Get the newsletter
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="glass mt-3 flex max-w-sm items-center gap-2 rounded-full p-1.5"
              >
                <input
                  type="email"
                  required
                  placeholder="you@team.com"
                  className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder-white/30 outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-white/65 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/5 py-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span>© 2026 Nexus AI, Inc.</span>
            <a href="#" className="hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="hover:text-white/70">
              Terms
            </a>
            <a href="#" className="hover:text-white/70">
              Security
            </a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              All systems operational
            </span>
          </div>

          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold uppercase tracking-wider text-white/70 transition-all hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
              >
                {s.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-4 select-none overflow-hidden">
        <div
          className="whitespace-nowrap text-center font-[Space_Grotesk] text-[18vw] font-bold leading-none tracking-tighter"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          NEXUS · AI
        </div>
      </div>
    </footer>
  )
}
