import { Routes, Route } from 'react-router-dom';
import Form from './Components/Cadastro';
import Main from './Components/Main';
import Recife from './Components/Roteiros/Recife';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/roteiro/:id" element={<Recife />} />
      <Route path="/" element={<Main />} />
      <Route path="/cadastro" element={<Form />} />
    </Routes>
  );
};

export default Rotas;
