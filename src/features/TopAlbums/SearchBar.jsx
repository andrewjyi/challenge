import { Typeahead } from "react-bootstrap-typeahead";

const props = {
  artist: "artist",
  name: "name",
};

const SearchBar = ({ options, handleSearch }) => {
  return (
    <Typeahead
      id="typeahead"
      placeholder="Search..."
      ignoreDiacritics={false}
      size={"sm"}
      filterBy={[props.artist, props.name]}
      positionFixed={true}
      labelKey={(option) => `${option[props.artist]} (${option[props.name]})`}
      onInputChange={(text) => {
        handleSearch(text);
      }}
      onChange={(query) => {
        handleSearch(query[0]);
      }}
      options={options.map((item) => ({
        [props.artist]: item[props.artist],
        [props.name]: item[props.name],
      }))}
      renderMenuItemChildren={(option) => (
        <div>
          <div className="text-sm">{option[props.artist]}</div>
          <div className="text-xs">
            <small>Album: {option[props.name]}</small>
          </div>
        </div>
      )}
    />
  );
};

export { SearchBar };
