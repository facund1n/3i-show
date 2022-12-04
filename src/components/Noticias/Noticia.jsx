import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

// 1.3

const Noticia = ({ noticia }) => {
  return (
    <>
      <Link
        to={`/articulos/noticias/${noticia._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Figure
          className="bg-dark border-yellow links p-1 border-black"
          style={{ height: "95%" }}
        >
          <Figure.Image
            className="img-fluid "
            style={{ height: "70%" }}
            width={600}
            height={600}
            src={noticia.image}
            alt={noticia.alt}
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
