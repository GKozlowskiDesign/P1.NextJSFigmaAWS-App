import Hero from './components/Hero';
import Header from './components/Header';
import Services from './components/Services'
import About from './components/About';
import Footer from './components/Footer';


export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-white">
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
          <Footer />
        </div>
      </div>
    </div>

  )
}
