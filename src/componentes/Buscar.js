// Buscar.js
import React, { useState } from 'react';

const Buscar = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState({
    albums: [],
    artistas: [],
    canciones: [],
    generos: []
  });

  const handleBuscar = async () => {
    const response = await fetch(`http://localhost:4000/search?query=${query}`);
    const data = await response.json();
    setResultados(data);
  };

  return (
    <div>
      <h2>Buscar</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar álbumes, artistas, canciones o géneros"
      />
      <button onClick={handleBuscar}>Buscar</button>

      <div>
        <h3>Álbumes</h3>
        <ul>
          {resultados.albums.map((album) => (
            <li key={album.id}>{album.titulo}</li>
          ))}
        </ul>

        <h3>Artistas</h3>
        <ul>
          {resultados.artistas.map((artista) => (
            <li key={artista.id}>{artista.nombre}</li>
          ))}
        </ul>

        <h3>Canciones</h3>
        <ul>
          {resultados.canciones.map((cancion) => (
            <li key={cancion.id}>{cancion.titulo}</li>
          ))}
        </ul>

        <h3>Géneros</h3>
        <ul>
          {resultados.generos.map((genero) => (
            <li key={genero.id}>{genero.nombre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Buscar;
