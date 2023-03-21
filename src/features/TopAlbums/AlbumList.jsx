import Album from "../TopAlbums/Album";
import { Typeahead } from "react-bootstrap-typeahead";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";
import { useState } from "react";
import axios from "axios";

const Search = ({ list, handleSearch }) => {
  let options = [];
  if (list) {
    list.forEach((item) => {
      options.push(item["im:artist"].label);
      options.push(item["im:name"].label);
    });
  }

  return (
    <Typeahead
      id="typeahead"
      className="text-2xl mb-2 max-w-lg"
      placeholder="Search..."
      onKeyDown={(query) => {
        if (query.key === "Enter") {
          handleSearch(query.target.value);
        }
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      // onInputChange={(query) => {
      //   handleSearch(query);
      // }}
      options={options}
    />
  );
};

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
    if (query.length === 0) {
      return setAlbumsList(albumsList);
    }

    const found = albumsList.filter((album) => {
      const test =
        query.toLowerCase() ==
        (album["im:artist"].label.toLowerCase() ||
          album["im:name"].label.toLowerCase());

      console.log(test);
      return test;
    });

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
