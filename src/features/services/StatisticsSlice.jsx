import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Tuser: 0,
    Fmonth:0,
    Ftoday:0,
    FcountT:0,
    Month:[
    ],
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
          MonthSuccess: (state, action) => {
            state.Fmonth = action.payload.month;
            state.Ftoday = action.payload.today;
            state.FcountT = action.payload.countTodayInvoice;

            state.error = null;
          },
          TodaySuccess: (state, action) => {
            state.Ftoday = action.payload;
            state.error = null;
          },
          MonthlichSuccess: (state, action) => {
            state.Month = action.payload;
            state.error = null;
          },
    }
})

export const {ClientNSuccess, StatisticsFailure, MonthSuccess, TodaySuccess, MonthlichSuccess}=StatisticsSlice.actions

export default StatisticsSlice.reducer