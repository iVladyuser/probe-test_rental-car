import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { CatalogItem, Loader } from "../components";
import {
	selectCars,
	selectFavorites,
	selectisLoading,
} from "../redux/cars/carSelectors";
import { getFilteredCars } from "../redux/cars/carOperations";

export const Favorites = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectisLoading);
	const cars = useSelector(selectCars);
	const favorites = useSelector(selectFavorites);

	const favoritesCars = cars.filter((car) => favorites.includes(car.id));

	useEffect(() => {
		dispatch(getFilteredCars);
	}, [dispatch]);

	return (
		<>
			<Box
				autoComplete="off"
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: "18px",
					margin: "50px auto",
				}}></Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "50px 29px",
					flexBasis: "calc((100% - 29px)/4)",
				}}>
				{favoritesCars.map((car) => (
					<CatalogItem
						key={car.id}
						car={car}
					/>
				))}
			</Box>
			{isLoading && <Loader />}
		</>
	);
};

export default Favorites;
