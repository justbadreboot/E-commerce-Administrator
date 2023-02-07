import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }
  const handleDelete = (id, data) => {
    const newArray = data.filter(item => item.id !== id);
    return newArray;
  };

export const DoctorSlice= createSlice({
    name:'doctor',
    initialState,
    reducers:{
        DoctorSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          DoctorFailure: (state, action) => {
            state.error = action.payload;
          },
          DoctorDeleteSuccess: (state, id) => {
            state.data=handleDelete(id, state.data)
          },
          DoctorDeleteFailure: (state, action) => {
            state.error = action.payload;
          },
          DoctorPostSuccess: (state, action) => {
            state.data.push(action)
          },
          DoctorDeleteFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {DoctorSuccess, DoctorFailure, DoctorDeleteSuccess, DoctorDeleteFailure, DoctorPostSuccess, DoctorPostFailure}=DoctorSlice.actions

export default DoctorSlice.reducer