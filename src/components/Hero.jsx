import './Hero.css';
import mrFrankImg from '../assets/img/MrFrank.png';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transforma tu cuerpo</h1>
        <p>Entrena con un preparador con más de 35 años en la industria del culturismo</p>
        <button>Contáctanos</button>
      </div>
      <img
        src={mrFrankImg}
        alt="Entrenador principal"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
