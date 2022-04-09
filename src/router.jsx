import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import Recife from './Components/Roteiros/Recife';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/roteiro/:id" element={<Recife />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Rotas;
