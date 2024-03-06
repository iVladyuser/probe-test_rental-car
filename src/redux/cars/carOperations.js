import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
	baseURL: "https://65e79a4653d564627a8f0bd3.mockapi.io/",
});

export const getCars = createAsyncThunk(
	"cars/getAll",
	async ({ page = 1 }, thunkAPI) => {
		try {
			const { data } = await instance.get("/adverts", {
				params: { page, limit: 12 },
			});
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);

export const getFilteredCars = createAsyncThunk(
	"cars/getAll",
	async (_, thunkAPI) => {
		try {
			const { data } = await instance.get("/adverts");
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message);
		}
	}
);
