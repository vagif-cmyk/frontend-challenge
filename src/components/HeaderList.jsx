import React from 'react';
import HeaderItem from './HeaderItem.jsx';

const HeaderList = ({ showFavoriteCats, showAllCats, className }) => {
  return (
    <div className="header__container">
      <ul className={className}>
        <HeaderItem showAllCats={showAllCats} className='header__item header__item_active' text='Все котики' />
        <HeaderItem showFavoriteCats={showFavoriteCats} className='header__item' text='Любимые котики' />
      </ul>
    </div>
  );
};


export default HeaderList;