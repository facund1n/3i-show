import RegisterForm from "../components/Forms/RegisterForm";
import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <StickyNav />
      <Container className="d-flex flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <RegisterForm />
        <Footer />
      </Container>
    </>
  );
};

export default Register;
