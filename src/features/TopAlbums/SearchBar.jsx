import { Typeahead } from "react-bootstrap-typeahead";

const SearchBar = ({ list, handleSearch }) => {
  // TODO: fix this? list is undefind because of async call
  let options = [];
  if (list) {
    list.forEach((item) => {
      options.push({
        artist: item["im:artist"].label,
        name: item["im:name"].label,
      });
    });
  }

  return (
    <Typeahead
      id="typeahead"
      className="text-2xl mb-2 max-w-md"
      placeholder="Search..."
      ignoreDiacritics={false}
      filterBy={["artist", "name"]}
      labelKey={(option) => `${option.artist} (${option.name})`}
      onKeyDown={(query) => {
        if (query.key === "Enter") {
          console.log('enter');
          handleSearch(query.target.value);
        }
      }}
      onInputChange={(text, e) => {
        console.log('e', e);
        handleSearch(text);
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      options={options}
    />
  );
};

export { SearchBar };
