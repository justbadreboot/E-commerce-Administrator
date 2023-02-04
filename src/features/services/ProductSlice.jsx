import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data: [
    ]
  }
export const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        productSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          productFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})
export const {productSuccess, productFailure}=ProductSlice.actions
export default ProductSlice.reducer
