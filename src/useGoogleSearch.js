import { useState, useEffect } from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = "c914426accfa7cdf3"; // Search Engine ID

// my custom React Hook:
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  // cx: The identifier of the Programmable Search Engine.
  // key: yourAPIKey
  useEffect(() => {
    const fetchData = async() => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
      .then(response => response.json())
      .then(result => {
        setData(result)
      })
    }

    fetchData();
  }, [term])

  return { data }
};

export default useGoogleSearch;
