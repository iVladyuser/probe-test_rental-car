import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./carOperations";

const initialState = {
	carsData: [],
	favorites: [],
	isLoading: false,
	error: null,
};

const carSlice = createSlice({
	name: "cars",
	initialState,
	reducers: {
		addFavorite: {
			reducer(state, action) {
				state.favorites.push(action.payload);
			},
		},
		deleteFavorite: {
			reducer(state, action) {
				state.favorites = state.favorites.filter(
					(item) => item !== action.payload
				);
			},
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCars.fulfilled, (state, action) => {
				state.carsData = action.payload;
				state.isLoading = false;
			})
			.addCase(getCars.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCars.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const { addFavorite, deleteFavorite } = carSlice.actions;
export const carReducer = carSlice.reducer;
export const selectCars = (state) => state.cars.carsData;
export const selectisLoading = (state) => state.cars.isLoading;
export const selectFavorites = (state) => state.cars.favorites;
