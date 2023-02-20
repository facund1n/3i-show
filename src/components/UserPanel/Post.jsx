import { Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// 1.3

const Post = ({ data }) => {
  return (
    <>
      <ListGroup.Item className="mb-1 bg-dark" border="black">
        <Row xs={1} md={5} lg={5}>
          <Col>
            <img
              variant="top"
              style={{ height: "120px", width: "150px" }}
              src={data.image}
              alt={data.alt}
            />
          </Col>
          <Col className="text-justify">
            <b>Título:</b>
            <h6>{data.title}</h6>
            <b>Sub-título:</b>
            <h6>{data.subtitle}</h6>
          </Col>

          <Col className="text-end">
            <Link
              to={`/articulos/destacados/${data._id}`}
              style={{ textDecoration: "inherit" }}
              className="f-yellow"
            >
              Ver Post
            </Link>
          </Col>
          <Col className="text-end">
            <span>Editar</span>
          </Col>
          <Col className="text-end">
            <span>Borrar</span>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default Post;
