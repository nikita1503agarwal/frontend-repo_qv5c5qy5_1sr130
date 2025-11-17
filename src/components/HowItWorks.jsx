import { motion } from 'framer-motion'

const steps = [
  { title: 'Upload photo', text: 'Send a clear photo of your child.' },
  { title: 'We craft', text: 'Our artists turn it into a paintable 3D figure or a custom coloring book.' },
  { title: 'You receive', text: 'Delivered to your door, ready for play and creativity.' },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-black text-orange-700 text-center">How It Works</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 p-6 shadow">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center">{i + 1}</div>
              <h3 className="mt-4 text-xl font-bold text-orange-800">{s.title}</h3>
              <p className="mt-2 text-orange-900/80">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
