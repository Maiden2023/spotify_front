// BarraLateral.js
import React from 'react';
import '../estilos/BarraLateral.css';

const BarraLateral = ({ onInicioClick, onBuscarClick }) => (
  <div className="barra-lateral">
    <h2>Spotify</h2>
    <ul>
      <li onClick={onInicioClick}>Inicio</li>
      <li onClick={onBuscarClick}>Buscar</li>
    </ul>
  </div>
);

export default BarraLateral;
