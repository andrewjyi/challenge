import useTopAlbums from "../../hooks/useTopAlbums";
import Album from "../TopAlbums/Album";
import { Spinner } from "react-bootstrap";
import {
  Menu,
  MenuItem,
  ClearButton,
  Typeahead,
} from "react-bootstrap-typeahead";
import { Suspense, useEffect, useState } from "react";

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
      className="mb-11"
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
      // renderMenu={(results, menuProps) => (
      //   <Menu {...menuProps}>
      //     {results.map((result, index) => {
      //       return (
      //         <MenuItem key={index} option={result} position={index}>
      //           {result.label}
      //         </MenuItem>
      //       );
      //     })}
      //   </Menu>
      // )}
    >
      {/* {({ onClear, selected }) => (
        <div>
          {!!selected.length && <ClearButton onClick={onClear} />}
          {!selected.length && <Spinner animation="grow" size="sm" />}
        </div>
      )} */}
    </Typeahead>
  );
};

const AlbumList = () => {
  const [topAlbums, setTopAlbums] = useState(null);

  const albums = useTopAlbums(
    "https://itunes.apple.com/us/rss/topalbums/limit=10/json"
  );

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

    setTopAlbums(albums?.feed?.entry);
  };

  useEffect(() => {
    setTopAlbums(albums?.feed?.entry);
  }, [albums]);

  return (
    <section>
      <Suspense fallback={"Loading..."}>
        <Search list={topAlbums} handleSearch={handleSearch} />
        <ul className="grid grid-cols-6 gap-2">
          {topAlbums &&
            topAlbums.map((album, i) => (
              <Album
                key={album.id?.attributes["im:id"]}
                info={album}
                index={i + 1}
              />
            ))}
        </ul>
      </Suspense>
    </section>
  );
};

export { AlbumList };
