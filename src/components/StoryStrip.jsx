import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function StoryStrip(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.9])

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* soft papaya gradient background that intensifies on scroll */}
      <motion.div style={{ opacity: bgOpacity }} className="absolute inset-0 bg-gradient-to-b from-orange-50 via-yellow-50 to-green-50" />

      {/* Scene 1 – Painting */}
      <PaintingScene />

      {/* Scene 2 – 3D Figurine */}
      <FigurineScene />

      {/* Scene 3 – Coloring Book */}
      <ColoringBookScene />
    </section>
  )
}

function SectionFrame({ children, tint }){
  return (
    <div className={`py-24 md:py-32 ${tint ? tint : ''}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur p-6 md:p-10 shadow-sm ring-1 ring-black/5">
          {children}
        </div>
      </div>
    </div>
  )
}

function PaintingScene(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const handX = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const brushOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 1])

  return (
    <div ref={ref}>
      <SectionFrame tint="bg-gradient-to-b from-white to-orange-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-orange-700">Cozy Painting Time</h3>
            <p className="mt-2 text-orange-900/80">A friendly hand draws on the desk while paint splashes and crayons dance around — it’s where the magic starts.</p>
          </div>
          <div className="relative h-56 md:h-64">
            {/* desk */}
            <div className="absolute inset-x-0 bottom-0 h-16 rounded-2xl bg-amber-200 shadow-inner" />
            {/* paper */}
            <motion.div className="absolute left-6 right-6 bottom-8 h-28 bg-white rounded-xl border shadow" style={{ opacity: brushOpacity }} />
            {/* hand */}
            <motion.div className="absolute -bottom-2 left-10" style={{ x: handX }}>
              <Hand />
            </motion.div>
            {/* crayons */}
            <motion.div className="absolute right-6 bottom-10 flex gap-2" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <Crayon color="#f59e0b" />
              <Crayon color="#22c55e" />
              <Crayon color="#facc15" />
            </motion.div>
            {/* splashes */}
            <motion.div className="absolute left-6 top-6" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }}>
              <PaintSplash color="#fb923c" />
            </motion.div>
          </div>
        </div>
      </SectionFrame>
    </div>
  )
}

function FigurineScene(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const colorReveal = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref}>
      <SectionFrame tint="bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-orange-700">From White Figurine to Color</h3>
            <p className="mt-2 text-orange-900/80">Watch gentle brush strokes bring the figurine to life. Ready to paint your child’s story.</p>
            <div className="mt-4">
              <a href="#order" className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold shadow">
                Create My 3D Figurine
              </a>
            </div>
          </div>
          <div className="relative h-64 flex items-center justify-center">
            <div className="w-40 h-56 rounded-2xl bg-gray-100 shadow-inner border" />
            {/* color layers */}
            <motion.div className="absolute w-32 h-40 rounded-xl" style={{ opacity: colorReveal, background: 'conic-gradient(from 0deg, #fb923c, #f59e0b, #facc15, #22c55e)' }} />
            <motion.div className="absolute -bottom-2 right-8" animate={{ rotate: [0, 8, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <Brush />
            </motion.div>
          </div>
        </div>
      </SectionFrame>
    </div>
  )
}

function ColoringBookScene(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const pageFlip = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref}>
      <SectionFrame tint="bg-gradient-to-b from-green-50 to-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 relative h-64">
            <div className="absolute inset-0 rounded-2xl bg-white border shadow overflow-hidden">
              {/* base page */}
              <div className="absolute inset-0 p-6 text-sm text-gray-400">Outline your child’s adventures…</div>
              {/* flipping page */}
              <motion.div className="absolute inset-0 origin-left bg-white/90 border-l" style={{ rotateY: pageFlip.to([0, 1], [0, -50]) }} />
            </div>
            {/* crayons drawing */}
            <motion.div className="absolute -bottom-4 right-6" animate={{ x: [0, -10, 0], rotate: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <Crayon color="#22c55e" />
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-black text-green-700">Flip Through a Custom Coloring Book</h3>
            <p className="mt-2 text-orange-900/80">Pages flip while outlines are drawn and colors fill in — starring your kiddo.</p>
            <div className="mt-4">
              <a href="#order" className="inline-flex items-center justify-center rounded-full px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-bold shadow">
                Make My Coloring Book
              </a>
            </div>
          </div>
        </div>
      </SectionFrame>
    </div>
  )
}

function Hand(){
  return (
    <div className="relative">
      <div className="w-24 h-12 bg-orange-200 rounded-2xl shadow" />
      <div className="absolute -right-6 top-6 w-10 h-4 bg-orange-200 rounded-full" />
      <div className="absolute -right-8 top-8 w-12 h-4 bg-orange-200 rounded-full" />
    </div>
  )
}

function Brush(){
  return (
    <div className="flex items-center gap-1">
      <div className="w-2 h-2 rotate-45 bg-orange-500" />
      <div className="h-2 w-14 rounded-r-full bg-orange-500" />
    </div>
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

function PaintSplash({ color = '#fb923c' }) {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63 7c10 2 12 18 22 22s28-2 29 9-16 15-19 26 7 25-2 31-21-7-32-6-19 15-28 11-4-22-9-31S0 57 1 47s18-8 26-16S53 5 63 7Z" fill={color} opacity="0.25" />
    </svg>
  )
}
