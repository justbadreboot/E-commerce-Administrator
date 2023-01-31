import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import apiReducer from '../services/Reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    api: apiReducer,
  },
});
