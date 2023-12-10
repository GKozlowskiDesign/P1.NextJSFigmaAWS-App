import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services'
import About from './components/About';
import Footer from './components/Footer';
import Hiring from './components/Hiring';
import Community from './components/Communiity';



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
          <Community />
        </div>
      </div>
    </div>

  )
}
