import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Transforma tu cuerpo</h1>
        <p>Entrena con un preparador con mas 35 años en la industria del culturismo</p>
        <button>Contáctanos</button>
      </div>
      <img
        src="/assets/img/MrFrank.png"
        alt="Entrenador principal"
        className="hero-image"
      />
    </section>
  );
}

export default Hero;
