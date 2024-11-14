// src/componentes/ListaCanciones.js
import React, { useEffect, useState } from 'react';
import { getCancionesByAlbum } from '../servicios/api';
import '../estilos/ListaCanciones.css';

const ListaCanciones = ({ albumId }) => {
  const [canciones, setCanciones] = useState([]);

  useEffect(() => {
    const fetchCanciones = async () => {
      try {
        const data = await getCancionesByAlbum(albumId);
        setCanciones(data);
      } catch (error) {
        console.error('Error al obtener las canciones:', error);
      }
    };

    if (albumId) {
      fetchCanciones();
    }
  }, [albumId]);

  return (
    <div className="lista-canciones">
      <h2>Canciones</h2>
      {canciones.length > 0 ? (
        canciones.map((cancion) => (
          <div key={cancion.id} className="cancion">
            <p>{cancion.titulo}</p>
            <audio controls>
              <source src={`http://localhost:4000/cancion`} type="audio/pm3" />
              Tu navegador no soporta la reproducción de audio.
            </audio>
          </div>
        ))
      ) : (
        <p>No se encontraron canciones para este álbum.</p>
      )}
    </div>
  );
};

export default ListaCanciones;
