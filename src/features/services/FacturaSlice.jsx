import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

export const FacturaSlice= createSlice({
    name:'factura',
    initialState,
    reducers:{
        FacturaSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          FacturaFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {FacturaSuccess, FacturaFailure}=FacturaSlice.actions

export default FacturaSlice.reducer