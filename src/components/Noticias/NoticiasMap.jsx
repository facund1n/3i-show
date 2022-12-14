import { useState, useEffect } from "react";
import Loader from "../Loader";

import NoticiasGrid from "./NoticiasGrid";

// 1.1

const NoticiasMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("http://localhost:4000/articulos/noticias/")
      .then((res) => res.json())
      .then((json) => setData(json))
      .then(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <NoticiasGrid data={data} />}</>;
};

export default NoticiasMap;
