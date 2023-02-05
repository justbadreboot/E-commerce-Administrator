import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

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
    }
})

export const {DoctorSuccess, DoctorFailure}=DoctorSlice.actions

export default DoctorSlice.reducer