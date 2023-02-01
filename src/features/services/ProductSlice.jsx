import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [
        { foto: "./logo192.png", nombre: "Paracetamol", categoria: "Analgésico", stock: "130", marca: "bayern", caducidad: "Ingerible", peso: "600", descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, sed ducimus explicabo aut earum atque fugiat labore nulla voluptates modi commodi amet quaerat vel. Non cumque molestiae nemo odit?" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Por Expirar", peso: "600" },
    { foto: "./logo192.png", nombre: "Arten", categoria: "Corticoides", stock: "130", marca: "bayern", caducidad: "Expirado", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Expirado", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Por Expirar", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Por Expirar", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Por Expirar", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Por Expirar", peso: "600" },
    { foto: "./logo192.png", nombre: "Ibuprofeno", categoria: "AINE", stock: "130", marca: "meditin", caducidad: "Por Expirar", peso: "600" },
    ]
  }
export const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        fetchDataSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          fetchDataFailure: (state, action) => {
            state.error = action.payload;
          },
          postDataSuccess: (state, action) => {
            state.data.push(action.payload);
            state.error = null;
          },
          postDataFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})
export const {fetchDataSuccess, fetchDataFailure, postDataSuccess, postDataFailure}=ProductSlice.actions
export default ProductSlice.reducer
