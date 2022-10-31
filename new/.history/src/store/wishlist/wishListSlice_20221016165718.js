import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: []
    },
    reducers:{
        saveWishList: (state, action) =>{
            const getItem = state.data.find( item => item.id === action.payload.id);
            if(getItem){
                alert("Already exists")
            }else{
                state.data.push(action.payload)
            }
            
        },
        deleteWishList: (state, action) => {
          delete  state.data(action.payload)
        }
    }
})

export const {saveWishList} =  wishListSlice.actions;

export default wishListSlice.reducer;
