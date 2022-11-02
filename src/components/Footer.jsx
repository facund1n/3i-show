import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="mt-auto py-4 text-center"
        style={{
          backgroundImage: "linear-gradient(to top, #121212 , transparent )",
        }}
      >
        <Row>
          <Col>
            <img
              alt="logo"
              src="/img/logo.ico"
              className="d-inline-block align-top m-auto"
            />
          </Col>
          <Col>
            <h4>BLOG SHOW - Todos los derechos reservados</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
