import Swal from "sweetalert2";
import axios from "axios";
import { productSuccess, productFailure } from '../../features/services/ProductSlice';
import { serviceSuccess, serviceFailure } from "../../features/services/ServiceSlice";
import { CategoryDeleteSuccess, CategoryDeleteFailure } from "../../features/services/CategorySlice";
import { productDeleteSuccess, productDeleteFailure } from "../../features/services/ProductSlice";
import { serviceDeleteSuccess, serviceDeleteFailure } from "../../features/services/ServiceSlice";
import { DoctorDeleteFailure, DoctorDeleteSuccess } from "../../features/services/DoctorSlice";
import { promotionDeleteSuccess, promotionDeleteFailure } from "../../features/services/PromotionSlice";


export const deleteProductApi = id => async dispatch=>{
    try {
      const response = await axios.delete(`https://product-production-cf12.up.railway.app/api/admin/product/id?id=${id}`);
      dispatch(productDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Producto eliminado correctamente'
    });
    } catch (error) {
      dispatch(productDeleteFailure(id));
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: "Porfavor, intenta de nuevo en unos momentos"
    });
    }
  
  }

  export const deleteServicesApi = id => async dispatch=>{
    try {
      const response = await axios.delete(`https://service-production-bb52.up.railway.app/api/service/${id}`);
      dispatch(serviceDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Servicio eliminado correctamente'
    });
    } catch (error) {
      dispatch(serviceDeleteFailure(error.message));
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: "Porfavor, intenta de nuevo en unos momentos"
    });
    }
  
  }

  export const deleteCategoryApi = id => async dispatch=>{
    try {
      const response = await axios.delete(`https://product-production-cf12.up.railway.app/api/admin/category/${id}`);
      dispatch(CategoryDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Servicio eliminado correctamente'
    });
    } catch (error) {
      dispatch(CategoryDeleteFailure(error.message));
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: "Porfavor, intenta de nuevo en unos momentos"
    });
    }
  
  }
  export const deleteDoctorApi = id => async dispatch=>{
    try {
      const response = await axios.delete(`https://service-production-bb52.up.railway.app/api/doctor/${id}`);
      dispatch(DoctorDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Servicio eliminado correctamente'
    });
    } catch (error) {
      dispatch(DoctorDeleteFailure(error.message));
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: "Porfavor, intenta de nuevo en unos momentos"
    });
    }
  
  }
  export const deletePromotionApi = id => async dispatch=>{
    try {
      const response = await axios.delete(`https://product-production-cf12.up.railway.app/api/admin/promotion/${id}`);
      dispatch(promotionDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Servicio eliminado correctamente'
    });
    } catch (error) {
      dispatch(promotionDeleteFailure(error.message));
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        text: "Porfavor, intenta de nuevo en unos momentos"
    });
    }
  
  }