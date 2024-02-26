import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from '../state-slice/settings-slice';
import productReducer from '../state-slice/product-slice';


export default configureStore({
    reducer: {
        settings: settingsReducer,
        product: productReducer
    }
})