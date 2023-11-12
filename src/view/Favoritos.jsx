import CardTarget from "../components/CardComponet";
import { useContext } from "react";
import { ContexApi } from "../context/ContextApi";

const Favoritos = () => {
  const { imagen, favoritos } = useContext(ContexApi);

  // Filtrar las imágenes que están en la lista de favoritos
  const imagenesFavoritas = imagen.filter((img) => favoritos.includes(img.id));
  const option = false;

  return (
    <>
      {imagenesFavoritas.length > 0 ? (
        imagenesFavoritas.map((img) => (
          <CardTarget
            key={img.id}
            imagen={img.src.original}
            title={img.alt}
            heart={img.liked}
            option = {option}
          />
        ))
      ) : (
        <h1>Not found</h1>
      )}
    </>
  );
};

export default Favoritos;
