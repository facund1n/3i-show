/* 
Home
Destacado
Contacto
Me gusta (debería agregarse un icono con la cantidad de favoritos que se agregan -badge-)
Icono de Contacto (icono a la derecha) que nos va a llevar al formulario de contacto.
  
Mobile:
    - logo + menú hamburguesa ( con buscador ) (referencia página la gaceta) */

import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import Social from "../Social";

function StickyNav() {
  return (
    <Navbar className="b-grey" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="/img/logo.png"
            height="20px"
            className="d-block m-0 p-0"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/#destacadoIndex">DESTACADOS</Nav.Link>
            <Nav.Link href="/#noticiasIndex">NOTICIAS</Nav.Link>
            <Nav.Link href="/#fotosIndex">FOTOS</Nav.Link>
            <Nav.Link href="/#showsIndex">SHOWS</Nav.Link>
            {/* ME GUSTA? PREGUNTAR*/}
            <Social /> {/* COMPONENTE SOCIAL */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Escribe algo..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">🔎</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNav;
