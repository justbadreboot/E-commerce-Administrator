import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [
        
    ],
    clients:[],
    error:null,
  }

export const DireccionRepSlice= createSlice({
    name:'direccionRep',
    initialState,
    reducers:{
        DireccionRepSuccess: (state, action) => {
            if(!(state.data.find(object=>object.id===action.payload.id))){
                state.data.push(action.payload);
                state.error = null;
            }
          },
         DireccionRepFailure: (state, action) => {
            state.error = action.payload;
          },
          ClientRepSuccess: (state, action) => {
            if(!(state.clients.find(object=>object.id===action.payload.id))){
                state.clients.push(action.payload);
                state.error = null;
            }
          },
         ClientRepFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})

export const {DireccionRepSuccess, DireccionRepFailure, ClientRepSuccess, ClientRepFailure}=DireccionRepSlice.actions

export default DireccionRepSlice.reducer