/* 
Home
Destacado
Contacto
Me gusta (debería agregarse un icono con la cantidad de favoritos que se agregan -badge-)
Icono de Contacto (icono a la derecha) que nos va a llevar al formulario de contacto.
  
Mobile:
    - logo + menú hamburguesa ( con buscador ) (referencia página la gaceta) */

import { Container, Navbar } from "react-bootstrap";

function LogoNav() {
  return (
    <Navbar expand="lg" className="image">
      <Container>
        <Navbar.Brand className="ms-auto">
          <img
            alt="logo2"
            src="https://tinypic.host/images/2022/12/14/HMB.png"
            height="40px"
            className="d-inline-block align-top m-auto"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default LogoNav;
