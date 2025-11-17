import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function StoryStrip(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="py-10 bg-gradient-to-r from-yellow-50 via-orange-50 to-green-50 overflow-hidden">
      <motion.div style={{ x }} className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-6 text-2xl">
          <span className="text-3xl">🥭</span>
          <span className="text-orange-700 font-bold">papaya</span>
          <span className="text-orange-500">→ paint</span>
          <span className="text-orange-600">→ figurine</span>
          <span className="text-green-600">→ crayon</span>
          <span className="text-green-700">→ coloring book</span>
          <span className="text-orange-700 font-bold">→ create!</span>
        </div>
      </motion.div>
    </section>
  )
}
