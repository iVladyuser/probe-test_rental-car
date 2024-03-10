export const boxStyle = {
	backgroundColor: "black",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	height: "100%",
};

export const boxMainStyle = {
	color: "#fff",
	height: "100vh",
	width: "800px",
};

export const homeMainTextStyle = {
	color: "#fff",
	fontFamily: "Manrope sans-serif",
	fontSize: "60px",
	marginTop: "130px",
	fontWeight: "700",
	lineHeight: "24px",
	"@media screen and (min-width: 500px)": {
		maxWidth: "899px",
		marginTop: "200px",
		fontSize: "76px",
	},
	"@media screen and (min-width: 900px)": {
		maxWidth: "999px",
		fontSize: "56px",
	},
	"@media screen and (min-width: 1000px)": {
		maxWidth: "1439px",
		fontSize: "80px",
	},
	"@media screen and (min-width: 1440px)": {
		fontSize: "92px",
	},
};

export const homeTextStyle = {
	color: "#b6aaaa;",
	fontFamily: "Manrope sans-serif",
	fontSize: "20px",
	fontStyle: "normal",
	fontWeight: "400",
	lineHeight: "26px",
	wordWrap: "unset",
	overflow: "hidden",
	textOverflow: "clip",
};

export const homeBtnBox = {
	display: "flex",
	flexBasis: "calc((100% - 24px) / 2)",
	paddingTop: "80px",
	gap: "30px",

	"@media screen and (max-width: 480px)": {
		justifyContent: "center",
	},
};

export const homeButtonStyle = {
	textTransform: "none",
	color: "#fff",
	padding: "26px 34px",
	fontFamily: ["Manrope", "sans-serif"].join(","),
	fontSize: "24px",
	fontStyle: "normal",
	fontWeight: "800",
	lineHeight: "20px",
	borderStyle: "solid",
	borderWidth: "2px",
	borderRadius: "12px",
	borderColor: "white",
	backgroundColor: "#000",

	"&:hover": {
		backgroundColor: "#fff",
		color: "#000",
	},
	"&:active": {
		backgroundColor: "#fff",
		color: "#000",
	},
	"&:focus": {
		backgroundColor: "#fff",
		color: "#000",
	},

	"@media screen and (max-width: 480px)": {
		fontSize: "16px",
		padding: "14px 16px",
	},
	"@media screen and (max-width: 1399px)": {
		fontSize: "16px",
		padding: "22px 30px",
	},
};

export const cardMediaStyle = {
	marginTop: "160px",
	"@media screen and (max-width: 1100px)": {
		width: "520px",
	},
	"@media screen and (min-width: 1101px)": {
		width: "625px",
	},
	"@media screen and (min-width: 1276px)": {
		width: "800px",
	},
};
