import { Link } from "@mui/material";

const loadMoreBtnStyle = {
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

const LoadMoreBtn = (props) => {
	return (
		<Link
			component={"button"}
			sx={loadMoreBtnStyle}
			{...props}>
			{props.children}
		</Link>
	);
};

export default LoadMoreBtn;
