import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { FormSuccess, FormError } from "../Common";
import { useSignIn } from "react-auth-kit";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "mínimo 2 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
  email: yup.string().email("Ingrese email válido").required("Requerido"),
  message: yup
    .string()
    .min(20, "mínimo 20 carácteres")
    .max(300, "máximo 300 carácteres")
    .required("Requerido"),
});

export default function RegisterForm() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const singIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post("http://localhost:4000/users/login", values)
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
      Cookies.set("_userName", values.name);
      localStorage.setItem("userName", values.name);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h3>CONTACTO</h3>
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

      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <Form.Group className="mb-3">
        <Form.Label>E-mail:</Form.Label>
        <Form.Control
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@dominio.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="f-yellow mt-1">{formik.errors.email}</div>
        ) : null}
      </Form.Group>
      <Form.Group size="lg">
        <Form.Label>Mensaje:</Form.Label>
        <Form.Control
          id="message"
          name="message"
          as="textarea"
          rows={3}
          className="py-2 my-2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />{" "}
        {formik.touched.message && formik.errors.message ? (
          <div className="f-yellow mt-1">{formik.errors.message}</div>
        ) : null}
      </Form.Group>
      <div className="d-grid gap-2 mb-2 f-black">
        <Button type="submit" variant="warning">
          <strong className="f-black">ENVIAR</strong>
        </Button>
      </div>
      <hr />
    </Form>
  );
}
