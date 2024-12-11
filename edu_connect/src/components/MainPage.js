import React, { useState, useEffect } from 'react';
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
  const [isCookieModalVisible, setCookieModalVisible] = useState(true);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      setCookieModalVisible(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    setCookieModalVisible(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleCustomizeCookies = () => {
    setCookieModalVisible(false);
    //логика настройки cookies
  };

  return (
    <div className="main-page">
      {isCookieModalVisible && (
        <div className="cookie-modal">
          <div className="cookie-modal__content">
            <p>
              EduConnect обрабатывает файлы cookie. Они помогают нам делать этот сайт удобнее для пользователей. 
              Продолжая работу с сайтом <a href="http://educonnect.ru">http://educonnect.ru</a>, вы соглашаетесь с 
              обработкой файлов cookie вашего браузера. Однако вы можете запретить обработку некоторых типов файлов 
              cookie в настройках вашего браузера либо на странице «Уведомление об использовании файлов cookie».
            </p>
            <div className="cookie-modal__buttons">
              <button onClick={handleAcceptCookies} className="cookie-modal__button">
                Принять cookies
              </button>
              <button onClick={handleCustomizeCookies} className="cookie-modal__button">
                Настрою cookies сам
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Контейнер с закруглением на главной странице */}
      <div className="main-page__container">
        <div className="main-page__left">
          <img src={logo} alt="Логотип" className="main-page__logo" />
        </div>
        <div className="main-page__center">
          <h1 className="main-page__title">EduConnect</h1>
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

      {/* Секция партнеров */}
      <section className="partners-section">
        <div className="container">
          <div className="partners-wrapper">
            <h2 className="title-black title-center">Партнеры</h2>
            <div className="partners-cards">
              {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9].map((logo, index) => (
                <div className="partners-card" key={index}>
                  <img src={logo} alt={`Партнер ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
