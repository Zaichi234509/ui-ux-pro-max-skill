import { motion, AnimatePresence } from 'framer-motion'
import { Flame, X } from 'lucide-react'
import { useState } from 'react'
import SectionsOverlay from './SectionsOverlay'

const navItems = ['VISION', 'PERFORMANCE', 'LEGACY', 'RESERVE'] as const
type NavItem = typeof navItems[number]

export default function Overlay() {
  const [activeSection, setActiveSection] = useState<NavItem | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (item: NavItem) => {
    setActiveSection(item)
    setMobileMenuOpen(false)
  }

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 text-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <Flame className="text-[#d9423e]" size={20} />
          <span className="tracking-[0.3em] text-[clamp(0.6rem,0.55rem+0.2vw,0.75rem)] font-light">
            SCUDERIA <span className="text-[#c39a58]">WANGSHENG</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item)
              }}
              className="interactive text-[clamp(0.6rem,0.55rem+0.2vw,0.75rem)] tracking-widest hover:text-[#c39a58] transition-colors pointer-events-auto cursor-pointer flex items-center min-h-[44px]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="interactive md:hidden pointer-events-auto cursor-pointer flex items-center justify-center min-h-[44px] min-w-[44px] p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <div className="flex flex-col gap-1.5">
            <div className="w-6 h-[2px] bg-white" />
            <div className="w-4 h-[2px] bg-white ml-auto" />
          </div>
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#050505]/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="flex flex-col h-full w-full max-w-[280px] ml-auto bg-gradient-to-b from-[#0a0a0a] to-[#0f0c0b] border-l border-white/10"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="interactive flex items-center justify-center min-h-[44px] min-w-[44px] p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-[#d9423e] hover:bg-[#d9423e]/10 transition-all duration-300 cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Brand */}
              <div className="px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Flame className="text-[#d9423e]" size={20} />
                  <span className="tracking-[0.3em] text-[clamp(0.6rem,0.55rem+0.2vw,0.75rem)] font-light">
                    SCUDERIA <span className="text-[#c39a58]">WANGSHENG</span>
                  </span>
                </div>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col gap-2 p-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i + 0.2, duration: 0.3 }}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item)
                    }}
                    className="interactive flex items-center min-h-[44px] px-4 py-3 text-sm tracking-[0.2em] text-white/80 hover:text-white hover:bg-[#d9423e]/10 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-[#d9423e]/20"
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>

              {/* Decorative footer in mobile menu */}
              <div className="mt-auto p-6 border-t border-white/5">
                <p className="text-xs text-white/20 tracking-[0.3em]">FERRARI × GENSHIN IMPACT</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl mt-6 sm:mt-8 md:mt-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="text-[#c39a58] tracking-[0.4em] text-[clamp(0.6rem,0.55rem+0.25vw,0.75rem)] mb-3 sm:mb-4 uppercase">
            A C6 Masterpiece
          </h2>
          <h1 className="text-[clamp(2rem,1.5rem+3vw,4.5rem)] font-light tracking-wider leading-[1.1] mb-4 sm:mb-6">
            BUTTERFLY <br/>
            <span className="italic text-[#d9423e] font-serif">Embrace</span>
          </h1>
          <p className="text-white/60 text-[clamp(0.75rem,0.7rem+0.2vw,0.875rem)] max-w-md leading-relaxed font-light mb-6 sm:mb-8 md:mb-10 border-l border-[#d9423e]/30 pl-4 sm:pl-6">
            Where the passion of Maranello meets the ethereal guidance of the Wangsheng Funeral Parlor. A hypercar that dances between worlds.
          </p>
          
          <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
            <button
              className="interactive btn-responsive pointer-events-auto group flex items-center justify-center gap-2 sm:gap-3 bg-[#d9423e] text-white px-6 sm:px-8 py-3 sm:py-4 text-[clamp(0.6rem,0.55rem+0.2vw,0.75rem)] tracking-widest hover:bg-[#b0302c] transition-all duration-300 cursor-pointer min-h-[44px]"
              onClick={() => setActiveSection('VISION')}
            >
              <span>EXPLORE MODEL</span>
              <div className="w-6 h-px bg-white group-hover:w-10 transition-all duration-300" />
            </button>
            <button
              className="interactive pointer-events-auto text-[#c39a58] text-[clamp(0.6rem,0.55rem+0.2vw,0.75rem)] tracking-widest hover:text-white transition-colors cursor-pointer min-h-[44px] flex items-center"
              onClick={() => setActiveSection('LEGACY')}
            >
              WATCH FILM
            </button>
          </div>
        </motion.div>
      </div>

      {/* Footer / Specs */}
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="flex flex-col md:flex-row justify-between items-end gap-4 sm:gap-6 md:gap-8"
      >
        <div className="flex gap-6 sm:gap-8 md:gap-12 border-t border-white/10 pt-4 sm:pt-6 w-full md:w-auto">
          <div>
            <div className="text-[clamp(0.6rem,0.55rem+0.15vw,0.75rem)] text-white/40 tracking-widest mb-1">0-100 KM/H</div>
            <div className="text-[clamp(1rem,0.9rem+0.3vw,1.25rem)] font-light text-[#c39a58]">1.8s</div>
          </div>
          <div>
            <div className="text-[clamp(0.6rem,0.55rem+0.15vw,0.75rem)] text-white/40 tracking-widest mb-1">TOP SPEED</div>
            <div className="text-[clamp(1rem,0.9rem+0.3vw,1.25rem)] font-light text-[#c39a58]">400+ <span className="text-[clamp(0.75rem,0.7rem+0.15vw,0.875rem)]">KM/H</span></div>
          </div>
          <div>
            <div className="text-[clamp(0.6rem,0.55rem+0.15vw,0.75rem)] text-white/40 tracking-widest mb-1">PYRO POWER</div>
            <div className="text-[clamp(1rem,0.9rem+0.3vw,1.25rem)] font-light text-[#d9423e]">1,240 <span className="text-[clamp(0.75rem,0.7rem+0.15vw,0.875rem)]">CV</span></div>
          </div>
        </div>
        
        <div className="text-[clamp(0.6rem,0.55rem+0.15vw,0.75rem)] text-white/20 tracking-widest">
          FERRARI × GENSHIN IMPACT
        </div>
      </motion.footer>

      {/* Interactive Section Overlays */}
      <SectionsOverlay active={activeSection} onClose={() => setActiveSection(null)} />
    </div>
  )
}
