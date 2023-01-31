import axios from "axios"
import { fetchDataSuccess, fetchDataFailure } from "../../features/services/StoreSlice";

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
