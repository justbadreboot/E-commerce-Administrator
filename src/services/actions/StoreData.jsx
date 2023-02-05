import axios from "axios"
import { fetchDataSuccess, fetchDataFailure } from "../../features/services/StoreSlice";
import { CategorySuccess,CategoryFailure } from "../../features/services/CategorySlice";
import { productSuccess, productFailure } from "../../features/services/ProductSlice";
import { serviceSuccess, serviceFailure } from "../../features/services/ServiceSlice";
import { DoctorSuccess, DoctorFailure } from "../../features/services/DoctorSlice";

export const StoreData = () => {
    return async (dispatch) => {
        try {
          const response = await axios.get('https://landing-production-11fd.up.railway.app/api/landing');
          dispatch(fetchDataSuccess(response.data));
        } catch (error) {
          dispatch(fetchDataFailure(error.message));
        }
      };
}
export const CategoryData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://product-production-cf12.up.railway.app/api/category/all');
        dispatch(CategorySuccess(response1.data));
      } catch (error) {
        dispatch(CategoryFailure(error.message));
      }
    };
  };

  export const ProductsData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://product-production-cf12.up.railway.app/api/product/all');
        dispatch(productSuccess(response1.data));
      } catch (error) {
        dispatch(productFailure(error.message));
      }
    };
  };

  export const ServiceData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://service-production-bb52.up.railway.app/api/service');
        dispatch(serviceSuccess(response1.data));
      } catch (error) {
        dispatch(serviceFailure(error.message));
      }
    };
  };

  export const DoctorData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://service-production-bb52.up.railway.app/api/doctor');
        dispatch(DoctorSuccess(response1.data));
      } catch (error) {
        dispatch(DoctorFailure(error.message));
      }
    };
  };