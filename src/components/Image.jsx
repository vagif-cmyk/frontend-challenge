import React, { useState } from 'react';
import HeartSVG from './HeartSVG.jsx';
import HeartRedSVG from './HeartRedSVG.jsx';

const Image = ({ src, alt }) => {

  const [heart, setHeart] = useState(<HeartSVG />);

  function clickHandler() {
    const catsUrl = localStorage.getItem('cat') !== null
      ? JSON.parse(localStorage.getItem('cat'))
      : [];

    if (heart.type.name === 'HeartSVG') {
      setHeart(<HeartRedSVG />);

      localStorage.setItem('cat', JSON.stringify([...catsUrl, src]));
    } 
    
    else if (heart.type.name === 'HeartRedSVG') {
      setHeart(<HeartSVG />);
      catsUrl.splice(catsUrl.indexOf(src), 1)
      localStorage.setItem('cat', JSON.stringify(catsUrl));
    }
  }

  return (
    <div className='cat-image' onClick={clickHandler}>
      <img className='cat' src={src} alt={alt} />
      <div className="heart-box">
        {heart}
      </div>
    </div>
  );
};


export default Image;