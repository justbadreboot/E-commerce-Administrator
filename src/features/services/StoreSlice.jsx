import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    data: [
      {
        name:"KrugerMed",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis cupiditate commodi eveniet laboriosam voluptates quos magni culpa, nobis incidunt ullam necessitatibus non impedit id dolorem. Deleniti ducimus quae voluptates?",
        address:"Quito-Ecuador-...",
        email:"Krugermed@correo.com",
        mission:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis maiores recusandae natus asperiores ducimus ab nisi quos error ipsam, suscipit eum. Quo, commodi dolorem! Alias, harum architecto? Doloribus, possimus.",
        vision:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis cupiditate commodi eveniet laboriosam voluptates quos magni culpa, nobis incidunt ullam necessitatibus non impedit id dolorem. Deleniti ducimus quae voluptates?",
        phone:"(+513) 02322598"
      }
    ],
    error:null,
    loading:false
  }
 
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
      },
      putData: (state, action) => {
        state.data = action.payload;
      },
    },
})

export const { putData } = StoreSlice.actions;
export const {fetchDataSuccess, fetchDataFailure}=StoreSlice.actions

export default StoreSlice.reducer