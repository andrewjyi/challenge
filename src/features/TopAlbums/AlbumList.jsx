import Album from "../TopAlbums/Album";
import axios from "axios";
import { Typeahead } from "react-bootstrap-typeahead";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading/Loading";

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
      className="mb-2 max-w-lg border"
      placeholder="Search..."
      onKeyDown={(query) => {
        if (query.key === "Enter") {
          handleSearch(query.target.value);
        }
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      onInputChange={(query) => {
        handleSearch(query);
      }}
      options={options}
    />
  );
};

const AlbumList = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["albumData"],
    queryFn: () =>
      axios
        .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
        .then((res) => res.data),
  });
  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;

  const handleSearch = (query) => {
    if (query?.length > 0) {
      const found = topAlbums.filter((album) => {
        const test =
          query.toLowerCase() ==
          (album["im:artist"].label.toLowerCase() ||
            album["im:name"].label.toLowerCase());

        console.log(test);
        return test;
      });

      if (found.length > 0) {
        return setTopAlbums(found);
      }
    }

    setTopAlbums(data?.feed?.entry);
  };

  return (
    <section className="center flex-col">
      <Search list={data?.feed?.entry} handleSearch={handleSearch} />
      <ul className="grid grid-cols-5 gap-10">
        <>
          {isFetching ? (
            <Loading />
          ) : (
            data?.feed?.entry?.map((album, i) => (
              <Album
                key={album.id?.attributes["im:id"]}
                info={album}
                index={i + 1}
              />
            ))
          )}
        </>
      </ul>
    </section>
  );
};

export { AlbumList };
