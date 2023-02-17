import Swal from "sweetalert2";
import axios from "axios";
import { CategoryDeleteSuccess, CategoryDeleteFailure } from "../../features/services/CategorySlice";
import { productDeleteSuccess, productDeleteFailure } from "../../features/services/ProductSlice";
import { serviceDeleteSuccess, serviceDeleteFailure } from "../../features/services/ServiceSlice";
import { DoctorDeleteFailure, DoctorDeleteSuccess } from "../../features/services/DoctorSlice";
import { promotionDeleteSuccess, promotionDeleteFailure } from "../../features/services/PromotionSlice";


export const deleteProductApi = id => async dispatch=>{
    try {
      const token = localStorage.getItem('token');
      const api = axios.create({
        baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await api.delete(`/admin/product/id?id=${id}`);
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
      const token = localStorage.getItem('token');
      const api = axios.create({
        baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await api.delete(`/admin/service/${id}`);
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
try{
    const token = localStorage.getItem('token');
    const api = axios.create({
      baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await api.delete(`/admin/category/${id}`);
    dispatch(CategoryDeleteSuccess(id));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Categoría eliminado correctamente'
  });
} catch (error) {
  dispatch(CategoryDeleteFailure(error.message));
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "No se puede eliminar una categoría con productos"
});
  }
}
  
  export const deleteDoctorApi = id => async dispatch=>{

    try {
      const token = localStorage.getItem('token');
      const api = axios.create({
        baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await api.delete(`/admin/doctor/${id}`);
      dispatch(DoctorDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Doctor eliminado correctamente'
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
      const token = localStorage.getItem('token');
      const api = axios.create({
        baseURL: 'https://api-gateway-production-d841.up.railway.app/api',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await api.delete(`/admin/promotion/${id}`);
      dispatch(promotionDeleteSuccess(id));
      Swal.fire({
        title: 'Excelente!',
        icon: 'success',
        text: 'Promoción eliminada correctamente'
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