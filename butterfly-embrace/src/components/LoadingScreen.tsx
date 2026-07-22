import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { useAppStore } from '../store'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const { progress } = useProgress()
  const [displayProgress, setDisplayProgress] = useState(0)
  const { started, setStarted, setLoaded } = useAppStore()

  useEffect(() => {
    // Smooth progress
    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        const next = Math.min(prev + Math.random() * 5, progress)
        if (next >= 100) {
          clearInterval(timer)
          setLoaded(true)
          return 100
        }
        return next
      })
    }, 50)
    return () => clearInterval(timer)
  }, [progress, setLoaded])

  const handleStart = () => {
    setStarted(true)
  }

  return (
    <AnimatePresence>
      {!started && (
        <motion.div
          className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-neutral-950 text-white"
          exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Logo / Emblem */}
          <motion.div 
            className="mb-12 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="w-24 h-24 border border-[#d9423e]/30 rounded-full flex items-center justify-center relative">
              <motion.div 
                className="absolute inset-0 border border-[#d9423e] rounded-full"
                style={{ clipPath: `polygon(0 0, 100% 0, 100% ${displayProgress}%, 0 ${displayProgress}%)` }}
              />
              <span className="text-[#c39a58] text-sm tracking-[0.3em] font-light">
                {Math.round(displayProgress)}%
              </span>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#d9423e] blur-[50px] opacity-20 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl tracking-[0.2em] font-light mb-2 text-white/90">
              BUTTERFLY EMBRACE
            </h1>
            <p className="text-[#c39a58] tracking-widest text-xs uppercase opacity-80">
              Hu Tao × Ferrari
            </p>
          </motion.div>

          <AnimatePresence>
            {displayProgress >= 100 && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleStart}
                className="mt-16 px-12 py-4 border border-[#c39a58]/50 text-[#c39a58] tracking-[0.3em] text-sm hover:bg-[#c39a58]/10 transition-colors duration-500 rounded-sm relative overflow-hidden group"
              >
                <span className="relative z-10">IGNITE ENGINE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d9423e]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
