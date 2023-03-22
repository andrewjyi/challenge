import { Typeahead } from "react-bootstrap-typeahead";

const SearchBar = ({ options, handleSearch }) => {
  return (
    <Typeahead
      id="typeahead"
      placeholder="Search..."
      ignoreDiacritics={false}
      size={"sm"}
      filterBy={["artist", "albumName"]}
      positionFixed={true}
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
