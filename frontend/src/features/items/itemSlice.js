import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



export const getItems = createAsyncThunk(
    '/api/items',
    async () => {
            const instance = axios.create({ baseURL: 'http://localhost:5000'})
            const data = await instance.get(`/api/items`);
            console.log(data);
            return data;
    }
);

const itemSlice = createSlice({
    name: 'items',
    initialState: {
        products: [],
        status: null,
    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.status = 'loading';
        },
        [getItems.fulfilled]: (state, {payload}) => {
            state.products = payload;
            state.status = 'success';
        },
        [getItems.rejected]: (state) => {
            state.status = 'failed';
        }
    }
});

export default itemSlice.reducer;