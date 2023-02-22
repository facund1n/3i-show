import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { Success, Error } from "../Common";

import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  title: yup.string().required("Requerido"),
  subtitle: yup.string().required("Requerido"),
  body: yup.string().required("Requerido"),
  image: yup.string().required("Requerido"),
  alt: yup.string().required("Requerido"),
  category: yup.string().required("Requerido"),
  ticketsUrl: yup.string(),
});

export default function NewPost() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await axios
      .post("https://3i-show-api-node.vercel.app/articulos/new", values)
      .catch((err) => {
        if (err) setError(err.response.data.message);
        setSuccess(null);
        console.log("Error?", err.response.data.message);
      });
    if (response) {
      console.log("LLEGUË");
      setError(null);
      setSuccess(response.data.message);
      formik.resetForm();
      setInterval(() => {
        navigate("/users/admin");
        window.location.reload();
      }, 3000);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      body: "",
      image: "",
      alt: "",
      category: "destacados",
      ticketsUrl: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h3>EDITAR POST:</h3>
      <hr />
      {!error && <Success>{success ? success : ""}</Success>}
      {!success && <Error>{error ? error : ""}</Error>}
      <Form.Group className="mb-3">
        <Form.Label>Título</Form.Label>
        <Form.Control
          id="title"
          name="title"
          type="text"
          placeholder="Nombre artículo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="f-yellow mt-1">{formik.errors.title}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Sub-título</Form.Label>
        <Form.Control
          id="subtitle"
          name="subtitle"
          type="text"
          placeholder="Sub-título"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subtitle}
        />
        {formik.touched.subtitle && formik.errors.subtitle ? (
          <div className="f-yellow mt-1">{formik.errors.subtitle}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Cuerpo artículo</Form.Label>
        <Form.Control
          id="body"
          name="body"
          type="text"
          as="textarea"
          placeholder="Cuerpo artículo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
        />
        {formik.touched.body && formik.errors.body ? (
          <div className="f-yellow mt-1">{formik.errors.body}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL imágen</Form.Label>
        <Form.Control
          id="image"
          name="image"
          type="text"
          placeholder="URL imágen"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        {formik.touched.image && formik.errors.image ? (
          <div className="f-yellow mt-1">{formik.errors.image}</div>
        ) : null}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ALT imágen</Form.Label>
        <Form.Control
          id="alt"
          name="alt"
          type="text"
          placeholder="ALT imágen"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.alt}
        />
        {formik.touched.alt && formik.errors.alt ? (
          <div className="f-yellow mt-1">{formik.errors.alt}</div>
        ) : null}
      </Form.Group>
      <Form.Label>Categoría</Form.Label>
      <Form.Select
        aria-label="Default select example"
        className="mb-2"
        id="category"
        name="category"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.category}
      >
        <option value="destacados" className="f-black">
          Destacados
        </option>
        <option value="noticias" className="f-black">
          Noticias
        </option>
        <option value="shows" className="f-black">
          Shows
        </option>
      </Form.Select>

      <Form.Group className="mb-3">
        <Form.Label>URL Tickets (en caso que sea Show)</Form.Label>
        <Form.Control
          id="ticketsUrl"
          name="ticketsUrl"
          type="text"
          placeholder="URL tickets"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.ticketsUrl}
        />
        {formik.touched.ticketsUrl && formik.errors.ticketsUrl ? (
          <div className="f-yellow mt-1">{formik.errors.ticketsUrl}</div>
        ) : null}
      </Form.Group>
      <div className="d-grid gap-2 mb-2">
        <Button type="submit" variant="success">
          <strong>CREAR POST</strong>
        </Button>
      </div>
    </Form>
  );
}
