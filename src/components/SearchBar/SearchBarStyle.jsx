export const searchBarStyle = {
	display: "flex",
	alignItems: "center",
	width: "224px",
	height: "48px",
	color: "#121417",
	fontFamily: ["Manrope", "sans-serif"].join(","),
	fontSize: "18px",
	fontStyle: "normal",
	fontWeight: "500",
	lineHeight: "20px",
	borderRadius: "14px",
	border: "none",
	backgroundColor: "#F7F7FB",
	"& .MuiOutlinedInput-notchedOutline": {
		border: "none",
	},
	"&.Mui-focused": {
		"& .MuiOutlinedInput-notchedOutline": {
			border: "none",
		},
	},
	"&.MuiInput-input": {
		fontFamily: ["Manrope", "sans-serif"].join(","),
		fontSize: "18px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "20px",
	},
	"& .MuiOutlinedInput-root": {
		padding: "0 18px",
		fontFamily: ["Manrope", "sans-serif"].join(","),
		fontSize: "18px",
		fontStyle: "normal",
		fontWeight: "500",
		lineHeight: "20px",
	},
};
