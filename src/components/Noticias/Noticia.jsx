import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Noticia = ({ noticia }) => {
  return (
    <>
      <Link
        to={`noticias/${noticia._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Figure
          className="bg-dark border-yellow links p-1"
          style={{ height: "95%" }}
        >
          <Figure.Image
            className="img-fluid"
            style={{ height: "70%" }}
            width={600}
            height={600}
            src={noticia.imageLg}
            alt={noticia.altLg}
          />
          <Figure.Caption
            as="h1"
            className="text-white text-center"
            style={{ height: "30%" }}
          >
            {noticia.title}
          </Figure.Caption>
        </Figure>
      </Link>
    </>
  );
};

export default Noticia;
