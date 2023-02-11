import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Tuser: 0,
    error:null,
  }

export const StatisticsSlice= createSlice({
    name:'statistics',
    initialState,
    reducers:{
        ClientNSuccess: (state, action) => {
            state.Tuser = action.payload;
            state.error = null;
          },
          StatisticsFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {ClientNSuccess, StatisticsFailure}=StatisticsSlice.actions

export default StatisticsSlice.reducer