import { Typeahead } from "react-bootstrap-typeahead";

const SearchBar = ({ list, handleSearch }) => {
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
      // onKeyDown={(query) => {
      //   if (query.key === "Enter") {
      //     handleSearch(query.target.value);
      //   }
      // }}
      onInputChange={(text) => {
        handleSearch(text);
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      options={options}
      renderMenuItemChildren={(option) => (
        <div>
          <div className="text-sm">{option.artist}</div>
          <div className="text-xs">
            <small>Album: {option.name}</small>
          </div>
        </div>
      )}
    />
  );
};

export { SearchBar };
