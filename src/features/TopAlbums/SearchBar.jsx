import { Typeahead } from "react-bootstrap-typeahead";

const SearchBar = ({ options, handleSearch }) => {
  return (
    <Typeahead
      id="typeahead"
      className="text-2xl mb-2 max-w-md"
      placeholder="Search..."
      ignoreDiacritics={false}
      filterBy={["artist", "albumName"]}
      labelKey={(option) => `${option.artist} (${option.albumName})`}
      onInputChange={(text) => {
        handleSearch(text);
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      options={options.map((item) => ({
        artist: item.artist,
        albumName: item.albumName,
      }))}
      renderMenuItemChildren={(option) => (
        <div>
          <div className="text-sm">{option.artist}</div>
          <div className="text-xs">
            <small>Album: {option.albumName}</small>
          </div>
        </div>
      )}
    />
  );
};

export { SearchBar };
