import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: []
  }

export const StoreSlice= createSlice({
    name:'store',
    initialState,
    reducers:{
        fetchDataSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          fetchDataFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {fetchDataSuccess, fetchDataFailure}=StoreSlice.actions

export default StoreSlice.reducer