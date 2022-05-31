import React from 'react';

const HeaderItem = ({ className, text }) => {

  return (
    <li className={className}>
      {text}
    </li>
  );
};


export default HeaderItem;