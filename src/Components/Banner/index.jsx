import React from 'react';
import './style.css';

const Banner = ({ img, texto }) => {
  return (
    <div className="banner">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <blockquote className="blockquote">
        <h1>
          <em>{texto}</em>
        </h1>
      </blockquote>
    </div>
  );
};

export default Banner;
