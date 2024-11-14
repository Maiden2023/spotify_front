// src/componentes/ListaArtistas.js
import React, { useEffect, useState } from 'react';
import { getArtistasByGenero } from '../servicios/api';
import '../estilos/ListaArtistas.css';

const ListaArtistas = ({ generoId, onArtistaSeleccionado }) => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    const fetchArtistas = async () => {
      try {
        const data = await getArtistasByGenero(generoId);
        setArtistas(data);
      } catch (error) {
        console.error('Error al obtener los artistas:', error);
      }
    };
    fetchArtistas();
  }, [generoId]);

  return (
    <div className="lista-artistas">
      <h2>Artistas</h2>
      <div className="artistas">
        {artistas.map((artista) => (
          <div key={artista.id} className="artista" onClick={() => onArtistaSeleccionado(artista.id)}>
            <img src={`http://localhost:4000/${artista.imagen}`} alt={artista.nombre} />
            <p>{artista.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaArtistas;
