import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContexApi = createContext();

const ContextProvider = ({ children }) => {
  const [imagen, setImage] = useState([]);
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = nuevoId => {
    // Verificar si el nuevoId ya está en la lista de favoritos
    const esFavoritoExistente = favoritos.includes(nuevoId);

    if (esFavoritoExistente) {
      // Si el nuevoId ya está en la lista, eliminarlo
      setFavoritos(prevFavoritos => prevFavoritos.filter(id => id !== nuevoId));
    } else {
      // Si el nuevoId no está en la lista, agregarlo
      setFavoritos(prevFavoritos => [...prevFavoritos, nuevoId]);
    }
    console.log('los favoritos: ' + JSON.stringify(favoritos))
  };

  useEffect(() => {
    const getImage = async () => {
      const apiUrl = "./public/photos.json";

      try {
        const response = await axios.get(apiUrl);
        const data = response.data.photos;
        setImage(data);
      } catch (err) {
        console.log("Error al obtener datos del json:", err);
      }
    };

    getImage();
  }, []); 
console.log(imagen)



  return (
    <ContexApi.Provider value={{ imagen, setImage, favoritos, agregarFavorito }}>
      {children}
    </ContexApi.Provider>
  );
};

export default ContextProvider;
