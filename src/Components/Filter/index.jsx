import React from 'react';
import './style.css'

const Filter = () => {
  return (
    <section className="row filter shadow p-5">
      <div className="col-sm input-group mb-3">
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Destino</option>
          <option value="1">Recife</option>
          <option value="2">Salvador</option>
          <option value="3">Fortaleza</option>
        </select>
      </div>
      <div className="col-sm input-group mb-3">
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Dias</option>
          <option value="1">3</option>
          <option value="2">5</option>
          <option value="3">7</option>
        </select>
      </div>
      <div className="col-sm">
        <button>Buscar</button>
      </div>
    </section>
  );
};

export default Filter;
