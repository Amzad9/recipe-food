import {configureStore} from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  wishListSlice  from './wishlist/wishListSlice';

const persistConfig = {
    key: 'wishlist',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, wishListSlice)


export const store =configureStore({
  reducer:{
    wishlist: persistedReducer,
  }
});

export const persistor = persistStore(store);