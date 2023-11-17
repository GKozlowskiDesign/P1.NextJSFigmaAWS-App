import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services'
import About from './components/About';
import Developers from './components/Developers'
import Integration from './components/Intergration'
import Footer from './components/Footer';
import Hiring from './components/Hiring';



export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className='h-2 bg-green-400'></div>
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
          <Hiring />
          <Footer />
        </div>
      </div>
    </div>

  )
}
