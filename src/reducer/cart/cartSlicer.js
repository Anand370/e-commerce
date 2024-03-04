import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
};

export const cartSlicer = createSlice({
    initialState,
    name:"cart",
    reducers:{
        addItemToCart : (state,action)=>{
            state.cart.push(action.payload)
        }
    }
})

export const {addItemToCart} = cartSlicer.actions;
export default cartSlicer.reducer;