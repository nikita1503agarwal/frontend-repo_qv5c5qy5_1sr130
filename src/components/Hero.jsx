import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Playful kid bedroom background */}
      <BackgroundBedroom />

      {/* Soft gradient veil to ensure text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl px-6 md:px-10 mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mx-auto mb-5 w-20 h-20 rounded-3xl bg-gradient-to-tr from-orange-400 to-yellow-400 shadow-lg flex items-center justify-center border-4 border-white">
            <span className="text-4xl">🥭</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-orange-700 drop-shadow-[0_2px_0_rgba(255,255,255,0.6)]">
            Papayow
          </h1>
          <p className="mt-3 md:mt-4 text-base md:text-xl text-orange-800/90 font-medium">
            Turning kids’ photos into paintable 3D figures and custom coloring books
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#order" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg shadow-orange-200 transition-all">
              Create My 3D Figurine
            </a>
            <a href="#order" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold shadow-lg shadow-green-200 transition-all">
              Make My Coloring Book
            </a>
          </div>
        </motion.div>

        {/* Playful floating elements */}
        <motion.div className="absolute -left-6 top-10 hidden md:block" animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
          <PaintSplash color="#fb923c" />
        </motion.div>
        <motion.div className="absolute -right-6 bottom-10 hidden md:block" animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
          <Crayon color="#16a34a" />
        </motion.div>
        <motion.div className="absolute left-10 bottom-12 hidden md:block" animate={{ x: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 7 }}>
          <BrushStroke />
        </motion.div>
      </div>
    </section>
  )
}

function BackgroundBedroom(){
  return (
    <div className="absolute inset-0 -z-0">
      {/* wall gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-green-50" />

      {/* wall posters */}
      <motion.div className="absolute top-10 left-8" initial={{ rotate: -3, opacity: 0 }} animate={{ rotate: -3, opacity: 1 }} transition={{ delay: 0.4 }}>
        <div className="w-28 h-36 rounded-xl bg-white shadow-md border border-orange-100 flex items-center justify-center">
          <span className="text-2xl">⭐️</span>
        </div>
      </motion.div>
      <motion.div className="absolute top-16 right-12" initial={{ rotate: 4, opacity: 0 }} animate={{ rotate: 4, opacity: 1 }} transition={{ delay: 0.6 }}>
        <div className="w-24 h-28 rounded-xl bg-white shadow-md border border-green-100 flex items-center justify-center">
          <span className="text-2xl">🖍️</span>
        </div>
      </motion.div>

      {/* shelf */}
      <motion.div className="absolute left-6 md:left-16 top-40" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
        <div className="w-56 h-3 rounded-full bg-orange-200 shadow" />
        <div className="mt-2 flex gap-2">
          <div className="w-8 h-10 rounded bg-orange-300" />
          <div className="w-8 h-12 rounded bg-yellow-300" />
          <div className="w-8 h-8 rounded bg-green-300" />
        </div>
      </motion.div>

      {/* bed */}
      <motion.div className="absolute right-6 md:right-16 bottom-20" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
        <div className="w-72 h-8 bg-orange-300 rounded-t-xl shadow" />
        <div className="w-72 h-20 bg-orange-200 rounded-b-2xl shadow-inner" />
        <div className="absolute -top-6 left-3 w-14 h-6 bg-white rounded-xl shadow" />
        <div className="absolute -top-6 left-20 w-14 h-6 bg-white rounded-xl shadow" />
      </motion.div>

      {/* desk */}
      <motion.div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[80%] md:w-[70%]" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.1 }}>
        <div className="h-5 rounded-t-2xl bg-amber-300 shadow" />
        <div className="h-10 rounded-b-2xl bg-amber-200 shadow-inner relative overflow-visible">
          {/* notebook */}
          <motion.div className="absolute -top-10 left-6 w-32 h-20 rounded-xl bg-white border shadow" animate={{ rotate: [0, -2, 2, 0] }} transition={{ repeat: Infinity, duration: 6 }} />
          {/* crayons */}
          <motion.div className="absolute -top-6 right-10 flex gap-2" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
            <Crayon color="#f59e0b" />
            <Crayon color="#22c55e" />
            <Crayon color="#facc15" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

function PaintSplash({ color = 'orange' }) {
  const fill = color
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63 7c10 2 12 18 22 22s28-2 29 9-16 15-19 26 7 25-2 31-21-7-32-6-19 15-28 11-4-22-9-31S0 57 1 47s18-8 26-16S53 5 63 7Z" fill={fill} opacity="0.25" />
    </svg>
  )
}

function Crayon({ color = '#22c55e' }) {
  return (
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 rotate-45" style={{ background: color }} />
      <div className="h-2 w-16 rounded-r-full" style={{ background: color }} />
    </div>
  )
}

function BrushStroke() {
  return (
    <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 22c53-16 74 18 130 4 16-4 28-9 46-10" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" opacity="0.4" />
    </svg>
  )
}
