import './Header.css';
import logo from '../assets/logos/logo.svg';

function Header() {
  return (
    <header className="site-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="brand-logo" />
        <div className="brand-text">
          <p>Química y suplementación,</p>
          <p>Para y por campeones.</p>
        </div>
      </div>

      <nav className="nav-menu">
        <a href="#about">Sobre nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#contact">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
