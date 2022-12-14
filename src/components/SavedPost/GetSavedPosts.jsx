import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SavedPostGrid from "./SavedPostGrid";
import Loader from "../Loader";

const GetSavedPosts = ({ userLogged }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); //loader
  // const params = useParams();

  useEffect(() => {
    fetch(`https://3i-show-api-node.vercel.app/users/${userLogged}/saved/`)
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
        data.map((data, k) => <SavedPostGrid data={data.saved} key={k} />)
      )}
    </>
  );
};

export default GetSavedPosts;
