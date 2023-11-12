import CardTarget from "../components/CardComponet";
import { useContext } from "react";
import { ContexApi } from "../context/ContextApi";

const HomePage = () => {
  const { imagen } = useContext(ContexApi);
  const option = true

  return (
    <>
      {imagen && imagen.length > 0 ? (
        imagen.map((img) => (
          <CardTarget
            id={img.id}
            key={img.id}
            imagen={img.src.original}
            title={img.alt}
            heart={img.liked}
            option= {option}
          />
        ))
      ) : (
        <h1>Not found</h1>
      )}
    </>
  );
};

export default HomePage;
