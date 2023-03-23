import { useQuery } from "@tanstack/react-query";
import { transformAlbums } from "../utils/transformAlbums";
import QUERY_KEYS from "../utils/queryKeys";

const url = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

const useAlbum = () => {
  const fetchAlbums = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const albums = transformAlbums(data.feed.entry);
    return albums;
  };

  const { isLoading, error, data } = useQuery({
    queryKey: [QUERY_KEYS.albums],
    queryFn: fetchAlbums,
    staleTime: 1000,
  });

  return { isLoading, error, data };
};

export default useAlbum;
