// src/controladores/generosController.js
import { getGeneros } from '../servicios/api'; // Asegúrate de que esta ruta sea correcta

export const fetchGeneros = async (setGeneros) => {
  try {
    const generos = await getGeneros();
    setGeneros(generos);
  } catch (error) {
    console.error('Error fetching genres in controller:', error);
  }
};
