import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data: [
    ]
  }

  const handleDelete = (id, data) => {
    const newArray = data.filter(item => item.id !== id);
    return newArray;
  };
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
          productDeleteSuccess: (state, id) => {
            state.data=handleDelete(id, state.data)
          },
          productDeleteFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})
export const {productSuccess, productFailure, productDeleteSuccess, productDeleteFailure}=ProductSlice.actions
export default ProductSlice.reducer
