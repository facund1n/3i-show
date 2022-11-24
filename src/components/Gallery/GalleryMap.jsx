import { useState, useEffect } from "react";
import Loader from "../Loader";

import GallerySlider from "./GallerySlider";

// 1

const GalleryMap = () => {
  // eslint-disable-next-line
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader

  useEffect(() => {
    fetch("http://localhost:4000/galerias/all")
      .then((res) => res.json())
      .then((json) =>
        setImages(localStorage.setItem("images", JSON.stringify(json)))
      )
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <GallerySlider />}</>;
};

export default GalleryMap;
