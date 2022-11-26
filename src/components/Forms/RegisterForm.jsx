import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { FormSuccess, FormError } from "../Common";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "mínimo 2 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
  email: yup.string().email("Ingrese email válido").required("Requerido"),
  password: yup
    .string()
    .min(8, "mínimo 8 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
  password2: yup
    .string()
    .min(8, "mínimo 8 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido")
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden"),
});

export default function RegisterForm() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ...data } = values;

    const response = await axios
      .post("http://localhost:4000/users/register", data)
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
        window.location.reload();
      }, 3500);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password2: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="py-2">
      <h3>REGISTRO</h3>
      <hr />
      {!error && <FormSuccess>{success ? success : ""}</FormSuccess>}
      {!success && <FormError>{error ? error : ""}</FormError>}
      <Form.Group className="mb-3">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="f-yellow mt-1">{formik.errors.name}</div>
        ) : null}
      </Form.Group>
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
      <Form.Group className="mb-3">
        <Form.Label>Contraseña:</Form.Label>
        <Form.Control
          id="password"
          name="password"
          type="password"
          placeholder="mínimo 8 máximo 30"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="f-yellow mt-1">{formik.errors.password}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Repita Contraseña:</Form.Label>
        <Form.Control
          id="password2"
          name="password2"
          type="password"
          placeholder="Repita contraseña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password2}
        />
        {formik.touched.password2 && formik.errors.password2 ? (
          <div className="f-yellow mt-1">{formik.errors.password2}</div>
        ) : null}
      </Form.Group>
      <div className="d-grid gap-2 mb-2 f-black">
        <Button type="submit" variant="warning">
          <strong className="f-black">REGISTRO</strong>
        </Button>
      </div>
      <hr />
      <Link to="/login" className="f-yellow">
        <span className="f-yellow">¿YA estás registrado? dame click !</span>
      </Link>
    </Form>
  );
}
