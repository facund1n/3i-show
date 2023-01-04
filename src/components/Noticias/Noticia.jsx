import { Figure } from "react-bootstrap";
import { Link } from "react-router-dom";

// 1.3

const Noticia = ({ data }) => {
  return (
    <>
      <Link
        to={`/articulos/noticias/${data._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Figure
          className="bg-dark border-yellow links p-1 border-black"
          style={{ height: "95%" }}
        >
          <Figure.Image
            className="img-fluid"
            height={"50%"}
            src={data.image}
            alt={data.alt}
          />
          <Figure.Caption className="text-white text-center">
            <h6>{data.title}</h6>
          </Figure.Caption>
        </Figure>
      </Link>
    </>
  );
};

export default Noticia;
