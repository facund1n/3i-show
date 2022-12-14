import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// 3

const Show = ({ data }) => {
  return (
    <>
      <Link
        to={`/articulos/shows/${data._id}`}
        style={{ textDecoration: "inherit" }}
      >
        <Card
          bg="dark"
          border="black"
          className="mb-2 bg-dark links"
          style={{ height: "95%" }}
        >
          <Card.Img src={data.image} alt={data.alt} style={{ height: "50%" }} />
          <Card.Body>
            <Card.Text>
              {data.title}
              <br />
              {data.subtitle}
            </Card.Text>
            <hr />
            <Card.Text>
              <span>Tickets en:</span>
              <br />
              <a href={data.ticketsUrl} className="f-yellow">
                {data.ticketsUrl}
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Show;
