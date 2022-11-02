/* logo + social icons + búsqueda (búsqueda debe arrojar resultados al hacer enter o click en el botón de buscar, redireccionando a una página de resultados) */

import { Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid>
      <div className="d-flex justify-content-end">
        <Nav.Link href="#action1">Iniciar Sesión</Nav.Link>
        {"~"}
        <Nav.Link href="#action2">Registrate</Nav.Link>
      </div>
    </Container>
  );
};

export default Header;
