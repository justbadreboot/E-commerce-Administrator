import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import  StoreReducer  from '../features/services/StoreSlice';
import ProductReducer from '../features/services/ProductSlice';
import CategoryReducer from '../features/services/CategorySlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    store:StoreReducer,
    products:ProductReducer,
    category:CategoryReducer,
    putSlice:StoreReducer
  },
});
