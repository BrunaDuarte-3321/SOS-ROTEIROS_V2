import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import HeaderForm from '../../HeaderForm'
import './style.css';
import api from '../../../server/api';
import NavBar from '../../NavBar';
import Footer from '../../Footer';

const Recife = () => {
  const params = useParams();
  const [eventos, setEventos] = useState([]);
  useEffect(() => {
    api.get(`/roteiro/${params.id}/eventos`).then(({ data }) => {
      setEventos(data);
    });
  }, []);

  return (
    <>
      <NavBar />
    <HeaderForm/>

      <div className="title2 m-3 row justify-content-around">
        <h1 className="col mx-3">Guia de viagem</h1>
      </div>

      {eventos.map((evento) => {
        return (
          <>
            <div className="tab-content dia" id="pills-tabContent">
              <h2 className="m-5">
                <b >{evento.dia}° Dia</b>
              </h2>
              <div className="content">
                <div className="row item mb-5">
                  <div className="title mx-5">
                    <h3 className="mb-3 card-info">{evento.nome_eventos}</h3>
                  </div>
                  <div className="col mx-4 clearfix">
                    <div className="images-card">
                      <div className="img1">
                        <img
                          className="card-roteiro col-md-6 float-md-start mb-3 mx-md-3"
                          src={evento.foto_eventos}
                          alt=""
                        />
                      </div>
                      <div className="img2">{evento.percuso}</div>
                    </div>
                  </div>
                  <div className="col descricao">
                    <h4 className="mt-4 ">{evento.hora}</h4>
                    <p>{evento.descricao_eventos}</p>

                    <h3>{evento.duracao}</h3>
                    <div className="endereco">
                      <p>{evento.endereco}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </>
  );
};

export default Recife;
