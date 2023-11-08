import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services'
import About from './components/About';
import Updates from './components/Updates'
import Footer from './components/Footer';



export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white pt-2">
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
          <Updates />
          <Footer />
        </div>
      </div>
    </div>

  )
}
