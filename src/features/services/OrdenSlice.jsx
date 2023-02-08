import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

export const OrdenSlice= createSlice({
    name:'orden',
    initialState,
    reducers:{
        OrdenSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          OrdenFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {OrdenSuccess, OrdenFailure}=OrdenSlice.actions

export default OrdenSlice.reducer