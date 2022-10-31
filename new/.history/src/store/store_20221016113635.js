import {configureStore} from '@reduxjs/toolkit';
import { wishListSlice } from './wishlist/wishListSlice';
export const store =configureStore({
  reducer:{
    wishListSlice
  }
});