import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@/redux/reducers/userReducer';
import launchReducer from '@/redux/reducers/launchReducer';

export const store = configureStore({
	reducer: {
		user: userReducer,
		launch: launchReducer,
	},
});
