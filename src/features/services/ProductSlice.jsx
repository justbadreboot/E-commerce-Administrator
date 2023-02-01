import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    data: [
        { foto: "./logo192.png", name: "Paracetamol", category: "Analgésico", stock: "130", brand: "bayern", caducidad: "Ingerible", weight: "600", description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis veniam, sed ducimus explicabo aut earum atque fugiat labore nulla voluptates modi commodi amet quaerat vel. Non cumque molestiae nemo odit?" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Por Expirar", weight: "600" },
    { foto: "./logo192.png", name: "Arten", category: "Corticoides", stock: "130", brand: "bayern", caducidad: "Expirado", weight: "600" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Expirado", weight: "600" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Por Expirar", weight: "600" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Por Expirar", weight: "600" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Por Expirar", weight: "600" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Por Expirar", weight: "600" },
    { foto: "./logo192.png", name: "Ibuprofeno", category: "AINE", stock: "130", brand: "meditin", caducidad: "Por Expirar", weight: "600" },
    ]
  }
export const ProductSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        productSuccess: (state, action) => {
            state.data = action.payload;
            state.error = null;
          },
          productFailure: (state, action) => {
            state.error = action.payload;
          },
    }
})
export const {productSuccess, productFailure}=ProductSlice.actions
export default ProductSlice.reducer
