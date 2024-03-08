import { Typography, Box, CardMedia, Hidden } from "@mui/material";
import hero from "../components/img/hero.jpg";

import {
	boxMainStyle,
	boxStyle,
	homeMainTextStyle,
	homeTextStyle,
} from "../styles/styles";

export const Home = () => {
	return (
		<Box sx={boxStyle}>
			<Box
				marginLeft={5}
				sx={boxMainStyle}>
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
						marginTop={10}
						sx={homeTextStyle}>
						A car rental, hire car, or car hire agencey is a company that rents
						auto for short periods of time, generally ranging from a few hours
						to a few weeks.
					</Typography>
					{/* <Typography
						variant="h5"
						color="inherit"
						paragraph>
						Please log in to your account or register.
					</Typography> */}
					{/* <Button variant="contained">
						<StyledNavLink>Sign In</StyledNavLink>
					</Button> */}
				</>
			</Box>
			<Hidden mdDown>
				<CardMedia
					sx={{ marginTop: "0px" }}
					component="img"
					alt="car image"
					height="200"
					width="300"
					image={hero}
				/>
			</Hidden>
			;
		</Box>
	);
};

export default Home;
