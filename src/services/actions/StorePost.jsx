import axios from 'axios';
import { CategorySuccess, CategoryFailure } from '../../features/services/CategorySlice';

export const postDataToApi = data => async dispatch => {
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/category', data);
    dispatch(CategorySuccess(response.data));
  } catch (error) {
    dispatch(CategoryFailure(error.message));
  }
};
