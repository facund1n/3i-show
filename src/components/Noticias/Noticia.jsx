import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Noticia = ({ noticia }) => {
  return (
    <>
      <Link
        to={`noticias/${noticia._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Card
          className="bg-dark border-yellow links mb-2"
          style={{ height: "95%" }}
        >
          <Card.Img
            src={noticia.imageLg}
            alt={noticia.altLg}
            style={{ height: "100%" }}
          />
          <Card.ImgOverlay className="text-end align-self-end">
            <div className="fade-black ">
              <Card.Title>{noticia.title}</Card.Title>
              <Card.Text>{noticia.description}</Card.Text>
            </div>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </>
  );
};

export default Noticia;
