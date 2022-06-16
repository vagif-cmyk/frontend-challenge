import React from 'react';

const Warning = ({ text, className }) => {

  return (
    <div className={className}>
      {text}
    </div>
  );
};


export default Warning;