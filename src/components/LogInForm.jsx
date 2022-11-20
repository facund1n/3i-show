// cheacar estructura y desctructuring de https://github.com/a-bianchi/rolling-codeschool-comisionI2/blob/master/lessons/39/src/components/FormularioTurno.js
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Ingrese email válido").required("Requerido"),
      password: Yup.string()
        .min(8, "mínimo 8 carácteres")
        .max(30, "máximo 30 carácteres")
        .required("Requerido"),
    }),
    //AQUÍ VA EL FECTH, METHOD: POST:
    onSubmit: (values) => {
      console.log("logeado");
      alert(JSON.stringify(values, null, 2));
      //LUEGO HACEMOS UN REDIRECT PARA MAIN
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <span>LOGIN</span>
      <hr />
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
          placeholder="ingrese contraseña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="f-yellow mt-1">{formik.errors.password}</div>
        ) : null}
      </Form.Group>
      {/* VER QUE ONDA CON EL PREVENT DEFAULT */}
      {/* VER QUE ONDA CON EL PREVENT DEFAULT */}
      {/* VER QUE ONDA CON EL PREVENT DEFAULT */}
      <div className="d-grid gap-2 mb-2 f-black">
        <Button type="submit" variant="warning">
          <strong className="f-black">INICIAR SESIÓN</strong>
        </Button>
      </div>
      <hr />
      <Link className="f-yellow">
        <span className="f-yellow">
          NO estás registrado aún? haz click aquí
        </span>
      </Link>
      <br />
      <Link className="f-yellow">
        <span className="f-yellow">Olvidaste contraseña?</span>
      </Link>
    </Form>
  );
};

export default LogInForm;
