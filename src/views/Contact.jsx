import ContactForm from "../components/Forms/ContactForm";
import StickyNav from "../components/NavBars/StickyNav";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <StickyNav />
      <Container className="flex-column justify-content-center align-items-center mt-5 min-vh-100 b-black">
        <ContactForm />
        <Footer />
      </Container>
    </>
  );
};

export default Contact;
