import { createSlice } from "@reduxjs/toolkit";



export const productSlice = createSlice({
    name: 'product',
    initialState: {
        Total: 0,
        AllProduct: [],
    },
    reducers: {
        SetTotal: (state, action) => {
            state.Total = action.payload
        },
        SetAllProduct: (state, action) => {
            state.AllProduct = action.payload
        }
    }
})

export const { SetTotal, SetAllProduct } = productSlice.actions;
export default productSlice.reducer;