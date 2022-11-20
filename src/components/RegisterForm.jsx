import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      user: "",
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object({
      user: Yup.string()
        .min(2, "mínimo 2 carácteres")
        .max(30, "máximo 30 carácteres")
        .required("Requerido"),
      email: Yup.string().email("Ingrese email válido").required("Requerido"),
      password: Yup.string()
        .min(8, "mínimo 8 carácteres")
        .max(30, "máximo 30 carácteres")
        .required("Requerido"),
      password2: Yup.string()
        .min(8, "mínimo 8 carácteres")
        .max(30, "máximo 30 carácteres")
        .required("Requerido")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    }),
    //AQUÍ VA EL FECTH, METHOD: POST:
    onSubmit: (values) => {
      console.log("registrado");
      alert(JSON.stringify(values, null, 2));
      //LUEGO HACEMOS UN REDIRECT PARA MAIN
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <span>REGISTRO</span>
      <hr />
      <Form.Group className="mb-3">
        <Form.Label>Usuario:</Form.Label>
        <Form.Control
          id="user"
          name="user"
          type="text"
          placeholder="John Doe"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.user}
        />
        {formik.touched.user && formik.errors.user ? (
          <div className="f-yellow mt-1">{formik.errors.user}</div>
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
      {/* VER QUE ONDA CON EL PREVENT DEFAULT */}
      {/* VER QUE ONDA CON EL PREVENT DEFAULT */}
      {/* VER QUE ONDA CON EL PREVENT DEFAULT */}
      <div className="d-grid gap-2 mb-2 f-black">
        <Button type="submit" variant="warning">
          <strong className="f-black">REGISTRO</strong>
        </Button>
      </div>
      <hr />
      <Link className="f-yellow">
        <span className="f-yellow">¿YA estás registrado? dame click !</span>
      </Link>
    </Form>
  );
}

export default RegisterForm;
