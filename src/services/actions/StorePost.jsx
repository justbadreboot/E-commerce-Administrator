import { async } from '@firebase/util';
import axios from 'axios';
import { CategorySuccess, CategoryFailure } from '../../features/services/CategorySlice';
import { productSuccess, productFailure } from '../../features/services/ProductSlice';

export const postDataToApi = data => async dispatch => {
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/category', data);
    dispatch(CategorySuccess(response.data));
  } catch (error) {
    dispatch(CategoryFailure(error.message));
  }
};

export const postProductApi =data=> async dispatch=>{
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/product', data);
    dispatch(productSuccess(response.data));
  } catch (error) {
    dispatch(productFailure(error.message));
  }

}