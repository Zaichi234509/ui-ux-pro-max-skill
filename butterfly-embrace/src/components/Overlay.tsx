import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export default function Overlay() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 md:p-12 text-white overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <Flame className="text-[#d9423e]" size={24} />
          <span className="tracking-[0.3em] text-sm font-light">SCUDERIA <span className="text-[#c39a58]">WANGSHENG</span></span>
        </div>
        <nav className="hidden md:flex gap-8">
          {['VISION', 'PERFORMANCE', 'LEGACY', 'RESERVE'].map((item) => (
            <a key={item} href="#" className="interactive text-xs tracking-widest hover:text-[#c39a58] transition-colors pointer-events-auto">
              {item}
            </a>
          ))}
        </nav>
        <button className="interactive md:hidden pointer-events-auto">
          <div className="w-6 h-px bg-white mb-1.5" />
          <div className="w-4 h-px bg-white ml-auto" />
        </button>
      </motion.header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl mt-12 md:mt-0">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="text-[#c39a58] tracking-[0.4em] text-xs md:text-sm mb-4 uppercase">
            A C6 Masterpiece
          </h2>
          <h1 className="text-5xl md:text-7xl font-light tracking-wider leading-tight mb-6">
            BUTTERFLY <br/>
            <span className="italic text-[#d9423e] font-serif">Embrace</span>
          </h1>
          <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed font-light mb-10 border-l border-[#d9423e]/30 pl-6">
            Where the passion of Maranello meets the ethereal guidance of the Wangsheng Funeral Parlor. A hypercar that dances between worlds.
          </p>
          
          <div className="flex gap-6 items-center">
            <button className="interactive pointer-events-auto group flex items-center justify-center gap-3 bg-[#d9423e] text-white px-8 py-4 text-xs tracking-widest hover:bg-[#b0302c] transition-all duration-300">
              <span>EXPLORE MODEL</span>
              <div className="w-6 h-px bg-white group-hover:w-10 transition-all duration-300" />
            </button>
            <button className="interactive pointer-events-auto text-[#c39a58] text-xs tracking-widest hover:text-white transition-colors">
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
        className="flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div className="flex gap-12 border-t border-white/10 pt-6 w-full md:w-auto">
          <div>
            <div className="text-xs text-white/40 tracking-widest mb-1">0-100 KM/H</div>
            <div className="text-xl font-light text-[#c39a58]">1.8s</div>
          </div>
          <div>
            <div className="text-xs text-white/40 tracking-widest mb-1">TOP SPEED</div>
            <div className="text-xl font-light text-[#c39a58]">400+ <span className="text-sm">KM/H</span></div>
          </div>
          <div>
            <div className="text-xs text-white/40 tracking-widest mb-1">PYRO POWER</div>
            <div className="text-xl font-light text-[#d9423e]">1,240 <span className="text-sm">CV</span></div>
          </div>
        </div>
        
        <div className="text-xs text-white/20 tracking-widest">
          FERRARI × GENSHIN IMPACT
        </div>
      </motion.footer>
    </div>
  )
}
