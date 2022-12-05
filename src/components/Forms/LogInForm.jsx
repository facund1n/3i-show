import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { FormSuccess, FormError } from "../Common";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "mínimo 2 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
  password: yup
    .string()
    .min(8, "mínimo 8 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
});

export default function RegisterForm() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const singIn = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post("http://localhost:4000/login", values)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
        console.log("Error?", err.response.data.message);
      });
    if (response) {
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
      setInterval(() => {
        navigate("/");
        window.location.reload();
      }, 3500);
      singIn({
        token: response.data.token,
        expiresIn: 86400,
        tokenType: "Bearer",
        authState: { name: values.name },
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h3>LOGIN</h3>
      <hr />
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <Form.Group className="mb-3">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          id="name"
          name="name"
          type="text"
          placeholder="Jhon Doe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="f-yellow mt-1">{formik.errors.name}</div>
        ) : null}
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          placeholder="ingrese contraseña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="f-yellow mt-1">{formik.errors.password}</div>
        ) : null}
      </Form.Group>
      <div className="d-grid gap-2 mb-2 f-black">
        <Button type="submit" variant="warning">
          <strong className="f-black">INICIAR SESIÓN</strong>
        </Button>
      </div>
      <hr />
      <Link to={"/register"} className="f-yellow">
        <span className="f-yellow">
          NO estás registrado aún? haz click aquí
        </span>
      </Link>
      <br />
      <Link to={""} className="f-yellow">
        <span className="f-yellow">Olvidaste contraseña?</span>
      </Link>
    </Form>
  );
}
