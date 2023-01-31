import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: null
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    fetchDataFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure } = apiSlice.actions;

export default apiSlice.reducer;
