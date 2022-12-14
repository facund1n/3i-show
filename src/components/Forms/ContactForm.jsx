import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";

import * as yup from "yup";

const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
      "Solo letras, puede contener espacios solo entre nombres."
    )
    .min(2, "mínimo 2 carácteres")
    .max(30, "máximo 30 carácteres")
    .required("Requerido"),
  email: yup.string().email("ingrese email válido").required("Requerido"),
  message: yup
    .string()
    .min(10, "mínimo 10 carácteres")
    .max(250, "máximo 250 carácteres")
    .required("Requerido"),
});

const Contacto = () => {
  const form = useRef();

  const onSubmit = ({ resetForm }, e) => {
    emailjs
      .sendForm(
        "service_6hm8w9i",
        "template_aj0f2j2",
        form.current,
        "QFIIeepaaoYKhnhBR"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito.", result.text);
        },
        (error) => {
          alert("Mensaje no enviado.", error.text);
        }
      )
      .then(formik.resetForm());

    e.preventDefault();
  };

  // const sendEmail = (e) => {};
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
    <form ref={form} onSubmit={formik.handleSubmit}>
      <label className="form-label">Nombre</label>
      <input
        className="form-control"
        type="text"
        name="name"
        id="name"
        placeholder="John Doe"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="f-yellow mt-1">{formik.errors.name}</div>
      ) : null}
      <label className="form-label">e-mail</label>
      <input
        className="form-control"
        type="email"
        name="email"
        id="email"
        placeholder="ejemplo@dominio.com"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="f-yellow mt-1">{formik.errors.email}</div>
      ) : null}
      <label className="form-label">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        className="form-control mb-2"
        placeholder="escriba mensaje..."
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.message && formik.errors.message ? (
        <div className="f-yellow mt-1">{formik.errors.message}</div>
      ) : null}
      <input className="btn btn-lg btn-warning" type="submit" value="Enviar" />
    </form>
  );
};

export default Contacto;
