// src/componentes/ListaAlbums.js
import React, { useEffect, useState } from 'react';
import { getAlbumsByArtist } from '../servicios/api';
import '../estilos/ListaAlbums.css';

const ListaAlbums = ({ artistaId, onAlbumSeleccionado }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const obtenerAlbums = async () => {
      try {
        const albumsData = await getAlbumsByArtist(artistaId);
        setAlbums(albumsData);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    if (artistaId) {
      obtenerAlbums();
    }
  }, [artistaId]);

  return (
    <div className="lista-albums">
      <h2>Álbumes</h2>
      {albums.length > 0 ? (
        albums.map((album) => (
          <div
            key={album.id}
            className="album"
            onClick={() => onAlbumSeleccionado(album.id)} // Actualiza el albumId al hacer clic
          >
            <img src={`http://localhost:4000/${album.imagen}`} alt={album.titulo} />
            <p>{album.titulo}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron álbumes para este artista.</p>
      )}
    </div>
  );
};

export default ListaAlbums;
