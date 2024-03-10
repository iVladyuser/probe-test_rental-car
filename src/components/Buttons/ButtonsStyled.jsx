export const mainButtonStyle = {
	textTransform: "none",
	color: "#FFF",
	padding: "12px 96px",
	fontFamily: ["Manrope", "sans-serif"].join(","),
	fontSize: "14px",
	fontStyle: "normal",
	fontWeight: "600",
	lineHeight: "20px",
	borderRadius: "12px",
	border: "none",
	backgroundColor: "#3470ff",

	"&:hover": {
		backgroundColor: "#0b44cd",
	},
	"&:active": {
		backgroundColor: "#0b44cd",
	},
	"&:focus": {
		backgroundColor: "#0b44cd",
	},
};

export const loadMoreBtnStyle = {
	textTransform: "none",
	color: "#3470ff",
	fontFamily: ["Manrope", "sans-serif"].join(","),
	fontSize: "16px",
	fontStyle: "normal",
	fontWeight: "500",
	lineHeight: "24px",

	"&:hover": {
		color: "#0b44cd",
	},
	"&:active": {
		color: "#0b44cd",
	},
	"&:focus": {
		color: "#0b44cd",
	},
};

export const linkBtnStyle = {
	color: "#FFF",
	borderRadius: "0px",
	border: "none",
	[`&.active`]: {
		borderBottom: "2px solid white",
	},
};
