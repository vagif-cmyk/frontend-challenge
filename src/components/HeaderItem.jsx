import React from 'react';

const HeaderItem = ({ showFavoriteCats, showAllCats, className, text }) => {

  return (
    <li onClick={showFavoriteCats ? showFavoriteCats : showAllCats} className={className}>
      {text}
    </li>
  );
};


export default HeaderItem;