import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  StoreReducer  from '../features/services/StoreSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    store:StoreReducer,
  },
});
