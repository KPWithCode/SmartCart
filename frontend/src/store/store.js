import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import itemReducer from '../features/items/itemSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        items: itemReducer
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});