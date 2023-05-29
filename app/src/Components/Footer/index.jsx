
import React from 'react';
import './style.css';
import logo from '../../asset/img/logo.svg';
import insta from '../../asset/img/instagram.png';
import face from '../../asset/img/facebook.png';
import twitter from '../../asset/img/twitter.png';
import whats from '../../asset/img/whatsapp.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-5">
      <div className="container-footer row justify-content-around ">
        <div className="col-md-4 mb-4 ">
          <a href="./index.html">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav className="col-md-4 footer">
          <ul className="nav-footer px-0">
            <li>
              <ul className="px-0 d-flex">
                <li>
                  <a href="#">
                    <img src={insta} alt="/" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={face} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={whats} alt="" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="footer2">
            <li>
              <a href="#">Nossa proposta</a>
            </li>

            <li>
              <Link to="/cadastro">Cadastrar/Logar</Link>
            </li>
          </ul>
          <p className="mt-4">© 2022 SOS Roteiros. All rights reserved.</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

