import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { inputMakesStyle } from "./SearchBarStyle";

const CarMakeInput = ({ opts }) => {
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
				sx={inputMakesStyle}
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

export default CarMakeInput;
