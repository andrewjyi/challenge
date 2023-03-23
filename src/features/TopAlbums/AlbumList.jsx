import { Album } from "../TopAlbums/Album";
import { useQueryClient } from "@tanstack/react-query";
import { Loading } from "@/components/Loading/Loading";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import styled from "styled-components";
import useAlbum from "./hooks/useAlbum";
import QUERY_KEYS from "./utils/queryKeys";

const Ul = styled.ul`
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

  const { isLoading, error } = useAlbum({ setAlbums });

  const queryClient = useQueryClient();

  const resetSearch = () => {
    const cachedAlbums = queryClient.getQueryData([QUERY_KEYS.albums]);
    return setAlbums(cachedAlbums);
  };

  const onHandleSearch = (query) => {
    // reset albums
    if (!query || query.length === 0) {
      return resetSearch();
    }

    const { name, artist } = query;

    // find album
    const albumFound = albums.find(
      (album) => name?.toLowerCase() === album.name.toLowerCase()
    );
    if (albumFound) {
      return setAlbums([albumFound]);
    }

    // find artist
    const artistFound = albums.filter(
      (album) => artist?.toLowerCase() === album.artist.toLowerCase()
    );
    if (artistFound.length > 0) {
      setAlbums(found);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="pl-4 pr-4">
      <div className="mb-4 center">
        <SearchBar options={albums} onHandleSearch={onHandleSearch} />
      </div>
      <Ul>
        {albums?.map((album) => (
          <Album key={album.id} info={album} />
        ))}
      </Ul>
    </section>
  );
};

export { AlbumList };
