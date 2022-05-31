import React from 'react';
import HeaderList from './HeaderList.jsx';

const Header = ({ className }) => {

  return (
    <header className={className} >
      <HeaderList className='header__list'/>
    </header>
  );
};


export default Header;