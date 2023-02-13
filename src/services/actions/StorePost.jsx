import { async } from '@firebase/util';
import axios from 'axios';
import { DoctorPostSuccess, DoctorPostFailure } from '../../features/services/DoctorSlice';
import { productPostSuccess, productPostFailure } from '../../features/services/ProductSlice';
import { CategoryPostSuccess, CategoryPostFailure } from '../../features/services/CategorySlice';
import { servicePostSuccess, servicePostFailure } from '../../features/services/ServiceSlice';
import { EspecialidadPostSuccess, EspecialidadPostFailure } from '../../features/services/EspecialidadSlice';
import { promotionPostSuccess, promotionFailure } from '../../features/services/PromotionSlice';
import Swal from "sweetalert2";

export const postDataToApi = data => async dispatch => {
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/category', data);
    dispatch(CategoryPostSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Categoria añadido correctamente'
  });
  } catch (error) {
    dispatch(CategoryPostFailure(error.message));
    console.log(error.message)
    Swal.fire({
      title: 'Error!',
      icon: 'error',
      text: "Porfavor, intenta de nuevo en unos momentos"
  });
  }
};

export const postProductApi =data=> async dispatch=>{
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/product', data);
    dispatch(productPostSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Producto añadido correctamente'
  });
  } catch (error) {
    dispatch(productPostFailure(error.message));
    Swal.fire({
      title: 'Error!',
      icon: 'error',
      text: "Porfavor, intenta de nuevo en unos momentos"
  });
  }

}

export const postDoctorApi=(id, data)=>async dispatch=>{
  try{
    const response = await axios.post(`https://service-production-bb52.up.railway.app/api/specialty/${id}/doctor`, data);
    dispatch(DoctorPostSuccess(response.data));
    console.log(response)
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Producto añadido correctamente'
  });
} catch (error) {
  dispatch(DoctorPostFailure(error.message));
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "Porfavor, intenta de nuevo en unos momentos"
});
}
}
export const postServicesApi=(id, data)=>async dispatch=>{
  try{
    const response = await axios.post(`https://service-production-bb52.up.railway.app/api/specialty/${id}/service`, data);
    dispatch(servicePostSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Servicio añadido correctamente'
  });
} catch (error) {
  dispatch(servicePostFailure(error.message));
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "Porfavor, intenta de nuevo en unos momentos"
});
}
}

export const postSpecialityApi=data=>async dispatch=>{
  try{
    const response = await axios.post(`https://service-production-bb52.up.railway.app/api/specialty`, data);
    dispatch(EspecialidadPostSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Especialidad añadida correctamente'
  });
} catch (error) {
  dispatch(EspecialidadPostFailure(error.message));
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "Porfavor, intenta de nuevo en unos momentos"
});
}
}
export const postBillApi=data=>async dispatch=>{
  try{
    const response = await axios.post(`https://invoice-production-ea9a.up.railway.app/api/invoice/order`, data);
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Especialidad añadida correctamente'
  });
} catch (error) {
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "Porfavor, intenta de nuevo en unos momentos"
});
}
}
export const postPromotionApi=data=>async dispatch=>{
  try{
    const response = await axios.post(`https://product-production-cf12.up.railway.app/api/admin/promotion`, data);
    dispatch(promotionPostSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Especialidad añadida correctamente'
  });
} catch (error) {
  dispatch(promotionFailure(error.message));
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "Porfavor, intenta de nuevo en unos momentos"
});
}
}