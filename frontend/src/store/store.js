import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import itemReducer from '../features/items/itemSlice';

export default configureStore({
    reducer: {
        items: itemReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});