import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>¿Listo para empezar tu cambio?</h2>
        <p>Contáctanos hoy y recibe una consulta gratuita con uno de nuestros entrenadores.</p>
        <a href="https://wa.me/521000000000" target="_blank" rel="noopener noreferrer">
          <button>Escríbenos por WhatsApp</button>
        </a>
      </div>
      <img
        src="/assets/img/contacto-entrenador.jpg"
        alt="Contacto entrenador"
        className="contact-image"
      />
    </section>
  );
}

export default Contact;
