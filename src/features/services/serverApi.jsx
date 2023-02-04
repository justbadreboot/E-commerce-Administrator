import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData=createAsyncThunk(
  'data/fetchData',
  async()=>{
    const response=await fetch('https://product-production-cf12.up.railway.app/api/product/all');
    const data=await response.json();
    return data;
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error;
    },
  },
})

export const{}=dataSlice.actions;
export default dataSlice.reducer;
