import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

export const OrdenRepSlice= createSlice({
    name:'ordenRep',
    initialState,
    reducers:{
        OrdenRepSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          OrdenRepFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {OrdenRepSuccess, OrdenRepFailure}=OrdenRepSlice.actions

export default OrdenRepSlice.reducer