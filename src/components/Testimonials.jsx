import { motion } from 'framer-motion'

const quotes = [
  { q: 'Our daughter loved painting her mini self — the cutest keepsake!', a: 'A happy parent' },
  { q: 'Screen-free fun that sparks creativity. Big win for us.', a: 'Another parent' },
  { q: 'The coloring book starring our son is priceless!', a: 'Grateful family' },
]

export default function Testimonials(){
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-black text-orange-700 text-center">What Parents Say</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((it, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-orange-50 border border-orange-100 p-6">
              <p className="text-orange-900/90">“{it.q}”</p>
              <footer className="mt-3 text-sm text-orange-800/70">— {it.a}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
