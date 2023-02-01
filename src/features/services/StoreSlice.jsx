import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    data: [
        
    ],
    error:null,
    loading:false
  }
  export const fetchData = createAsyncThunk(
    "store/fetchData",
    async (arg, { rejectWithValue }) => {
      try {
        const response = await axios.get(
          "https://product-production-cf12.up.railway.app/api/category/all"
        );
        return response.data;
      } catch (error) {
        if (!error.response) {
          throw error;
        }
        return rejectWithValue(error.response.data);
      }
    }
  );
export const StoreSlice= createSlice({
    name:'store',
    initialState,
    reducers: {
      fetchDataSuccess: (state, action) => {
        state.data = action.payload;
        state.error = null;
        state.loading = false;
      },
      fetchDataFailure: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }
    },
    extraReducers: {
      [fetchData.pending]: (state) => {
        state.loading = true;
      },
      [fetchData.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      }
    }
})

export const {fetchDataSuccess, fetchDataFailure}=StoreSlice.actions

export default StoreSlice.reducer