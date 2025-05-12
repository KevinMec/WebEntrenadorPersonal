import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} MR. Frank Suplementos. Todos los derechos reservados.</p>
      <div className="socials">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://wa.me/521000000000" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </footer>
  );
}

export default Footer;
