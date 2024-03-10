import { Link } from "@mui/material";
import { loadMoreBtnStyle } from "./ButtonsStyled";

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
