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
            className="img-fluid "
            style={{ height: "70%" }}
            width={600}
            height={600}
            src={data.image}
            alt={data.alt}
          />
          <Figure.Caption
            as="h1"
            className="text-white text-center"
            style={{ height: "30%" }}
          >
            {data.title}
          </Figure.Caption>
        </Figure>
      </Link>
    </>
  );
};

export default Noticia;
