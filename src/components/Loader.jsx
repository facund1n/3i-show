import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner animation="border" variant="warning" className="m-auto p-5" />
      <span className="m-auto">cargando...</span>
    </>
  );
};

export default Loader;
