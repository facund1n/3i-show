import { useState, useEffect } from "react";
import Loader from "../Loader";

import ShowsGrid from "./ShowsGrid";

// 1

const ShowsMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("http://localhost:4000/articulos/shows/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ShowsGrid data={data} />}</>;
};

export default ShowsMap;
