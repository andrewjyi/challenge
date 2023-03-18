import { useState, useEffect } from "react";

function useTopAlbums(url) {
  const [data, setData] = useState(null);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return data;
}

export default useTopAlbums;
