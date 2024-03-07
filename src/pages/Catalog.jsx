import {
	SearchBar,
	Loader,
	CatalogItem,
	MainButton,
	LoadMoreBtn,
} from "../components";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainButtonStyle } from "../styles/styles";
import { selectCars } from "../redux/cars/carSelectors";
import { getCars } from "../redux/cars/carOperations";
import { selectisLoading } from "../redux/cars/carSelectors";

const Catalog = () => {
	const dispatch = useDispatch();
	const cars = useSelector(selectCars);
	const isLoading = useSelector(selectisLoading);
	const [filter, setFilter] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	const carMakes = [];
	for (const car of cars) {
		const carMake = car.make;
		if (carMake) {
			carMakes.push(carMake);
		}
	}

	const filteredCars = cars.filter((car) => car.make === filter);

	useEffect(() => {
		dispatch(getCars({ page: currentPage }));
	}, [currentPage, dispatch]);

	const handleSubmitSearch = (evt) => {
		evt.preventDefault();
		setFilter(evt.target.cars.value);
		return null;
	};

	const handleLoadMore = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	return (
		<>
			<Box
				component="form"
				autoComplete="off"
				onSubmit={handleSubmitSearch}
				sx={{
					display: "flex",
					justifyContent: "center",
					gap: "18px",
					margin: "150px auto 50px",
				}}>
				<SearchBar opts={[...new Set(carMakes)]} />
				<MainButton
					type={"submit"}
					sx={{ ...mainButtonStyle, padding: "14px 44px" }}>
					Search
				</MainButton>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: "50px 29px",
					flexBasis: "calc((100% - 29px) / 4)",
				}}>
				{filter
					? filteredCars.map((car) => (
							<CatalogItem
								key={car.id}
								car={car}
							/>
					  ))
					: cars.map((car) => (
							<CatalogItem
								key={car.id}
								car={car}
							/>
					  ))}
			</Box>
			<LoadMoreBtn
				onClick={handleLoadMore}
				disabled={isLoading}
				sx={{ display: "block", margin: "100px auto 150px" }}>
				{isLoading ? "Loading..." : "Load more"}
			</LoadMoreBtn>
			{isLoading && <Loader />}
		</>
	);
};

export default Catalog;
