import Album from "../TopAlbums/Album";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";
import { useState } from "react";
import axios from "axios";
import { Search } from "./Search";

const AlbumList = () => {
  const [albumsList, setAlbumsList] = useState(null);

  const { isLoading, error } = useQuery({
    queryKey: ["data"],
    queryFn: () =>
      axios
        .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then((res) => {
          setAlbumsList(res.data.feed.entry);
          return res.data.feed.entry;
        }),
    staleTime: 1000,
  });

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  const handleSearch = (query) => {
    console.log("query", query);

    if (!query || query.length === 0) {
      return setAlbumsList(albumsList);
    }

    const found = albumsList.filter((album) => {
      return (
        query.toLowerCase() ==
        (album["im:artist"].label.toLowerCase() ||
          album["im:name"].label.toLowerCase())
      );
    });

    console.log("found", found);
    if (found.length > 0) {
      return setAlbumsList(found);
    }
  };

  return (
    <section>
      <Search list={albumsList} handleSearch={handleSearch} />
      <ul className="grid grid-cols-6 gap-8">
        <>
          {albumsList?.map((album, i) => (
            <Album
              key={album.id?.attributes["im:id"]}
              info={album}
              index={i + 1}
            />
          ))}
        </>
      </ul>
    </section>
  );
};

export { AlbumList };
