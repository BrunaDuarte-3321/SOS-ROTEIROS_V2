import React from 'react';
import './style.css';
import logo from '../../asset/img/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar d-flex justify-content-between p-5">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-item ">
          <Link className="nav-link" to="#">
            Nossa proposta
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cadastro">
            Cadastrar/Logar
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
