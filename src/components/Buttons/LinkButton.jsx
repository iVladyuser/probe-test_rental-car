import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const LinkButton = (props) => {
	return (
		<Button
			variant="text"
			component={NavLink}
			sx={{
				color: "#FFF",
				borderRadius: "0px",
				border: "none",
				[`&.active`]: {
					borderBottom: "2px solid white",
				},
			}}
			{...props}>
			{props.children}
		</Button>
	);
};

export default LinkButton;
