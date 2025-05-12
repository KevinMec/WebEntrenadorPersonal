import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';
import './App.css'; // agrega los estilos aquí
import ProductCarousel from './components/ProductCarousel';

function App() {
  return (
    <div>
      <Header />
      <div className="main-content-wrapper">
        <Hero />
        <ProductCarousel/>
        <About />
        <Services />
        <BMICalculator />
        <Testimonials />
        <Contact />

      </div>
      <Footer />
    </div>
  );
}

export default App;
