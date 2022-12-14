import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className="form-label">Name</label>
      <input className="form-control" type="text" name="user_name" />
      <label className="form-label">Email</label>
      <input className="form-control" type="email" name="user_email" />
      <label className="form-label">Message</label>
      <textarea className="form-control" name="message" />
      <input className="btn btn-warning" type="submit" value="Send" />
    </form>
  );
};

export default Contacto;
