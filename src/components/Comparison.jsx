export default function Comparison(){
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl md:text-4xl font-black text-orange-700 text-center">Product Comparison</h2>
        <div className="mt-8 overflow-hidden rounded-2xl shadow bg-white">
          <div className="grid grid-cols-3 text-sm md:text-base">
            <div className="p-4 font-bold bg-orange-100">Feature</div>
            <div className="p-4 font-bold bg-yellow-100">3D Figurine</div>
            <div className="p-4 font-bold bg-green-100">Coloring Book</div>

            <div className="p-4 border-t">Personalized</div>
            <div className="p-4 border-t">Based on photo</div>
            <div className="p-4 border-t">Child as the hero</div>

            <div className="p-4 border-t">Creative Play</div>
            <div className="p-4 border-t">Paint it!</div>
            <div className="p-4 border-t">Color it!</div>

            <div className="p-4 border-t">Keepsake</div>
            <div className="p-4 border-t">Display figurine</div>
            <div className="p-4 border-t">Keep the book</div>
          </div>
        </div>
      </div>
    </section>
  )
}
