import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
    data: [
      {
        name:"KrugerMed",
        description:"Kruger-Med es una empresa ficticia que vende medicamentos y ofrece servicios medicos por internet. Ofrecemos una amplia variedad de productos y servicios medicos de alta calidad, incluyendo medicamentos recetados, productos de cuidado personal y equipamiento medico, asi como consultas en linea con medicos y especialistas. Nos esforzamos por proporcionar precios competitivos y un excelente servicio al cliente para satisfacer las necesidades medicas de nuestros clientes. Nuestra prioridad es la salud y el bienestar de nuestros clientes, y trabajamos diligentemente para garantizar que tengan acceso a los productos y servicios medicos necesarios.",
        address:"Quito-Ecuador-...",
        email:"Krugermed@correo.com",
        mission:"En Kruger-Med, nuestra mision es proporcionar productos y servicios medicos de alta calidad a nuestros clientes de manera conveniente y segura a traves de nuestra plataforma en linea. Nos esforzamos por brindar un excelente servicio al cliente, precios competitivos y soluciones efectivas para las necesidades medicas de nuestros clientes.",
        vision:"En Kruger-Med, nuestra vision es convertirnos en lideres en la venta en linea de productos y servicios medicos de alta calidad. Nos esforzamos por ampliar nuestra oferta de productos y servicios, mantener precios competitivos y mejorar constantemente la experiencia del cliente. Buscamos ser reconocidos por la calidad de nuestros productos y servicios y por nuestra capacidad para satisfacer las necesidades de nuestros clientes de manera efectiva y eficiente.",
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