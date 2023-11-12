import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import { useContext } from "react";
import { ContexApi } from "../context/ContextApi";

const CardTarget = ({ id, imagen, title, option }) => {
  const { agregarFavorito } = useContext(ContexApi);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = (id) => {
    setIsFavorite(!isFavorite);
    agregarFavorito(id);
    console.log("el id es: " + id);
  };

  return (
    <div>
      {option ? (
        <Card key={id} className="card">
          <Badge bg="transparent" className="card__button">
            <div onClick={() => handleFavoriteClick(id)}>
              <FaHeart
                className={`corazon ${isFavorite ? "corazon__rojo" : ""}`}
              />
            </div>
          </Badge>
          <Card.Img className="card__img" variant="top" src={imagen} />
          <Card.Body>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card key={id} className="card">
          <Card.Img className="card__img" variant="top" src={imagen} />
          <Card.Body>
            <Card.Text>{title}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default CardTarget;
