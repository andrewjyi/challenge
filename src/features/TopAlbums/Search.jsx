import { Typeahead } from "react-bootstrap-typeahead";

const Search = ({ list, handleSearch }) => {
  // TODO: fix this? list is undefind because of async call
  let options = [];
  if (list) {
    list.forEach((item) => {
      options.push(
        `${item["im:artist"].label} (Album: ${item["im:name"].label})`
      );
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
      renderItem={({ index, style }) => {
        const item = results[index];
        return (
          <MenuItem key={item} option={item} position={index} style={style}>
            <Highlighter search={props.text}>{item}</Highlighter>
          </MenuItem>
        );
      }}
      options={options}
    />
  );
};

export { Search };
