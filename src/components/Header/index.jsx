import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import '../../global.css';
import { useState } from 'react';
import hamburgerImage from './hamburger.svg';
import closeBar from './close-bar.svg';

export const Header = () => {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActive(link);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link to="/">
        <img className="logo" src="/logo.svg" />
      </Link>
      <button className="hamburger" onClick={toggleMenu}>
        <img src={menuOpen ? closeBar : hamburgerImage} />
      </button>
      <nav className={menuOpen ? 'menu-open' : ''}>
        <Link
          to="/"
          className={active === '/' ? 'active' : ''}
          onClick={() => handleLinkClick('/')}
        >
          homepage
        </Link>
        <Link
          to="/employer-section"
          className={active === '/employer-section' ? 'active' : ''}
          onClick={() => handleLinkClick('/employer-section')}
        >
          for employers
        </Link>
        <Link
          to="/employee-section"
          className={active === '/employee-section' ? 'active' : ''}
          onClick={() => handleLinkClick('/employee-section')}
        >
          for employees
        </Link>
        <Link
          to="/test-your-company"
          className={active === '/test-your-company' ? 'active' : ''}
          onClick={() => handleLinkClick('/test-your-company')}
        >
          test your company
        </Link>
        <Link
          to="/interview"
          className={`interview-button ${
            active === '/interview' ? 'active' : ''
          }`}
          onClick={() => handleLinkClick('/interview')}
        >
          interview simulator
        </Link>
      </nav>
    </header>
  );
};
