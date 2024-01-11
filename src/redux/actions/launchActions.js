// launchActions.js
import {
	setLaunches,
	setFilteredLaunches,
	setStartDate,
	setEndDate,
	setLaunchType,
	setIsModalOpen,
	setSelectedLaunch,
} from '@/redux/reducers/launchReducer';

export const fetchLaunches = (launchType) => async (dispatch) => {
	try {
		let apiUrl = 'https://api.spacexdata.com/v4/launches';

		if (launchType === 'upcoming') {
			apiUrl = apiUrl + '/upcoming';
		} else if (launchType === 'past') {
			apiUrl = apiUrl + '/past';
		}

		const response = await fetch(apiUrl);
		const data = await response.json();

		dispatch(setLaunches(data));
		dispatch(setFilteredLaunches(data));
	} catch (error) {
		console.error('Error fetching SpaceX launches:', error);
	}
};

export const updateStartDate = (startDate) => (dispatch) => {
	dispatch(setStartDate(startDate));
};

export const updateEndDate = (endDate) => (dispatch) => {
	dispatch(setEndDate(endDate));
};

export const updateLaunchType = (launchType) => (dispatch) => {
	dispatch(setLaunchType(launchType));
};

export const toggleModal = (launch) => (dispatch) => {
	dispatch(setIsModalOpen((prev) => !prev));
	dispatch(setSelectedLaunch(launch));
};
