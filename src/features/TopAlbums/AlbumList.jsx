import axios from "axios";
import Album from "../TopAlbums/Album";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { transformAlbum } from "./transformAlbum";

const AlbumList = () => {
  const [albums, setAlbums] = useState(null);

  const { isLoading, error } = useQuery({
    queryKey: ["albums"],
    queryFn: () =>
      axios
        .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then((res) => {
          const {
            feed: { entry },
          } = res.data;

          localStorage.setItem("albums", JSON.stringify(transformAlbum(entry)));
          setAlbums(transformAlbum(entry));
          return transformAlbum(entry);
        }),
    staleTime: 1000,
  });

  if (error) return "An error has occurred: " + error.message;

  const resetSearch = () => {
    const cache = JSON.parse(localStorage.getItem("albums"));
    return setAlbums(cache);
  };

  const handleSearch = (query) => {
    if (!query || query.length === 0) {
      return resetSearch();
    }

    const { albumName, artist } = query;

    const albumFound = albums.find(
      (album) =>
        albumName?.toLowerCase() === album.albumName.toLowerCase()
    );
    if (albumFound) {
      return setAlbums([albumFound]);
    }

    const artistFound = albums.filter(
      (album) => artist?.toLowerCase() === album.artist.toLowerCase()
    );
    if (artistFound.length > 0) {
      setAlbums(found);
    }
  };

  return (
    <section className="pl-4 pr-4">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <SearchBar options={albums} handleSearch={handleSearch} />
          <ul className="auto-grid">
            {/* <ul className="grid grid-cols-6 gap-8"> */}
            {albums?.map((album) => (
              <Album key={album.id} info={album} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export { AlbumList };
