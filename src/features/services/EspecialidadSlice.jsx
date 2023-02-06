import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

export const EspecialidadSlice= createSlice({
    name:'especialidad',
    initialState,
    reducers:{
        EspecialidadSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          EspecialidadFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {EspecialidadSuccess, EspecialidadFailure}=EspecialidadSlice.actions

export default EspecialidadSlice.reducer