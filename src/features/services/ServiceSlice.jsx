import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data: [
    ]
  }
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
    }
})
export const {serviceSuccess, serviceFailure}=ServiceSlice.actions
export default ServiceSlice.reducer