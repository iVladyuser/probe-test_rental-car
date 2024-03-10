import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { linkBtnStyle } from "./ButtonsStyled";

const LinkButton = (props) => {
	return (
		<Button
			variant="text"
			component={NavLink}
			sx={linkBtnStyle}
			{...props}>
			{props.children}
		</Button>
	);
};

export default LinkButton;
