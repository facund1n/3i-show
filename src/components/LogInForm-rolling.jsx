import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap/";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const LogInForm = () => {
  // debe recibir props dentro de ()
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [showMessage, setShowMessage] = useState("");

  const [firstMail, setFirstMail] = useState(true);
  const [firstPassword, setFirstPassword] = useState(true);

  const saveMail = (e) => {
    setMail(e.target.value);
  };
  const validateMail = (m) => {
    return validator.isEmail(m);
  };

  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  const validatePassword = (p) => {
    return validator.isStrongPassword(p);
  };

  useEffect(() => {
    if (showMessage) {
      toast.success(`Compra exitosa! ID ${showMessage}`);
    }
  }, [showMessage]);

  const handleSubmit = () => {
    if (validateMail(mail) && validatePassword(password)) {
      const validationData = { mail: mail, password: password };

      fetch("http://localhost:4000/login", {
        // ver
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationData),
      })
        .then((res) => res.json())
        .then((json) => setShowMessage(json.id));
      // TODO Agregar finally luego del the para que se resetee el carrito.
      // TODO Agregar (tambien en el finally) una redireccion DENTRO de React en un setTimeOut para que quede esperando un minimo tiempo y no sea tan brusca
    } else {
      setFirstMail(false);
      setFirstPassword(false);
      console.log("login no exitoso");
    }
  };

  return (
    <>
      <ToastContainer />
      <h2>Iniciar Sesión</h2>
      <hr />
      <Form className="mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Ingrese e-mail
            {!validateMail(mail) && !firstMail && (
              <span className="m-2 text-danger">Ingrese Mail Válido</span>
            )}
          </Form.Label>
          <Form.Control
            className={
              !validateMail(mail) && !firstPassword && "border-danger border-2"
            }
            type="email"
            placeholder="ejemplo@dominio.com"
            onBlur={() => setFirstMail(false)}
            onChange={(e) => saveMail(e)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            Ingrese contraseña
            {!validatePassword(password) && !setFirstPassword && (
              <span className="text-danger">
                Una mayúscula y un carácter especial
              </span>
            )}
          </Form.Label>
          <Form.Control
            className={
              !validatePassword(password) &&
              !setFirstPassword &&
              "border-danger border-2"
            }
            type="password"
            placeholder="Contraseña"
            onBlur={() => setFirstPassword(false)}
            onChange={(e) => savePassword(e)}
          />
        </Form.Group>

        <div className="d-grid gap-2 mb-2">
          <Button
            variant="warning"
            type="submit"
            onClick={() => handleSubmit()}
          >
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
    </>
  );
};

export default LogInForm;
