import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: []
    },
    reducers:{
        saveWishList: (state, action) =>{
            const getItem = state.data.find( item => item.productId === action.payload.productId);
            if(getItem){
                alert("Aleardy exists")
            }else{
                state.data.push(action.payload)
            }
            
        }
    }
})

export const {saveWishList} =  wishListSlice.actions;

export default wishListSlice.reducer;
