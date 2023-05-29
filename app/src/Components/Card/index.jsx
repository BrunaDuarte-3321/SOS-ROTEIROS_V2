
import React from 'react';
import { Link } from 'react-router-dom';
 
import './style.css';

const Card = ({ nome, descricao, img, id_roteiro }) => {
  return (
    <>
    <li className="card-group">
      <div class="card shadow">
        <Link to={`/roteiro/${id_roteiro}`}>
          <img src={img} alt="" />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{nome}</h5>
          <p class="card-text">{descricao}</p>
          
        </div>
      </div>
    </li>
    </>
    
  );
};

export default Card;


