import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: []
    },
    reducers:{
        saveWishList: (state, action) =>{
            const getItem = state.data.find( item => item.productId === action.payload.productId);
            if(!getItem){
                state.data.push(action.payload)
            }else{
                alert("Aleardy")
            }
            
        }
    }
})

export const {saveWishList} =  wishListSlice.actions;

export default wishListSlice.reducer;
