import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    error:null,
  }

  const handleDelete = (id, data) => {
    const newArray = data.filter(item => item.id !== id);
    return newArray;
  };

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
          CategoryDeleteSuccess: (state,id) => {
            state.data=handleDelete(id, state.data)
          },
          CategoryDeleteFailure: (state, action) => {
            state.error = action.payload;
          },
          CategoryPostSuccess: (state,obj) => {
            state.data.push(obj)
          },
          CategoryPostFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {CategorySuccess, CategoryFailure, CategoryDeleteSuccess, CategoryDeleteFailure, CategoryPostSuccess, CategoryPostFailure}=CategorySlice.actions

export default CategorySlice.reducer