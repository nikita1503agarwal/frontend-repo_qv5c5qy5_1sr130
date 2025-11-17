import { useState } from 'react'

export default function OrderForm(){
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/order`, { method: 'POST', body: data })
      const json = await res.json()
      if(!res.ok){
        throw new Error(json.detail || 'Submission failed')
      }
      setMessage('Thanks! We received your request. Check your email soon.')
      form.reset()
    } catch (err){
      setMessage(`Error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-black text-orange-700 text-center">Order / Upload</h2>
        <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl bg-orange-50 p-6 border border-orange-100">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-orange-900/80">Parent Email</label>
              <input name="parent_email" type="email" required className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-orange-900/80">Product</label>
              <select name="product_type" className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400">
                <option value="figurine">3D Figurine</option>
                <option value="coloring_book">Coloring Book</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-orange-900/80">Child's Photo</label>
            <input name="photo" type="file" accept="image/*" required className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-orange-900/80">Short Description</label>
            <textarea name="description" rows="3" className="mt-1 w-full rounded-xl border border-orange-200 bg-white px-3 py-2" placeholder="Notes, favorite colors, ideas..." />
          </div>

          <button disabled={loading} className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 shadow-lg transition disabled:opacity-60">
            {loading ? 'Sending...' : 'Send Request'}
          </button>

          {message && (
            <p className="text-center text-sm text-orange-900/90">{message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
