import React from 'react';
import logoGooglePlay from '../../assets/img/logoGoogle-play.svg';
import logoAppStore from '../../assets/img/logoApp-store.svg';
import './footer.scss'

function Footer() {
  return (
    <footer className="page-footer">
    <div className="footer-copyright">
      <div className='copyright-text'>© 2001-{new Date().getFullYear()} ООО <a href='https://sweb.ru/'>«СпейсВэб»</a></div>
      <div className='copyright-text'>Все права защищены.</div>
      <div className='copyright-text'>Лицензия <a href='/'>№163230</a></div>
    </div>
    <div className="mobile-app">
      <div className='title-apps'>Скачать приложение</div>
      <div className='logo-apps'>
         <a className='logo-app' href='/'><img className='img-logo-app' src={logoGooglePlay} alt="google_play"/></a>
         <a className='logo-app' href='/'><img className='img-logo-app' src={logoAppStore} alt="app_store"/></a>
      </div>
    </div>
    <div className="contacts">
      <div className='contacts-text'><a href='/'>+7 (812) 334-12-22</a> (в Санкт-Петербурге)</div>
      <div className='contacts-text'><a href='/'>+7 (495) 663-16-12</a> (в Москве)</div>
      <div className='contacts-text'><a href='/'>+7 (800) 100-16-15</a> (бесплатно по России)</div>
    </div>
  </footer>
  );
}

export default Footer;
