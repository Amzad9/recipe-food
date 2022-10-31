import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: []
    },
    reducers:{
        increment: (state, actions) =>{
            state.data.push(actions.payload)
        }
    }
})

export const {increment} =  wishListSlice.actions;

export default wishListSlice.reducer;
