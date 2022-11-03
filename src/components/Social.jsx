// SE DEBERÁ USAR ROUTER, DE MOMENTO MOCKEAMOS

import { Container } from "react-bootstrap";

const Social = () => {
  return (
    <Container className="d-flex justify-content-center my-1">
      <img
        alt="logo"
        src="/img/fb.png"
        height="40px"
        className="d-inline-block align-top"
      />{" "}
      <img
        alt="logo"
        src="/img/ig.png"
        height="40px"
        className="d-inline-block align-top mx-2"
      />{" "}
      <img
        alt="logo"
        src="/img/tw.png"
        height="40px"
        className="d-inline-block align-top"
      />
    </Container>
  );
};

export default Social;
