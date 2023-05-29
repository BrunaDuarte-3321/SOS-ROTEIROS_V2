import { useState, useEffect } from 'react';
import Card from '../Card';
import NavBar from '../NavBar';
import './styele.css';
import api from '../../server/api';
import Banner from '../Banner';
import imgBanner from '../../asset/img/banner.png';
import Filter from '../Filter';
import Footer from '../Footer';

const Main = () => {
  const cidades = ['Recife', 'Fortaleza', 'Salvador'];
  const [roteiros, setRoteiros] = useState([]);
  useEffect(() => {
    api.get('/roteiros').then(({ data }) => {
      console.log(data);
      setRoteiros(data);
    });
  }, []);
  return (
    <div className="teste">
      <NavBar />
      <Banner img={imgBanner} texto="Os melhores destinos para você" />
      <Filter />

      <ul className="animes-list">
        {roteiros.map((rota) => {
          return (
            <>
              
              <Card
                nome={rota.nome_roteiro}
                descricao={rota.descricao_resumida}
                img={rota.foto_principal}
                quantidadeDias={rota.quantidade_dias}
                id_roteiro={rota.id_roteiro}
              />
            </>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Main;
