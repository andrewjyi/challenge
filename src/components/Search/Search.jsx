import { Autocomplete, TextField } from "@mui/material";

const Search = (list) => {
  const fakeList = ["1", "2", "3", "a", "b", "c"];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={fakeList}
      sx={{ width: "100%" }}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
};

export { Search };
