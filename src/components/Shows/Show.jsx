import { Card } from "react-bootstrap";
/* import { Link } from "react-router-dom"; */

// 3

const Show = ({ show }) => {
  return (
    <>
      <Card bg="dark" border="black" className="mb-2" style={{ height: "95%" }}>
        <Card.Img src={show.image} alt={show.alt} style={{ height: "50%" }} />
        <Card.Body>
          <Card.Text>
            {show.title}
            <br />
            {show.subtitle}
          </Card.Text>
          <hr />
          <Card.Text>
            <span>Tickets en:</span>
            <br />
            <a href={show.ticketsUrl} className="f-yellow">
              {show.ticketsUrl}
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Show;
