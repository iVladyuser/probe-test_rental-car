import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Chip,
	Divider,
	IconButton,
	Typography,
} from "@mui/material";
import {
	nameTextStyle,
	supportingTextStyle,
	modalTitleStyle,
	conditionsChipStyle,
} from "./Modal.styled";

import { MainButton, CloseX } from "../../components";
import { mainButtonStyle } from "../Buttons/ButtonsStyled";

const ModalCard = (props) => {
	const { onClose, car } = props;
	const {
		id,
		year,
		make,
		model,
		type,
		img,
		description,
		fuelConsumption,
		engineSize,
		accessories,
		functionalities,
		rentalPrice,
		rentalCompany,
		address,
		rentalConditions,
		mileage,
	} = car;

	const callNumber = "+380730000000";

	return (
		<Card
			sx={{
				boxShadow: 0,
				width: "541px",
				padding: "40px",
				borderRadius: "24px",
				position: "relative",
			}}>
			<CardMedia
				sx={{ borderRadius: "14px", marginBottom: "14px" }}
				component="img"
				alt={"car image"}
				height="248"
				image={img}
			/>
			<CardContent
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: "24px",
					marginBottom: "24px",
					padding: "0",
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}>
					<Typography sx={{ ...nameTextStyle, marginBottom: "8px" }}>
						{make} <span style={{ color: "#3470FF" }}>{model}</span>, 2019
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "4px",
							marginBottom: "14px",
						}}>
						<Box
							sx={{
								...supportingTextStyle,
								display: "flex",
								gap: "6px",
								overflow: "hidden",
								textOverflow: "clip",
								wordWrap: "unset",
							}}>
							<Typography
								aria-label="City"
								sx={supportingTextStyle}>
								{address.split(", ")[1]}
							</Typography>
							<Divider />
							<Typography
								aria-label="Contry"
								sx={supportingTextStyle}>
								{address.split(", ")[2]}
							</Typography>
							<Divider />
							<Typography
								aria-label="Rental Company"
								sx={supportingTextStyle}>
								{rentalCompany}
							</Typography>
							<Divider />
							<Typography
								aria-label="ID"
								sx={supportingTextStyle}>
								{id}
							</Typography>
							<Divider />
							<Typography
								aria-label="Car type"
								sx={supportingTextStyle}>
								{type}
							</Typography>
							<Divider />
							<Typography
								aria-label="Model Year"
								sx={supportingTextStyle}>
								{year}
							</Typography>
						</Box>
						<Box
							sx={{
								...supportingTextStyle,
								display: "flex",
								gap: "6px",
								overflow: "hidden",
								textOverflow: "clip",
							}}>
							<Typography
								aria-label="Fuel Consumption"
								sx={supportingTextStyle}>
								{`Fuel Consumption: ${fuelConsumption}`}
							</Typography>
							<Divider />
							<Typography
								aria-label="Engine Size"
								sx={supportingTextStyle}>
								{`Engine Size: ${engineSize}`}
							</Typography>
						</Box>
					</Box>
					<Typography
						aria-label="Car description"
						sx={{
							color: "#121417",
							fontFamily: "Manrope",
							fontSize: "14px",
							fontStyle: "normal",
							fontWeight: "400",
							lineHeight: "20px",
						}}>
						{description}
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "8px",
					}}>
					<Typography sx={modalTitleStyle}>
						Accessories and functionalities:
					</Typography>

					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "4px",
							marginBottom: "14px",
						}}>
						<Box
							sx={{
								...supportingTextStyle,
								display: "flex",
								flexWrap: "wrap",
								gap: "4px 6px",
							}}>
							{accessories.map((accessory) => (
								<Box
									key={accessory}
									sx={{
										display: "flex",
										gap: "6px",
									}}>
									<Typography
										aria-label="accessories"
										sx={supportingTextStyle}>
										{accessory}
									</Typography>
									<Divider />
								</Box>
							))}
						</Box>
						<Box
							sx={{
								...supportingTextStyle,
								display: "flex",
								flexWrap: "wrap",
								gap: "4px 6px",
							}}>
							{functionalities.map((functionality) => (
								<Box
									key={functionality}
									sx={{
										display: "flex",
										gap: "6px",
									}}>
									<Typography
										aria-label="functionalities"
										sx={supportingTextStyle}>
										{functionality}
									</Typography>
									<Divider />
								</Box>
							))}
						</Box>
					</Box>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						marginBottom: "8px",
					}}>
					<Typography sx={modalTitleStyle}>Rental Conditions:</Typography>
					<Box
						sx={{
							...supportingTextStyle,
							display: "flex",
							flexWrap: "wrap",
							gap: "8px",
						}}>
						{rentalConditions.split("\n").map((condition) => {
							const number = condition.match(/\d+/) || null;
							const text = number
								? condition.replace(/\d+/, "").trim()
								: condition;
							return (
								<Chip
									key={condition}
									sx={conditionsChipStyle}
									label={
										<>
											<span>{`${text} `}</span>
											<span style={{ color: "#3470FF", fontWeight: "600" }}>
												{number}
											</span>
										</>
									}
								/>
							);
						})}
						<Chip
							sx={conditionsChipStyle}
							label={
								<>
									<span>Mileage: </span>
									<span style={{ color: "#3470FF", fontWeight: "600" }}>
										{Intl.NumberFormat("en-US").format(mileage)}
									</span>
								</>
							}
						/>
						<Chip
							sx={conditionsChipStyle}
							label={
								<>
									<span>Price: </span>
									<span style={{ color: "#3470FF", fontWeight: "600" }}>
										{rentalPrice}
									</span>
								</>
							}
						/>
					</Box>
				</Box>
			</CardContent>
			<CardActions
				disableSpacing={true}
				sx={{ padding: "0" }}>
				<IconButton
					onClick={onClose}
					sx={{ position: "absolute", top: "8px", right: "8px" }}
					aria-label="add to favorites">
					<CloseX />
				</IconButton>
				<MainButton
					href={`tel:${callNumber}`}
					sx={mainButtonStyle}>
					Rental car
				</MainButton>
			</CardActions>
		</Card>
	);
};

export default ModalCard;
