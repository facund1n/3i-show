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
        <Card
          className="bg-dark border-yellow links mb-2"
          style={{ height: "95%" }}
        >
          <Card.Img
            src={noticia.imageLg}
            alt={noticia.altLg}
            style={{ height: "100%" }}
          />
          <Card.ImgOverlay className="border-black text-end">
            <Card.Title className="justify-content-end">
              {noticia.title}
            </Card.Title>
            <Card.Text className="justify-content-end">
              {noticia.description}
            </Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>

        {/* <Card className="mb-2 border-yellow links">
          <div variant="dark">
            <Card.Img
              variant="top"
              style={{ height: "230px" }}
              src={noticia.imageSm}
              alt={noticia.altSm}
            />
          </div>

          <div
            className="mt-2 text-center d-flex align-items-center"
            style={{ height: "200px" }}
            variant="dark"
          >
            <h4>{noticia.title}</h4>
             <article>{noticia.description}</article> 
          </div>
        </Card> */}
      </Link>
    </>
  );
};

export default Articles;
