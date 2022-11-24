// SE DEBERÁ USAR ROUTER, DE MOMENTO MOCKEAMOS

import { Container } from "react-bootstrap";

const Social = () => {
  return (
    <Container className="d-flex justify-content-center my-1">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img
          alt="logo"
          src="/img/fb.png"
          height="40px"
          className="d-inline-block align-top"
        />
      </a>{" "}
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img
          alt="logo"
          src="/img/ig.png"
          height="40px"
          className="d-inline-block align-top mx-2"
        />
      </a>{" "}
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <img
          alt="logo"
          src="/img/tw.png"
          height="40px"
          className="d-inline-block align-top"
        />
      </a>
    </Container>
  );
};

export default Social;
