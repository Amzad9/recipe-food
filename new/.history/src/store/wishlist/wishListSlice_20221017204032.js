import { createSlice } from '@reduxjs/toolkit';


export const wishListSlice = createSlice({
    name: "wishlist2",
    initialState: {
        data: [],
        search : ''
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
            const {id} = action.payload
            console.log(id)
            state.data = state.data.filter((item)=> item.id !== id)
        //   delete  state.data[action.payload]
        },
        onSearch: (state, action) => {
            // state.search =  action.payload
            state.data = state.data.filter((item)=> item.id !== id)

        }

    }
})

export const {saveWishList, deleteWishList, onSearch} =  wishListSlice.actions;

export default wishListSlice.reducer;
