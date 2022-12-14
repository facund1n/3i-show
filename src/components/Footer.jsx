import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Social from "./Social";

const Footer = () => {
  return (
    <>
      <Container className="py-4 text-center gradient1">
        <hr />
        <Row lg={4} md={4} sm={1} className="justify-content-center">
          <Col className="align-self-center">
            <img
              alt="logo"
              src="https://tinypic.host/images/2022/12/14/HMB.png"
              className="img-fluid me-auto"
            />
          </Col>
          <Col className="align-self-center ">
            <Link to="/articulos/destacados" className="f-yellow">
              Destacados
            </Link>
            <br />
            <Link to="/articulos/noticias" className="f-yellow">
              Noticias
            </Link>
            <br />
          </Col>
          <Col className="align-self-center ">
            <Link to="/articulos/shows" className="f-yellow">
              Shows
            </Link>
            <br />
            <Link to="/contacto" className="f-yellow">
              Contacto
            </Link>
          </Col>
          <Col className="align-self-center">
            <Social />
          </Col>
        </Row>
        <span>© copyright - 2022</span>
        <br />
        <span>Facundo Samuel Sanchez</span>
        <br />
        <a href="https://github.com/facund1n/" className="f-yellow">
          https://github.com/facund1n/
        </a>
      </Container>
    </>
  );
};

export default Footer;
