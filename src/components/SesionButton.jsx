import { Link } from "react-router-dom";

const SesionButton = () => {
  return (
    <div className="d-flex justify-content-end">
      <Link to="*" className="t-yellow m-1">
        Iniciar Sesión
      </Link>
      <div className="t-yellow m-1">{"|"}</div>
      <Link to="*" className="t-yellow m-1">
        Registo
      </Link>
    </div>
  );
};

export default SesionButton;
