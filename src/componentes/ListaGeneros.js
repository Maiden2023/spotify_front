// src/componentes/ListaGeneros.js
import React, { useEffect, useState } from 'react';
import { getGeneros } from '../servicios/api';
import '../estilos/ListaGeneros.css';

const ListaGeneros = ({ onGeneroSeleccionado }) => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    const fetchGenerosData = async () => {
      try {
        const data = await getGeneros();
        console.log('Datos de géneros:', data); // Consola para verificar datos
        setGeneros(data);
      } catch (error) {
        console.error('Error al obtener los géneros:', error);
      }
    };
    fetchGenerosData();
  }, []);

  return (
    <div className="lista-generos">
      <h2>Géneros</h2>
      <div className="generos">
        {generos.map((genero) => (
          <div
            key={genero.id}
            className="genero"
            onClick={() => onGeneroSeleccionado(genero.id)}
          >
            <img
              src={`http://localhost:4000/${genero.imagen}`}
              alt={genero.nombre}
            />
            <p>{genero.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaGeneros;
