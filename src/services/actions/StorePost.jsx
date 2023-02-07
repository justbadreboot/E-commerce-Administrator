import { async } from '@firebase/util';
import axios from 'axios';
import { CategorySuccess, CategoryFailure } from '../../features/services/CategorySlice';
import { productSuccess, productFailure } from '../../features/services/ProductSlice';
import { DoctorSuccess,DoctorFailure } from '../../features/services/DoctorSlice';
import { serviceSuccess, serviceFailure } from '../../features/services/ServiceSlice';
import { EspecialidadSuccess, EspecialidadFailure } from '../../features/services/EspecialidadSlice';
import Swal from "sweetalert2";

export const postDataToApi = data => async dispatch => {
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/category', data);
    dispatch(CategorySuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Categoria añadido correctamente'
  });
  } catch (error) {
    dispatch(CategoryFailure(error.message));
  }
};

export const postProductApi =data=> async dispatch=>{
  try {
    const response = await axios.post('https://product-production-cf12.up.railway.app/api/product', data);
    dispatch(productSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Producto añadido correctamente'
  });
  } catch (error) {
    dispatch(productFailure(error.message));
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
    dispatch(DoctorSuccess(response.data));
} catch (error) {
  dispatch(DoctorFailure(error.message));
}
}
export const postServicesApi=(id, data)=>async dispatch=>{
  try{
    const response = await axios.post(`https://service-production-bb52.up.railway.app/api/specialty/${id}/service`, data);
    dispatch(serviceSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Servicio añadido correctamente'
  });
} catch (error) {
  dispatch(serviceFailure(error.message));
}
}

export const postSpecialityApi=data=>async dispatch=>{
  try{
    const response = await axios.post(`https://service-production-bb52.up.railway.app/api/specialty`, data);
    dispatch(EspecialidadSuccess(response.data));
    Swal.fire({
      title: 'Excelente!',
      icon: 'success',
      text: 'Especialidad añadida correctamente'
  });
} catch (error) {
  dispatch(EspecialidadFailure(error.message));
  Swal.fire({
    title: 'Error!',
    icon: 'error',
    text: "Porfavor, intenta de nuevo en unos momentos"
});
}
}