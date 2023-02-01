import axios from "axios"
import { fetchDataSuccess, fetchDataFailure } from "../../features/services/StoreSlice";
import { CategorySuccess,CategoryFailure } from "../../features/services/CategorySlice";

export const StoreData = () => {
    return async (dispatch) => {
        try {
          const response = await axios.get('https://product-production-cf12.up.railway.app/api/category/all');
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
