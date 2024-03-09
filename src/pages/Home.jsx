import { Typography, Box, CardMedia, Hidden } from "@mui/material";
import hero from "../components/img/hero.jpg";
import {
	homeButtonStyle,
	homeBtnBox,
	boxMainStyle,
	boxStyle,
	homeMainTextStyle,
	homeTextStyle,
	cardMediaStyle
} from "../styles/styles";
import { MainButton } from "../components";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Box sx={boxStyle}>
			<Box sx={boxMainStyle}>
				<>
					<Typography
						component="h1"
						variant="h1"
						color="inherit"
						marginTop={25}
						sx={homeMainTextStyle}>
						Car rental.
					</Typography>
				</>
				<>
					<Typography
						component="h1"
						variant="h3"
						marginTop={13}
						sx={homeTextStyle}>
						A car rental, hire car, or car hire agencey is a company that rents
						auto for short periods of time, generally ranging from a few hours
						to a few weeks.
					</Typography>
					<Box sx={homeBtnBox}>
						<MainButton
							component={Link}
							to="catalog"
							sx={{ ...homeButtonStyle }}>
							Book Now
						</MainButton>
						<MainButton
							component={Link}
							to="catalog"
							sx={{ ...homeButtonStyle }}>
							Explore Us
						</MainButton>
					</Box>
				</>
			</Box>
			<Hidden mdDown>
				<CardMedia
					sx={cardMediaStyle}
					component="img"
					alt="car image"
					height="500"
					width="300"
					image={hero}
				/>
			</Hidden>
			;
		</Box>
	);
};

export default Home;
