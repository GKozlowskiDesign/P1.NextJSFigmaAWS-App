import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services'
import About from './components/About';
import Developers from './components/Developers'
import Integration from './components/Intergration'
import Footer from './components/Footer';
import { Inter } from 'next/font/google';



export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-black pt-2">
      <div>
      <Header />
      </div>
      
      <div>
      <Hero />
      </div>

      <div>
        <div>
          <About />
          <Services />

          <Developers />
          <Integration />

          <Footer />
        </div>
      </div>
    </div>

  )
}
