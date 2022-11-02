import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="mt-auto py-4 text-center"
        style={{
          backgroundImage: "linear-gradient(to top, #2e2e2e, transparent)",
        }}
      >
        <Row lg={4} sm={3} xs={2} className="justify-content-center">
          <Col>
            <img alt="logo" src="/img/logo.ico" className="img-fluid" />
          </Col>
          <Col>
            <p>Condiciones de uso</p>
            <p>Política de privacidad</p>
          </Col>
          <Col>
            <Social />
          </Col>
        </Row>
        <p>copyright - 2022</p>
      </Container>
    </>
  );
};

export default Footer;
