import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Card = ({ nome, descricao, img, quantidadeDias, id_roteiro }) => {
  return (
    <li className="card-group">
      <div class="card shadow">
        <Link to={`/roteiro/${id_roteiro}`}>
          <img src={img} alt="" />
        </Link>
        <div class="card-body">
          <h5 class="card-title">{nome}</h5>
          <p class="card-text">{descricao}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
