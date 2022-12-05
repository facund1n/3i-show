import { Container, Form, Nav, Navbar } from "react-bootstrap";
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
            <Nav.Link href="/#destacadosIndex">DESTACADOS</Nav.Link>
            <Nav.Link href="/#noticiasIndex">NOTICIAS</Nav.Link>
            <Nav.Link href="/#fotosIndex">FOTOS</Nav.Link>
            <Nav.Link href="/#showsIndex">SHOWS</Nav.Link>
            <Nav.Link href="/contacto">CONTACTO</Nav.Link>
            <Social /> {/* redes sociales */}
          </Nav>
          <Form className="d-flex"></Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNav;
