import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
}

export const wishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers:{
        increment:{

        }
    }
})

export const {increment} =  wishListSlice.actions;

export default wishListSlice.reducer;
