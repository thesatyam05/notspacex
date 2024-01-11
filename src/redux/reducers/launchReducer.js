// launchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	launches: [],
	filteredLaunches: [],
	startDate: null,
	endDate: null,
	launchType: 'all',
	isModalOpen: false,
	selectedLaunch: null,
};

const launchSlice = createSlice({
	name: 'launch',
	initialState,
	reducers: {
		setLaunches: (state, action) => {
			state.launches = action.payload;
			state.filteredLaunches = action.payload;
		},
		setStartDate: (state, action) => {
			state.startDate = action.payload;
		},
		setEndDate: (state, action) => {
			state.endDate = action.payload;
		},
		setLaunchType: (state, action) => {
			state.launchType = action.payload;
		},
		setIsModalOpen: (state, action) => {
			state.isModalOpen = action.payload;
		},
		setSelectedLaunch: (state, action) => {
			state.selectedLaunch = action.payload;
		},
		setFilteredLaunches: (state, action) => {
			state.filteredLaunches = action.payload;
		},
	},
});

export const {
	setLaunches,
	setStartDate,
	setEndDate,
	setLaunchType,
	setIsModalOpen,
	setSelectedLaunch,
	setFilteredLaunches,
} = launchSlice.actions;

export default launchSlice.reducer;
