import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { searchBarStyle } from "./SearchBarStyle";

const SearchBar = ({ opts }) => {
	const [value, setValue] = useState(null);
	const [inputValue, setInputValue] = useState("");

	return (
		<>
			<Autocomplete
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				id="cars"
				options={opts}
				sx={searchBarStyle}
				renderInput={(params) => {
					return (
						<TextField
							placeholder="Enter the text"
							{...params}
						/>
					);
				}}
			/>
		</>
	);
};

export default SearchBar;
