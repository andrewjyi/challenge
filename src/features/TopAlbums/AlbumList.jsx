import { Album } from "../TopAlbums/Album";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";
import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { transformAlbums } from "./transformAlbums";
import styled from "styled-components";

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

  const queryClient = useQueryClient();

  // TODO: abstract
  const { isLoading, error } = useQuery({
    queryKey: ["albums"],
    queryFn: async () => {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
      );
      const data = await response.json();
      const albums = transformAlbums(data.feed.entry);
      setAlbums(albums);
      return albums;
    },
    staleTime: 1000,
  });

  const resetSearch = () => {
    const cachedAlbums = queryClient.getQueryData(["albums"]);
    return setAlbums(cachedAlbums);
  };

  const onHandleSearch = (query) => {
    if (!query || query.length === 0) {
      return resetSearch();
    }

    const { name, artist } = query;

    const albumFound = albums.find(
      (album) => name?.toLowerCase() === album.name.toLowerCase()
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

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  return (
    <section className="pl-4 pr-4">
      <div className="mb-4">
        <div className="center">
          <SearchBar options={albums} onHandleSearch={onHandleSearch} />
        </div>
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
