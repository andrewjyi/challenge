import axios from "axios";
import Album from "../TopAlbums/Album";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { transformAlbum } from "./transformAlbum";
import styled from "styled-components";

const List = styled.ul`
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;

const AlbumList = () => {
  const [albums, setAlbums] = useState(null);

  // TODO: abstract
  const { isLoading, error } = useQuery({
    queryKey: ["albums"],
    queryFn: () =>
      axios
        .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then((res) => {
          const {
            feed: { entry },
          } = res.data;

          // TODO: cache
          localStorage.setItem("albums", JSON.stringify(transformAlbum(entry)));
          setAlbums(transformAlbum(entry));
          return transformAlbum(entry);
        }),
    staleTime: 1000,
  });

  if (error) return "An error has occurred: " + error.message;

  const resetSearch = () => {
    // TODO: cache
    const cache = JSON.parse(localStorage.getItem("albums"));
    return setAlbums(cache);
  };

  const handleSearch = (query) => {
    // reset search if no query
    if (!query || query.length === 0) {
      return resetSearch();
    }

    const { name, artist } = query;

    // search for album
    const albumFound = albums.find(
      (album) => name?.toLowerCase() === album.name.toLowerCase()
    );
    if (albumFound) {
      return setAlbums([albumFound]);
    }

    // search for artist
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
          <div className="mb-4">
            <div className="center">
              <SearchBar options={albums} handleSearch={handleSearch} />
            </div>
          </div>
          <List className="auto-grid">
            {albums?.map((album) => (
              <Album key={album.id} info={album} />
            ))}
          </List>
        </>
      )}
    </section>
  );
};

export { AlbumList };
