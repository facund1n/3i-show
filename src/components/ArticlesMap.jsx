import { useState, useEffect } from "react";
import Loader from "./Loader";

import ArticlesGrid from "./ArticlesGrid";

// consumo API

const ProductMap = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ArticlesGrid data={data} />}</>;
};

export default ProductMap;
