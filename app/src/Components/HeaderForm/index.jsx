import React from 'react';
import './style.css';
import logo from '../../asset/img/logo.svg';
import banner from '../../asset/img/banner.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
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

      <div className="banner">
        <div className="imageBanner">
          <img src={banner} alt="" />
        </div>
        <blockquote className="blockquote p-4 ">
          <h1 className="herderForm">
            <em>Os melhores roteiros para você.</em>
          </h1>
        </blockquote>
      </div>
    </header>
  );
};

export default Header;
