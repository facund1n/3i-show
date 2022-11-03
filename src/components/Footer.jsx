import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";

const Footer = () => {
  return (
    <>
      <Container fluid className="mt-auto py-4 text-center gradient1">
        <Row lg={6} sm={3} xs={1} className="justify-content-center">
          <Col className="align-items-center">
            <img alt="logo" src="/img/logo.ico" className="img-fluid me-auto" />
          </Col>
          <Col>
            <Social />
            <p>Política de privacidad</p>
            <p>Condiciones de uso</p>
          </Col>
        </Row>
        <Row>
          <p>copyright - 2022</p>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
