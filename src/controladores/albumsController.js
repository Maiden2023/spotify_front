// src/controladores/albumsController.js
import {  getCancionesByAlbum } from '../servicios/api';

export const fetchAlbumsByArtist = async (artistaId) => {
  const url = `http://localhost:4000/album/artista/${artistaId}`;
  console.log('URL de solicitud:', url); // Esto imprimirá la URL

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Datos de respuesta:', data); // Imprime los datos obtenidos
    return data.data; // Asegúrate de devolver solo los datos necesarios
  } catch (error) {
    console.error('Error fetching albums:', error);
    return [];
  }
};


export const fetchCancionesByAlbum = async (albumId) => {
  try {
    const canciones = await getCancionesByAlbum(albumId);
    return canciones || [];
  } catch (error) {
    console.error('Error fetching songs in controller:', error);
    return []; // Devuelve un array vacío en caso de error
  }
};
