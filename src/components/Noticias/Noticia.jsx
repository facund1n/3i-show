import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Articles = ({ noticia }) => {
  return (
    <>
      <Link
        to={`noticias/${noticia._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Card className="my-1 bg-dark">
          <div style={{ height: "50%" }} variant="dark">
            <Card.Img
              variant="top"
              style={{ height: "230px" }}
              src={noticia.imageSm}
              alt={noticia.altSm}
            />
          </div>

          <div
            className="m-1 text-left"
            style={{ height: "230px" }}
            variant="dark"
          >
            <h4>{noticia.title}</h4>
            <article>{noticia.description}</article>
          </div>
        </Card>
      </Link>
    </>
  );
};

export default Articles;
