import { useState, useEffect } from "react";
import Loader from "../Loader";
import DestacadosComentariosGrid from "./DestacadosComentariosGrid";

const DestacadosComentariosMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("http://localhost:4000/destacadoscomentarios/all")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>{isLoading ? <Loader /> : <DestacadosComentariosGrid data={data} />}</>
  );
};

export default DestacadosComentariosMap;
