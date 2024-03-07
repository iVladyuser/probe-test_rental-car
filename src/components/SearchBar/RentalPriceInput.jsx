import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { inputPriceStyle } from "./SearchBarStyle";

const RentalPriceInput = ({ opts }) => {
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
				sx={inputPriceStyle}
				renderInput={(params) => {
					return (
						<TextField
							placeholder="To $"
							{...params}
						/>
					);
				}}
			/>
		</>
	);
};

export default RentalPriceInput;
