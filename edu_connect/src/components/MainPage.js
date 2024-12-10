import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import Header from './Header';
import logo from '../images/logo.png';

function MainPage() {
  return (
    <div className="main-page">

{/* Контейнер с закруглением на главной странице */}
<div className="main-page__container">
  {/* Левая половина с логотипом */}
  <div className="main-page__left">
    <img src={logo} alt="Логотип" className="main-page__logo" />
  </div>
  
  {/* Центральная секция для названия и кнопки */}
  <div className="main-page__center">
    <h1 className="main-page__title">EduConnect</h1>
    <button className="join-button">Присоединиться</button>
  </div>
  
  {/* Правая половина (можно добавить дополнительный контент) */}
  <div className="main-page__right">
    {/* Здесь можно добавить дополнительный контент */}
  </div>
</div>



  
      {/* <section className="advantages">
        <div className="container">
          <h2 className="title-black title-center">Почему крысы?</h2>
          <div className="advantages__wrapper">
            <div className="advantages__content">
              
              <div className="advantages__descr">
                Крысы дружелюбны и общительны, они легко обучаются и могут стать вашими верными друзьями.
              </div>
            </div>

            <div className="advantages__content">
             
              <div className="advantages__descr">
                Они активны и любят играть, поэтому вы не заскучаете вместе с ними.
              </div>
            </div>

            <div className="advantages__content">
              
              <div className="advantages__descr">
                Крысы очень чистоплотны и ухожены, их легко содержать в домашних условиях.
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="history">
        <h2 className="title-white title-center">Немного истории</h2>
        <div className="history__content">
          <div className="history__descr">
            Милые, ласковые и ручные декоративные крысы произошли от обычных диких серых крыс...
            <br />
            <img src={require('../images/lapki2.png')} alt="Следы" className="history__descr__item" />
            <br />
            Часть особей использовалась в качестве подопытных животных...
          </div>
        </div>
      </section>

     
      <section className="contain">
        <div className="container">
          <h2 className="title-black title-center">Содержание крыс</h2>
          <div className="contain__wrapper">
            <div className="contain__img">
              <img src={require('../images/Group1.png')} alt="Крысы" />
            </div>
            <div className="contain__img">
              <img src={require('../images/Group2.png')} alt="Крысы" />
            </div>
            <div className="contain__img-2">
              <img src={require('../images/Group9.png')} alt="Крысы" />
            </div>
            <div className="contain__content">
              <div className="contain__descr">
                Поскольку крысы являются социальными животными...
              </div>
            </div>
            <div className="contain__img-3">
              <img src={require('../images/Group9.png')} alt="Крысы" />
            </div>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <h2 className="title-black title-center">А как вы относитесь к крысам?</h2>
            <div className="footer__descr">
              Пройдите опрос для того, чтобы мы понимали, что вы хотите видеть на нашем сайте.
            </div>
            <a href="https://docs.google.com/forms/d/1ESlOaeqB9uyIPoz2lhV2ehshmNv72Jys72ZKHT-ecMU/edit">
              <button className="footer__btn">ОПРОС</button>
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default MainPage;
