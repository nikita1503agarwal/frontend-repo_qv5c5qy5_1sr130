import Hero from './components/Hero'
import Showcase from './components/Showcase'
import HowItWorks from './components/HowItWorks'
import WhyLove from './components/WhyLove'
import Comparison from './components/Comparison'
import StoryStrip from './components/StoryStrip'
import Testimonials from './components/Testimonials'
import OrderForm from './components/OrderForm'

function App() {
  return (
    <div className="font-[Inter] text-orange-900 selection:bg-yellow-200 selection:text-orange-900">
      <Hero />
      <StoryStrip />
      <Showcase />
      <HowItWorks />
      <WhyLove />
      <Comparison />
      <Testimonials />
      <OrderForm />

      <footer className="py-10 text-center text-sm text-orange-900/70 bg-gradient-to-t from-orange-50 to-white">
        © {new Date().getFullYear()} Papayow — kid-safe, non-toxic, handcrafted • Creation 2–4 days then shipping
      </footer>
    </div>
  )
}

export default App
