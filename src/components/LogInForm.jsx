import { Button, Form } from "react-bootstrap/";

function LogInForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Usuario o e-mail" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button variant="warning" type="submit">
          Inciar Sesión
        </Button>
      </div>
    </Form>
  );
}

export default LogInForm;
