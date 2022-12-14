import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import NoticiaDetail from "./NoticiaDetail";

// 2.1

const NoticiaMap = ({ auth, userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/articulos/noticias/${params.id}`)
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NoticiaDetail data={data} auth={auth} userLogged={userLogged} />
      )}
    </>
  );
};

export default NoticiaMap;
