import { Button } from "@mui/material";
import { mainButtonStyle } from "./ButtonsStyled";


const MainButton = (props) => {
	return (
		<Button
			variant="contained"
			sx={mainButtonStyle}
			{...props}>
			{props.children}
		</Button>
	);
};

export default MainButton;
