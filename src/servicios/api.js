// src/servicios/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const getGeneros = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/genero`);
    return response.data;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
};

export const getArtistasByGenero = async (generoId) => {
  try {
    const response = await axios.get(`${BASE_URL}/genero/${generoId}/artista`);
    return response.data;
  } catch (error) {
    console.error('Error fetching artists by genre:', error);
    throw error;
  }
};



export const getAlbumsByArtist = async (artistId) => {
  try {
    const response = await axios.get(`${BASE_URL}/album/artista/${artistId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching albums by artist:', error);
    throw error;
  }
};

export const getCancionesByAlbum = async (albumId) => {
  try {
    const response = await axios.get(`${BASE_URL}/album/${albumId}/canciones`); // Asegúrate de que esta ruta sea correcta
    return response.data.data || []; // Asegura que accedas a `data`
  } catch (error) {
    console.error('Error fetching songs by album:', error);
    throw error;
  }
};
export const getTodasCanciones = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/cancion`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener todas las canciones:', error);
    throw error;
  }
};
