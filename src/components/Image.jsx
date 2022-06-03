import React from 'react';

const Image = ({ src, alt }) => {

  function clickHandler(){
    console.log('click');
  }

  return (
    <div className='cat-image'>
      <img className='cat' onClick={clickHandler} src={src} alt={alt} />
    </div>
  );
};


export default Image;