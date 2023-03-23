import { Typeahead } from "react-bootstrap-typeahead";

const props = {
  artist: "artist",
  name: "name",
};

const SearchBar = ({ options, onHandleSearch }) => {
  return (
    <Typeahead
      id="typeahead"
      placeholder="Search..."
      size={"sm"}
      align={"left"}
      inputProps={{
        style: {
          width: "354px",
        },
      }}
      filterBy={[props.artist, props.name]}
      labelKey={(option) => `${option[props.artist]} (${option[props.name]})`}
      onInputChange={(text) => {
        onHandleSearch(text);
      }}
      onChange={(query) => {
        onHandleSearch(query[0]);
      }}
      options={options.map((option) => ({
        [props.artist]: option[props.artist],
        [props.name]: option[props.name],
      }))}
      renderMenuItemChildren={(option) => (
        <div className="w-80">
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
