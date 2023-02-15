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
export const PromotionsSlice = createSlice({
    name:'promotions',
    initialState,
    reducers:{
        promotionSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          promotionFailure: (state, action) => {
            state.error = action.payload;
          },
          promotionDeleteSuccess: (state, id) => {
            state.data=handleDelete(id, state.data)
          },
          promotionDeleteFailure: (state, action) => {
            state.error = action.payload;
          },
          promotionPostSuccess: (state, obj) => {
            state.data.push(obj)
          },
          promotionPostFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})
export const {promotionSuccess, promotionFailure, promotionDeleteSuccess, promotionDeleteFailure, promotionPostSuccess, promotionPostFailure}=PromotionsSlice.actions
export default PromotionsSlice.reducer
