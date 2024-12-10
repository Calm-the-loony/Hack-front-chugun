import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="header__nav">
            <li>
              <Link to="/" className="header__link_active">главная</Link>
            </li>
            <li>
              <Link to="/profile" className="header__link">мой профиль</Link>
            </li>
            <li>
              <Link to="/vacancies" className="header__link">вакансии</Link>
            </li>
            <li>
              <Link to="/courses" className="header__link">курсы</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
