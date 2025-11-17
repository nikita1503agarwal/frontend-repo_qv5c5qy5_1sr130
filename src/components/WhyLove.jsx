import { motion } from 'framer-motion'

const bullets = [
  'A unique, personalized gift',
  'Encourages creativity and hands-on play',
  'Screen-free activity time',
  'Kid-safe, non-toxic materials',
]

export default function WhyLove() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-black text-orange-700 text-center">Why Parents Love Papayow</h2>
        <ul className="mt-8 grid md:grid-cols-2 gap-4">
          {bullets.map((b, i) => (
            <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-2xl p-4">
              <span className="text-2xl">✨</span>
              <span className="text-orange-900/90">{b}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
