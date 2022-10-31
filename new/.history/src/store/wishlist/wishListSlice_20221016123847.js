import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: []
    },
    reducers:{
        increment: (state, action) =>{
            state.data.push(action.payload)
        }
    }
})

export const {increment} =  wishListSlice.actions;

export default wishListSlice.reducer;
