import React from 'react';
import HeaderList from './HeaderList.jsx';

const Header = ({ showFavoriteCats, showAllCats, className }) => {
  return (
    <header className={className} >
      <HeaderList showFavoriteCats={showFavoriteCats} showAllCats={showAllCats} className='header__list' />
    </header>
  );
};


export default Header;