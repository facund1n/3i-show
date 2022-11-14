import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import NoticiaDetail from "./NoticiaDetail";

//muestra 1 solo producto por ID

const DestacadoMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/noticias/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  return <>{isLoading ? <Loader /> : <NoticiaDetail data={data} />}</>;
};

export default DestacadoMap;