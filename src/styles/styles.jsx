import { createTheme } from "@mui/material";

export const theme = createTheme({
	typography: {
		fontFamily: ["Manrope", "sans-serif"].join(","),
	},
	breakpoints: {
		values: {
			mobile: 320,
			tablet: 768,
			desktop: 1440,
		},
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: ({ theme }) => ({
					left: "50%",
					transform: "translateX(-50%)",
					[theme.breakpoints.down("tablet")]: {
						minWidth: "320px",
					},
					[theme.breakpoints.up("tablet")]: {
						width: "768px",
					},
					[theme.breakpoints.up("desktop")]: {
						width: "1440px",
					},
				}),
			},
		},
		MuiContainer: {
			styleOverrides: {
				root: ({ theme }) => ({
					paddingTop: "64px",
					[theme.breakpoints.down("tablet")]: {
						minWidth: "320px",
					},
					[theme.breakpoints.up("tablet")]: {
						width: "768px",
					},
					[theme.breakpoints.up("desktop")]: {
						width: "1440px",
					},
				}),
			},
		},
	},
});

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

export const boxStyle = {
	backgroundColor: "black",
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
	height: "100%",
};

export const boxMainStyle = {
	color: "#fff",
	height: "100vh",
	width: "800px",
	margin: "20px",
	paddingLeft: "70px",
	"@media screen and (max-width: 480px)": {
		paddingLeft: "0px",
	},
};

export const homeMainTextStyle = {
	color: "#fff",
	fontFamily: "Manrope sans-serif",
	fontSize: "96px",
	fontWeight: "700",
	lineHeight: "24px",
	"@media screen and (max-width: 480px)": {
		fontSize: "62px",
	},
};

export const homeTextStyle = {
	color: "#ded6d6;",
	fontFamily: "Manrope sans-serif",
	fontSize: "26px",
	fontStyle: "normal",
	fontWeight: "500",
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
	padding: "26px 36px",
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
		padding: "14px 30px",
	},
};
