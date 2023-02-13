import { configureStore } from '@reduxjs/toolkit';
import { serverApi } from '../features/services/serverApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import counterReducer from '../features/counter/counterSlice';
import  StoreReducer  from '../features/services/StoreSlice';
import ProductReducer from '../features/services/ProductSlice';
import CategoryReducer from '../features/services/CategorySlice';
import ServiceReducer from '../features/services/ServiceSlice';
import { postData } from '../features/services/CategorySlice';
import dataSlice from '../features/services/serverApi';
import DoctorReducer from '../features/services/DoctorSlice';
import EspecialidadReducer from '../features/services/EspecialidadSlice';
import OrdenReducer from '../features/services/OrdenSlice';
import OrdenRepReducer from '../features/services/OrderRepSlice';
import DireccionRepReducer from '../features/services/DireccionRepSlice';
import FacturaReducer from '../features/services/FacturaSlice';
import StatisticsReducer from '../features/services/StatisticsSlice';
import PromotionReducer from '../features/services/PromotionSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    store:StoreReducer,
    products:ProductReducer,
    category:CategoryReducer,
    putSlice:StoreReducer,
    data:dataSlice,
    service:ServiceReducer,
    doctor:DoctorReducer,
    especialidad:EspecialidadReducer,
    orden:OrdenReducer,
    ordenRep:OrdenRepReducer,
    direccionRep:DireccionRepReducer,
    factura:FacturaReducer,
    statistics:StatisticsReducer,
    promotions:PromotionReducer,
  },
});

