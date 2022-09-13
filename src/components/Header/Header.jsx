import React from 'react';
import {BsBell} from 'react-icons/bs';
import './header.scss';

function Header() {
  return (
    <div className='header'>
      <label className='header-element'>3467 ₽</label>
      <label className='header-element'><BsBell/> username</label>
      <label className='header-element'>Выйти</label>
    </div>
  );
}

export default Header;
