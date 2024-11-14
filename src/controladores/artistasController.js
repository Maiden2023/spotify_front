// src/controladores/artistasController.js
import { getArtistasByGenero } from '../servicios/api';


export const fetchArtistasByGenero = async (generoId, setArtistas) => {
  try {
    const artistas = await getArtistasByGenero(generoId);
    setArtistas(artistas);
  } catch (error) {
    console.error('Error fetching artists in controller:', error);
  }
};
