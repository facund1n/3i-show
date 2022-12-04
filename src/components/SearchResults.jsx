// SearchResults.jsx
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const { slug } = useParams();

  useEffect(() => {
    const searchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/search?${query}`
        );
        setSearchResults(data.products);
      } catch (error) {
        setError(error.response?.data?.message);
      }
    };
    searchProduct();
  }, []);

  return (
    <div>
      {searchResults.map((searchResult) => (
        <div>
          key={searchResult.id}
          <p>{searchResult.name}</p>
        </div>
      ))}
    </div>
  );
};
export default SearchResults;
