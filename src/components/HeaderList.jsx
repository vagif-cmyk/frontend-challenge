import React from 'react';
import HeaderItem from './HeaderItem.jsx';

const HeaderList = ({ className }) => {

  return (
    <div className="header__container">
      <ul className={className}>
        <HeaderItem className='header__item header__item_active' text='Все котики' />
        <HeaderItem className='header__item' text='Любимые котики' />
      </ul>
    </div>
  );
};


export default HeaderList;