import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Routes></Routes> */}
        {/* <Route path="/" element={}></Route> */}
        <App />
      
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
