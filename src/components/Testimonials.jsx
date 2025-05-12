import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Historias de Éxito</h2>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <img src="/assets/img/progress-1-Chase-.webp" alt="Chase" />
          <p>"Con la ayuda del equipo, bajé 10 kg y gané músculo. ¡Nunca me sentí mejor!"</p>
          <h4>- Chase</h4>
        </div>
        <div className="testimonial-card">
          <img src="/assets/img/progress-3-Marissa--scaled.jpg" alt="Marissa" />
          <p>"Lo que más me gustó fue el seguimiento constante. ¡Estoy feliz con los resultados!"</p>
          <h4>- Marissa</h4>
        </div>
        <div className="testimonial-card">
          <img src="/assets/img/progress-6-Thomas.jpeg" alt="Thomas" />
          <p>"Entrenar aquí me dio disciplina, salud y confianza en mí mismo."</p>
          <h4>- Thomas</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
