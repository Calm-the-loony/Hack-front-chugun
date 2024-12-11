import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const location = useLocation(); // Получение текущего пути

  const isActive = (path) => location.pathname === path; // Проверка активности

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="header__nav">
            <li>
              <Link
                to="/"
                className={`header__link ${isActive("/") ? "header__link_active" : ""}`}
              >
                главная
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`header__link ${isActive("/profile") ? "header__link_active" : ""}`}
              >
                мой профиль
              </Link>
            </li>
            <li>
              <Link
                to="/vacancies"
                className={`header__link ${isActive("/vacancies") ? "header__link_active" : ""}`}
              >
                вакансии
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className={`header__link ${isActive("/courses") ? "header__link_active" : ""}`}
              >
                курсы
              </Link>
            </li>
            <li>
              <Link
                to="/forum"
                className={`header__link ${isActive("/forum") ? "header__link_active" : ""}`}
              >
                форум
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
