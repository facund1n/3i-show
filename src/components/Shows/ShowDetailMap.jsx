import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import ShowDetail from "./ShowDetail";

// 2.1

const ShowDetailMap = ({ auth, userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  const params = useParams();

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/articulos/shows/${params.id}`)
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
        <ShowDetail data={data} auth={auth} userLogged={userLogged} />
      )}
    </>
  );
};

export default ShowDetailMap;
