import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Social from "../Social";

function StickyNav() {
  return (
    <Navbar
      /* className="b-grey" */
      className="b-grey"
      expand="lg"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="https://tinypic.host/images/2022/12/14/logoe2de43a3ad4e2821.png"
            height="20px"
            className="d-block m-0 p-0"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/" className="f-yellow">
              HOME
            </Nav.Link>
            <NavDropdown
              title="CATEGORÍAS"
              id="basic-nav-dropdown"
              className="b-grey"
            >
              <NavDropdown.Item href="#action/3.1">
                <Nav.Link href="/articulos/destacados">DESTACADOS</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Nav.Link href="/articulos/noticias">NOTICIAS</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Nav.Link href="/fotos">FOTOS</Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                <Nav.Link href="/shows">SHOWS</Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacto" className="f-yellow">
              CONTACTO
            </Nav.Link>{" "}
            <Nav.Link href="/busqueda" className="f-yellow">
              Buscar
            </Nav.Link>
            <Social />
          </Nav>
          <Form className="d-flex"></Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StickyNav;
