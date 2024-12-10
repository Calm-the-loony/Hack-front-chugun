import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import Header from './Header';
import logo from '../images/logo.png';
import Group11 from '../images/Group 11.png';
import Group12 from '../images/Group 12.png';
import Group13 from '../images/Group13.png';
import Group19 from '../images/Group 19.png';
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import Logo3 from '../images/logo3.png';
import Logo4 from '../images/logo4.png';
import Logo5 from '../images/logo5.png';
import Logo6 from '../images/logo6.png';
import Logo7 from '../images/logo7.png';
import Logo8 from '../images/logo8.png';
import Logo9 from '../images/logo9.png';

function MainPage() {
  return (
    <div className="main-page">

{/* Контейнер с закруглением на главной странице */}
<div className="main-page__container">
        <div className="main-page__left">
          <img src={logo} alt="Логотип" className="main-page__logo" />
        </div>
        <div className="main-page__center">
          <h1 className="main-page__title">EduConnect</h1> {/* Изменяем кнопку на Link */} 
          <Link to="/register"> 
            <button className="join-button">Присоединиться</button> 
          </Link>
        </div>
      </div>

      {/* Секция "О платформе" */}
      <div className="about-section">
        <h2 className="about-section__title">О платформе</h2>
        <p className="about-section__description">
          "EduConnect" — это инновационная платформа для студентов, преподавателей и работодателей, 
          которая упрощает образовательный процесс и способствует успешному трудоустройству выпускников. 
          Наша цель — объединить ключевых участников образовательной среды в единую экосистему.
        </p>
      </div>

      {/* Секция функций платформы */}
      <section className="contain">
  <div className="container">
    <h2 className="title-black title-center">Функции платформы</h2>
    <div className="contain__wrapper">
      <div className="contain__img">
        <img src={Group11} alt="Создание профилей" />
        <div className="contain__text">Создание профилей для всех пользователей</div>
      </div>
      <div className="contain__img">
        <img src={Group12} alt="Онлайн-обучение" />
        <div className="contain__text">Организация онлайн-обучения</div>
      </div>
      <div className="contain__img">
        <img src={Group13} alt="Вакансии и стажировки" />
        <div className="contain__text">Поиск вакансий и стажировок для студентов</div>
      </div>
      <div className="contain__img">
        <img src={Group19} alt="Аналитика успеваемости" />
        <div className="contain__text">Рекомендации по успеваемости</div>
      </div>
    </div>
  </div>
</section>


<section className="partners-section">
  <div className="container">
    <div className="partners-wrapper">
      <h2 className="title-black title-center">Партнеры</h2>
      <div className="partners-cards">
        <div className="partners-card">
          <img src={Logo1} alt="Партнер 1" />
        </div>
        <div className="partners-card">
          <img src={Logo2} alt="Партнер 2" />
        </div>
        <div className="partners-card">
          <img src={Logo3} alt="Партнер 3" />
        </div>
        <div className="partners-card">
          <img src={Logo4} alt="Партнер 4" />
        </div>
        <div className="partners-card">
          <img src={Logo5} alt="Партнер 5" />
        </div>
        <div className="partners-card">
          <img src={Logo6} alt="Партнер 6" />
        </div>
        <div className="partners-card">
          <img src={Logo7} alt="Партнер 7" />
        </div>
        <div className="partners-card">
          <img src={Logo8} alt="Партнер 8" />
        </div>
        <div className="partners-card">
          <img src={Logo9} alt="Партнер 9" />
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
}

export default MainPage;
