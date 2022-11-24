import { useState, useEffect } from "react";
import Loader from "../Loader";
import Slider from "./Slider";

// 1

const SliderMap = () => {
  //eslint-disable-next-line
  const [destacados, setDestacados] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("http://localhost:4000/destacados/all")
      .then((res) => res.json())
      .then((json) =>
        setDestacados(localStorage.setItem("destacados", JSON.stringify(json)))
      )
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <Slider />}</>;
};

export default SliderMap;
