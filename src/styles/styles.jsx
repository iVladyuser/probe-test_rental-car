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
	fontSize: "76px",
	fontWeight: "700",
	lineHeight: "24px",
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
