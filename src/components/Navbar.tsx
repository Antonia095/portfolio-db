import { Link } from 'react-router-dom';
import iconeDB from '../assets/icone-db.png';
import iconeGitHub from '../assets/icone-github.png';
import iconeLinkedin from '../assets/icone-linkedin.png';
import '../styles/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="https://db.tec.br/" target="_blank" rel="noopener noreferrer">
        <img src={iconeDB} alt="Logo DB" className="logo-db" />
        </a>
      </div>

      <ul className="navbar-pages">
        <li><Link to="/">Sobre</Link></li>
        <li><Link to="/curriculo">Currículo</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
      </ul>

      <div className="navbar-social">
        <a href="https://github.com/Antonia095" target="_blank" rel="noopener noreferrer">
          <img src={iconeGitHub} alt="GitHub" className="navbar-icon" />
        </a>
        <a href="https://www.linkedin.com/in/antonia-j-silva/" target="_blank" rel="noopener noreferrer">
          <img src={iconeLinkedin} alt="LinkedIn" className="navbar-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
