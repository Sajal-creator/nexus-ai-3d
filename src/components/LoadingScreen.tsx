import { motion, AnimatePresence } from 'framer-motion'

interface LoadingScreenProps {
  done: boolean
}

export default function LoadingScreen({ done }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <div className="grid-bg absolute inset-0 opacity-30" />
          <div className="radial-cyan absolute inset-0" />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <div className="absolute inset-0 -m-8 rounded-full bg-cyan-500/20 blur-2xl" />
              <svg
                width="80"
                height="80"
                viewBox="0 0 64 64"
                className="relative drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
              >
                <defs>
                  <linearGradient id="loadgrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M16 48 L32 16 L48 48 M22 38 L42 38"
                  stroke="url(#loadgrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>

            <div className="flex flex-col items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl font-bold tracking-[0.4em] gradient-text font-[Space_Grotesk]"
              >
                NEXUS AI
              </motion.div>

              <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full w-full origin-left bg-gradient-to-r from-cyan-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-xs uppercase tracking-[0.3em] text-white/50"
              >
                Initializing intelligence
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
