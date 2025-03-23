import React from 'react';
import ReactDOM from 'react-dom/client';
import Cadastro from './Components/Cadastro';

const cadastro = ReactDOM.createRoot(document.getElementById('cadastro'));
cadastro.render(
  <React.StrictMode>
    <Cadastro/>
  </React.StrictMode>
);
