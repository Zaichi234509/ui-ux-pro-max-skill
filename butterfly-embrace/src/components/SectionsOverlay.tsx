import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Flame, X, Zap, Gauge, Shield, Crown, Clock, ChevronRight } from 'lucide-react'

const sections = {
  VISION: {
    icon: Flame,
    subtitle: 'The Concept',
    title: 'VISION',
    description: 'A hypercar born from the ethereal dance between Italian engineering mastery and the crimson guidance of the Wangsheng Funeral Parlor.',
    content: [
      { heading: 'Butterfly Inspiration', body: 'The C6 platform is reshaped by aerodynamic curves inspired by the delicate yet resilient butterfly wing — a symbol of transformation and eternal grace. Every contour echoes the duality of speed and serenity.', icon: '🦋' },
      { heading: 'Red & Gold Alchemy', body: 'The exterior palette merges Ferrari Rosso Corsa with Hu Tao\'s crimson and gold ceremonial tones — a visual hymn to fire and rebirth.', icon: '🎨' },
      { heading: 'Wangsheng Philosophy', body: 'The design philosophy embraces the transient beauty of life. The car is not just built; it is guided — every line consecrated with intention, every surface a prayer to motion.', icon: '🔥' },
    ],
  },
  PERFORMANCE: {
    icon: Zap,
    subtitle: 'Engineering',
    title: 'PERFORMANCE',
    description: 'Where pyromancy meets mechanics. A hypercar that does not simply accelerate — it transcends.',
    specs: [
      { label: '0-100 KM/H', value: '1.8s', icon: Gauge },
      { label: 'TOP SPEED', value: '400+', unit: 'KM/H', icon: Shield },
      { label: 'PYRO POWER', value: '1,240', unit: 'CV', icon: Zap },
      { label: 'TORQUE', value: '980', unit: 'NM', icon: Crown },
    ],
    content: [
      { heading: 'Twin-Turbo V6 Soul', body: 'A bespoke twin-turbo V6, tuned with pyromancy-infused exhaust dynamics. The engine breathes fire at 9,000 RPM, delivering a roar that echoes through realms.', icon: '⚡' },
      { heading: 'Active Aerodynamics', body: 'Intelligent wing elements adjust in real time, guided by sensor arrays that read both wind and intent — a choreography of lift and downforce.', icon: '🌬️' },
      { heading: 'Carbon-Weave Chassis', body: 'A monocoque woven from aerospace-grade carbon fiber, light as a butterfly wing, unyielding as ancient stone.', icon: '🕸️' },
    ],
  },
  LEGACY: {
    icon: Crown,
    subtitle: 'Heritage',
    title: 'LEGACY',
    description: 'A collaboration written in crimson ink — the meeting of Maranello\'s steel and the ethereal guidance of Wangsheng.',
    timeline: [
      { year: '1947', event: 'Enzo Ferrari founds the marque — a legacy of red begins.' },
      { year: '2022', event: 'Genshin Impact\'s Hu Tao appears — a new kind of fire enters the world.' },
      { year: '2025', event: 'The Butterfly Embrace collaboration is revealed — art and machine as one.' },
      { year: '2026', event: 'First delivery — a car guided by spirits and built by hands.' },
    ],
    content: [
      { heading: 'Ferrari Heritage', body: 'For nearly eight decades, Ferrari has defined speed, beauty, and uncompromising excellence. The Prancing Horse is not a logo — it is a promise.', icon: '🐎' },
      { heading: 'Hu Tao Collaboration', body: 'As director of the Wangsheng Funeral Parlor, Hu Tao guides souls with grace and warmth. This partnership channels that same guiding energy into engineering art.', icon: '💀' },
      { heading: 'The Eternal Embrace', body: 'Every Butterfly Embrace model carries an engraved plaque — a verse from Hu Tao and Enzo, forever intertwined in metal and memory.', icon: '📜' },
    ],
  },
  RESERVE: {
    icon: Clock,
    subtitle: 'Limited Release',
    title: 'RESERVE',
    description: 'Only 88 units will ever exist. Each one consecrated, each one guided. Secure your place in history.',
    features: [
      'Hand-numbered carbon plaque with Hu Tao inscription',
      'Private delivery ceremony at Maranello',
      'Lifetime concierge access via Wangsheng protocol',
      'Exclusive crimson-gold interior with butterfly stitching',
      'Custom aerodynamic wing tuned to your region',
    ],
    content: [
      { heading: 'Limited Edition — 88 Units', body: 'In the tradition of ceremonial numerology, only 88 Butterfly Embrace cars will ever be born. Each carries a unique number — your number.', icon: '88' },
      { heading: 'Private Commission', body: 'Reserve through the Wangsheng Protocol. A dedicated concierge guides you through customization, from exterior shade to interior embroidery.', icon: '✍️' },
      { heading: 'Delivery Ceremony', body: 'Your car is delivered not to a showroom, but to a consecrated space at Maranello — a ritual, a blessing, a new beginning.', icon: '🎭' },
    ],
  },
}

type SectionKey = 'VISION' | 'PERFORMANCE' | 'LEGACY' | 'RESERVE'

export default function SectionsOverlay({ active, onClose }: { active: SectionKey | null; onClose: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  if (!active) return null

  const section = sections[active]
  const IconComponent = section.icon

  return (
    <AnimatePresence>
      <motion.div
        key={active}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-[#050505]/85 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-gradient-to-br from-[#0a0a0a]/90 via-[#0f0c0b]/90 to-[#0a0a0a]/90 border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Decorative corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d9423e]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c39a58]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex justify-between items-start p-8 md:p-10 border-b border-white/5">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <IconComponent className="text-[#d9423e]" size={22} />
                <span className="text-xs tracking-[0.3em] text-[#c39a58] uppercase">{section.subtitle}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light tracking-[0.15em] text-white">{section.title}</h2>
              <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl font-light leading-relaxed">{section.description}</p>
            </div>
            <button
              onClick={onClose}
              className="interactive p-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-[#d9423e] hover:bg-[#d9423e]/10 transition-all duration-300"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content Body */}
          <div className="relative z-10 p-8 md:p-10 space-y-12">
            {/* Content Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {'content' in section && section.content?.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                    hoveredIndex === i ? 'bg-white/5 border-[#c39a58]/30' : 'bg-white/[0.02] border-white/5 hover:border-[#c39a58]/20'
                  }`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-light tracking-[0.15em] text-white mb-3">{item.heading}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-light">{item.body}</p>
                  <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-[#d9423e] via-[#c39a58] to-transparent transition-all duration-500" />
                </motion.div>
              ))}
            </div>

            {/* Specs / Timeline / Features */}
            {'specs' in section && section.specs && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {section.specs.map((spec) => {
                  const SpecIcon = spec.icon
                  return (
                    <div key={spec.label} className="relative p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/5">
                      <SpecIcon className="text-[#c39a58]/60 mb-4" size={22} />
                      <div className="text-xs tracking-[0.25em] text-white/30 mb-1">{spec.label}</div>
                      <div className="text-3xl md:text-4xl font-light text-white tracking-tight">
                        {spec.value} <span className="text-[#d9423e]/80 text-lg">{spec.unit}</span>
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )}

            {'timeline' in section && section.timeline && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="border-l border-[#d9423e]/20 pl-6 md:pl-8 space-y-6"
              >
                {section.timeline.map((t, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-[#d9423e] border-2 border-[#050505] shadow-[0_0_10px_#d9423e]" />
                    <div className="text-xs font-medium text-[#c39a58] tracking-[0.2em] mb-1">{t.year}</div>
                    <div className="text-sm md:text-base text-white/70 font-light leading-relaxed">{t.event}</div>
                  </div>
                ))}
              </motion.div>
            )}

            {'features' in section && section.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="grid md:grid-cols-2 gap-3"
              >
                {section.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d9423e]/20 to-[#c39a58]/20 flex items-center justify-center shrink-0">
                      <ChevronRight size={14} className="text-[#c39a58]" />
                    </div>
                    <span className="text-sm text-white/70 font-light">{feat}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Footer action */}
          <div className="relative z-10 p-8 md:p-10 border-t border-white/5 flex justify-between items-center">
            <span className="text-xs text-white/20 tracking-[0.3em] uppercase">SCUDERIA WANGSHENG</span>
            <button
              onClick={onClose}
              className="interactive text-xs tracking-[0.2em] text-[#c39a58] hover:text-white transition-colors"
            >
              RETURN TO EXPERIENCE
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
