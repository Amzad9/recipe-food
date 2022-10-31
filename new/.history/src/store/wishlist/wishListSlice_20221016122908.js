import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: []
    },
    reducers:{
        increment: (state) =>{
            state.value +=1
        }
    }
})

export const {increment} =  wishListSlice.actions;

export default wishListSlice.reducer;
