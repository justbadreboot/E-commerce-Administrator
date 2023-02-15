import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data: [
    ],
    error:null,
  }
  const handleDelete = (id, data) => {
    const newArray = data.filter(item => item.id !== id);
    return newArray;
  };
export const ServiceSlice = createSlice({
    name:'services',
    initialState,
    reducers:{
        serviceSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          serviceFailure: (state, action) => {
            state.error = action.payload;
          },
          serviceDeleteSuccess:(state,id)=>{
            state.data=handleDelete(id, state.data)
          },
          serviceDeleteFailure:(state, action)=>{
            state.error = action.payload;
          },
          servicePostSuccess:(state,obj)=>{
            state.data.push(obj)
          },
          servicePostFailure:(state, action)=>{
            state.error = action.payload;
          }
          
    }
})
export const {serviceSuccess, serviceFailure, serviceDeleteSuccess, serviceDeleteFailure, servicePostSuccess, servicePostFailure}=ServiceSlice.actions
export default ServiceSlice.reducer