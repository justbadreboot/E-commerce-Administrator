import { async } from '@firebase/util';
import axios from 'axios';
import { CategorySuccess, CategoryFailure } from '../../features/services/CategorySlice';
import { productSuccess, productFailure } from '../../features/services/ProductSlice';
import { DoctorSuccess,DoctorFailure } from '../../features/services/DoctorSlice';

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

export const postDoctorApi=(id, data)=>async dispatch=>{
  try{
    const response = await axios.post(`https://service-production-bb52.up.railway.app/api/specialty/${id}/doctor`, data);
    dispatch(DoctorSuccess(response.data));
} catch (error) {
  dispatch(DoctorFailure(error.message));
}
}