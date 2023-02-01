import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

export const CategorySlice= createSlice({
    name:'category',
    initialState,
    reducers:{
        CategorySuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          CategoryFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {CategorySuccess, CategoryFailure}=CategorySlice.actions

export default CategorySlice.reducer