import React from 'react';

const Image = ({ src, className, alt }) => {

  return (
    <div>
      <img className={className} src={src} alt={alt} />
    </div>
  );
};


export default Image;