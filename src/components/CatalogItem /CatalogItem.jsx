import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";
import { mainButtonStyle } from "../../styles/styles";
import { MainButton } from "../../components";
import { FavorHeart } from "../icons/FavorHeart";
import { Divider } from "../icons/Divider";
import { additionalTextStyle, mainTextStyle } from "./CatalogItemStyles";

const CatalogItem = ({ car }) => {
	const {
		id,
		year,
		make,
		model,
		type,
		img,
		engineSize,
		rentalPrice,
		rentalCompany,
		address,
		fuelConsumption,
	} = car;

	return (
		<>
			<Card
				sx={{
					boxShadow: 0,
					maxWidth: 274,
					borderRadius: "14px",
					position: "relative",
				}}>
				<CardMedia
					sx={{ borderRadius: "14px", marginBottom: "14px" }}
					component="img"
					alt={"car image"}
					height="268"
					image={img}
				/>
				<CardContent sx={{ padding: "0" }}>
					<Box
						sx={{
							...mainTextStyle,
							display: "flex",
							justifyContent: "space-between",
							marginBottom: "8px",
						}}>
						<Typography sx={mainTextStyle}>
							{make} <span style={{ color: "#121417" }}>{model}</span>, {year}
						</Typography>
						<Typography sx={mainTextStyle}>{rentalPrice}</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "4px",
							marginBottom: "28px",
						}}>
						<Box
							sx={{
								...additionalTextStyle,
								display: "flex",
								gap: "6px",
								overflow: "hidden",
								textOverflow: "clip",
								wordWrap: "unset",
							}}>
							<Typography
								aria-label="City"
								sx={additionalTextStyle}>
								{address.split(", ")[1]}
							</Typography>
							<Divider />
							<Typography
								aria-label="Contry"
								sx={additionalTextStyle}>
								{address.split(", ")[2]}
							</Typography>
							<Divider />
							<Typography
								aria-label="Rental Company"
								sx={additionalTextStyle}>
								{rentalCompany}
							</Typography>
						</Box>
						<Box
							sx={{
								...additionalTextStyle,
								display: "flex",
								gap: "6px",
								overflow: "hidden",
								textOverflow: "clip",
							}}>
							<Typography
								aria-label="ID"
								sx={additionalTextStyle}>
								{id}
							</Typography>
							<Divider />
							<Typography
								aria-label="Car type"
								sx={additionalTextStyle}>
								{type}
							</Typography>
							<Divider />
							<Typography
								aria-label="Model Year"
								sx={additionalTextStyle}>
								{engineSize}
							</Typography>
							<Divider />
							<Typography
								aria-label="Engine size"
								sx={additionalTextStyle}>
								{fuelConsumption} L/100
							</Typography>
						</Box>
					</Box>
				</CardContent>
				<CardActions
					disableSpacing={true}
					sx={{ padding: "0" }}>
					<IconButton
						sx={{
							position: "absolute",
							top: "6px",
							right: "6px",
						}}
						aria-label="add to favorites">
						<FavorHeart />
					</IconButton>
					<MainButton sx={{ ...mainButtonStyle }}>Learn more</MainButton>
				</CardActions>
			</Card>
		</>
	);
};

export default CatalogItem;
