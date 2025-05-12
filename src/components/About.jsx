import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>¿Quién soy yo?</h2>
        <p>
          Entrena con <strong>Francisco Javier Martínez Castañeda</strong>, un experto en preparar campeones del culturismo.
        </p>
        <p>
          <strong>Mr. Frank</strong>, transformara tu vida mediante entrenamiento personalizado, motivación constante y un enfoque realista hacia la salud y el bienestar.
        </p>
        <p>
          De la mano de un profesional con experiencia comprobada, alcanzarás tu mejor versión paso a paso.
        </p>
      </div>
      <img
        src="/assets/img/entrenador-cliente.jpg"
        alt="Entrenadora principal"
        className="about-image"
      />
    </section>
  );
}

export default About;
