import { Button, Form } from "react-bootstrap/";

import { Link } from "react-router-dom";

function LogInForm() {
  return (
    <Form className="my-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Usuario o e-mail" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <div className="d-grid gap-2 mb-2">
        <Button variant="warning" type="submit">
          Inciar Sesión
        </Button>
      </div>
      <Link>
        <div>NO estás registrado aún? haz click aquí</div>
      </Link>
      <Link>
        <div>Olvidaste contraseña?</div>
      </Link>
    </Form>
  );
}

export default LogInForm;
