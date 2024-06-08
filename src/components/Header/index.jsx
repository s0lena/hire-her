import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css';
import '../../global.css';
import { useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState('');

  const handleLinkClick = (link) => {
    setActive(link);
  };

  return (
    <header>
      <img className="logo" src="/logo.svg"/>
      <nav>
        <Link
          to="/"
          className={active === '/' ? 'active' : ''}
          onClick={() => handleLinkClick('/')}
        >
          homepage
        </Link>
        <span> | </span>
        <Link
          to="/employer-section"
          className={active === '/employer-section' ? 'active' : ''}
          onClick={() => handleLinkClick('/employer-section')}
        >
          for employers
        </Link>
        <span> | </span>
        <Link
          to="/employee-section"
          className={active === '/employee-section' ? 'active' : ''}
          onClick={() => handleLinkClick('/employee-section')}
        >
          for employees
        </Link>
        <span> | </span>
        <Link
          to="/test-your-company"
          className={active === '/test-your-company' ? 'active' : ''}
          onClick={() => handleLinkClick('/test-your-company')}
        >
          test your company
        </Link>
        <span> | </span>
        <Link
          to="/interview"
          className={active === '/interview' ? 'active' : ''}
          onClick={() => handleLinkClick('/interview')}
        >
          interview simulator
        </Link>
      </nav>
    </header>
  );
};
