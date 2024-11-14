// App.js
import React, { useState } from 'react';
import BarraLateral from './componentes/BarraLateral';
import ListaGeneros from './componentes/ListaGeneros';
import ListaArtistas from './componentes/ListaArtistas';
import ListaAlbums from './componentes/ListaAlbums';
import ListaCanciones from './componentes/ListaCanciones';
import Buscar from './componentes/Buscar';

import './App.css';

const App = () => {
  const [vista, setVista] = useState('inicio');
  const [generoId, setGeneroId] = useState(null);
  const [artistaId, setArtistaId] = useState(null);
  const [albumId, setAlbumId] = useState(null);

  const mostrarInicio = () => {
    setVista('inicio');
    setGeneroId(null);
    setArtistaId(null);
    setAlbumId(null);
  };

  const mostrarBuscar = () => {
    setVista('buscar');
    setGeneroId(null);
    setArtistaId(null);
    setAlbumId(null);
  };

  return (
    <div className="app">
      <BarraLateral onInicioClick={mostrarInicio} onBuscarClick={mostrarBuscar} />
      <div className="contenido-principal">
        {vista === 'inicio' && !generoId && !artistaId && !albumId && (
          <ListaGeneros onGeneroSeleccionado={setGeneroId} />
        )}
        {vista === 'inicio' && generoId && !artistaId && (
          <ListaArtistas generoId={generoId} onArtistaSeleccionado={setArtistaId} />
        )}
        {vista === 'inicio' && artistaId && !albumId && (
          <ListaAlbums artistaId={artistaId} onAlbumSeleccionado={setAlbumId} />
        )}
        {vista === 'inicio' && albumId && (
          <ListaCanciones albumId={albumId} />
        )}
        {vista === 'buscar' && <Buscar />}
      </div>
    </div>
  );
};

export default App;
