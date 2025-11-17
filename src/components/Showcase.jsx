import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-orange-700">3D Figurine</h2>
            <p className="mt-3 text-orange-900/80">A white, paint-ready figurine based on your child’s photo. Kids paint it with their own colors!</p>
            <PaintAnim />
          </div>
          <div>
            <div className="rounded-3xl bg-white shadow p-6 aspect-[4/3] flex items-center justify-center">
              <div className="w-40 h-40 rounded-2xl bg-gray-100 border border-dashed border-gray-300" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-16 md:mt-24">
          <div className="order-2 md:order-1">
            <div className="rounded-3xl bg-white shadow p-6 aspect-[4/3] flex items-center justify-center">
              <BookAnim />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-green-700">Coloring Book</h2>
            <p className="mt-3 text-green-900/80">A custom coloring book starring your child. Pages outline their adventures and favorite things.</p>
            <CrayonAnim />
          </div>
        </div>
      </div>
    </section>
  )
}

function PaintAnim() {
  return (
    <div className="mt-6 relative h-24">
      <motion.div className="absolute left-0 top-6" animate={{ x: [0, 160, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
        <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 22c53-16 74 18 130 4 16-4 28-9 46-10" stroke="#fb923c" strokeWidth="10" strokeLinecap="round" opacity="0.6" />
        </svg>
      </motion.div>
      <motion.div className="absolute right-8 -top-2" animate={{ rotate: [0, 8, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rotate-45 bg-orange-500" />
          <div className="h-2 w-16 rounded-r-full bg-orange-500" />
        </div>
      </motion.div>
    </div>
  )
}

function CrayonAnim() {
  return (
    <div className="mt-6 relative h-24">
      <motion.div className="absolute left-0 top-6" animate={{ x: [0, 140, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
        <div className="h-2 w-36 rounded-full bg-green-500/70" />
      </motion.div>
      <motion.div className="absolute right-8 -top-2" animate={{ rotate: [0, -10, 6, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rotate-45 bg-green-500" />
          <div className="h-2 w-16 rounded-r-full bg-green-500" />
        </div>
      </motion.div>
    </div>
  )
}

function BookAnim() {
  return (
    <div className="relative w-48 h-36">
      <motion.div className="absolute inset-0 rounded-lg bg-white border shadow" animate={{ rotateY: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ transformStyle: 'preserve-3d' }} />
      <motion.div className="absolute inset-0 rounded-lg bg-white border shadow origin-left" animate={{ rotateY: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 3 }} style={{ transformStyle: 'preserve-3d' }} />
    </div>
  )
}
