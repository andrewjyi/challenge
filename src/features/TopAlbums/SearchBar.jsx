import { Typeahead } from "react-bootstrap-typeahead";

const SearchBar = ({ options, handleSearch }) => {
  return (
    <Typeahead
      id="typeahead"
      className="text-2xl mb-2 max-w-md"
      placeholder="Search..."
      ignoreDiacritics={false}
      filterBy={["artist", "name"]}
      labelKey={(option) => `${option.artist} (${option.name})`}
      onInputChange={(text) => {
        handleSearch(text);
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      options={options.map((item) => ({
        artist: item["im:artist"].label,
        name: item["im:name"].label,
      }))}
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
