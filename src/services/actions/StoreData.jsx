import axios from "axios"
import { fetchDataSuccess, fetchDataFailure } from "../../features/services/StoreSlice";
import { CategorySuccess,CategoryFailure } from "../../features/services/CategorySlice";
import { productSuccess, productFailure } from "../../features/services/ProductSlice";
import { serviceSuccess, serviceFailure } from "../../features/services/ServiceSlice";
import { DoctorSuccess, DoctorFailure } from "../../features/services/DoctorSlice";
import { EspecialidadSuccess, EspecialidadFailure } from "../../features/services/EspecialidadSlice";
import { OrdenSuccess, OrdenFailure } from "../../features/services/OrdenSlice";
import { OrdenRepSuccess, OrdenRepFailure } from "../../features/services/OrderRepSlice";
import { DireccionRepSuccess, DireccionRepFailure, ClientRepSuccess, ClientRepFailure } from "../../features/services/DireccionRepSlice";
import { FacturaSuccess,FacturaFailure } from "../../features/services/FacturaSlice";
import { ClientNSuccess, StatisticsFailure, MonthSuccess, TodaySuccess, MonthlichSuccess, WeekSuccess } from "../../features/services/StatisticsSlice";
import { promotionSuccess, promotionFailure } from "../../features/services/PromotionSlice";

export const StoreData = () => {
    return async (dispatch) => {
      try {
        const token=localStorage.getItem("token")
        const api = axios.create({
          baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
          /*headers: {
            Authorization: `Bearer ${token}`,
          },*/
        });
        const response = await api.get('/landing');
        dispatch(fetchDataSuccess(response.data));
      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
      };
}
export const CategoryData = () => {
    return async (dispatch) => {
      
      try {
        const response1 = await axios.get('https://product-production-cf12.up.railway.app/api/public/category/all');
        dispatch(CategorySuccess(response1.data));
      } catch (error) {
        dispatch(CategoryFailure(error.message));
      }
    };
  };

  export const ProductsData = () => {
    return async (dispatch) => {
      try {
        const token=localStorage.getItem("token")
        const api = axios.create({
          baseURL: 'https://api-gateway-production-d841.up.railway.app/api'/*'https://product-production-cf12.up.railway.app/api'*/,
          /*headers: {
            'Authorization': `Bearer ${token}`,
          },*/
        });
        console.log(api)
        const response = await api.get('/public/product/all');
        dispatch(productSuccess(response.data));
      } catch (error) {
        dispatch(productFailure(error.message));
      }
    };
  };

  export const ServiceData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://api-gateway-production-d841.up.railway.app/api/service');
        dispatch(serviceSuccess(response1.data));
      } catch (error) {
        dispatch(serviceFailure(error.message));
      }
    };
  };

  export const DoctorData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://api-gateway-production-d841.up.railway.app/api/doctor');
        dispatch(DoctorSuccess(response1.data));
      } catch (error) {
        dispatch(DoctorFailure(error.message));
      }
    };
  };
  export const EspecialidadData = () => {
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://api-gateway-production-d841.up.railway.app/api/specialty');
        dispatch(EspecialidadSuccess(response1.data));
      } catch (error) {
        dispatch(EspecialidadFailure(error.message));
      }
    };
  };
  export const OrdenesData=()=>{
    return async (dispatch) => {
      const token=localStorage.getItem("token")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
      try {
        const response1 = await axios.get('https://order-production-bfbc.up.railway.app/api/admin/order/all');
        dispatch(OrdenSuccess(response1.data));
      } catch (error) {
        dispatch(OrdenFailure(error.message));
      }
    };
  }
  export const OrdenesRepartidorData=()=>{
    return async (dispatch) => {
      try {
        const response1 = await axios.get('https://order-production-bfbc.up.railway.app/api/repartidor/order/delivery/1');
        dispatch(OrdenRepSuccess(response1.data));
      } catch (error) {
        dispatch(OrdenRepFailure(error.message));
      }
    };
  }
  export const DireccionesData=(id)=>{
    return async (dispatch) => {
      try {
        const response1 = await axios.get(`https://client-production-d410.up.railway.app/api/direction/${id}`);
        dispatch(DireccionRepSuccess(response1.data));
      } catch (error) {
        dispatch(DireccionRepFailure(error.message));
      }
    };
  }
  export const ClientData=(id)=>{
    return async (dispatch) => {
      try {
        const response1 = await axios.get(`https://client-production-d410.up.railway.app/api/client/${id}`);
        dispatch(ClientRepSuccess(response1.data));
      } catch (error) {
        dispatch(ClientRepFailure(error.message));
      }
    };
  }
  export const FacturaData=()=>{
    return async (dispatch) => {
      try {
        const response1 = await axios.get(`https://invoice-production-ea9a.up.railway.app/api/invoice`);
        dispatch( FacturaSuccess(response1.data));
      } catch (error) {
        dispatch(FacturaFailure(error.message));
      }
    };
  }
  export const StatisticsData=()=>{
    return async (dispatch) => {
      try {
        const response1 = await axios.get(`https://client-production-d410.up.railway.app/api/client/count`);
        dispatch( ClientNSuccess(response1.data));
      } catch (error) {
        dispatch(StatisticsFailure(error.message));
      }
      try {
        const response2 = await axios.get(`https://invoice-production-ea9a.up.railway.app/api/invoice/sales/today`);
        dispatch( MonthSuccess(response2.data));
      } catch (error) {
        dispatch(StatisticsFailure(error.message));
      }
      try {
        const response2 = await axios.get(`https://invoice-production-ea9a.up.railway.app/api/invoice/sales/month`);
        dispatch( MonthlichSuccess(response2.data));
      } catch (error) {
        dispatch(StatisticsFailure(error.message));
      }
      try {
        const response2 = await axios.get(`https://invoice-production-ea9a.up.railway.app/api/invoice/sales/week`);
        dispatch( WeekSuccess(response2.data));
      } catch (error) {
        dispatch(StatisticsFailure(error.message));
      }
    };
    
  }
  export const PromotionData=()=>{
    return async (dispatch) => {
      try {
        const response1 = await axios.get(`https://product-production-cf12.up.railway.app/api/public/promotion/all`);
        dispatch( promotionSuccess(response1.data));
      } catch (error) {
        dispatch(promotionFailure(error.message));
      }
    };
  }