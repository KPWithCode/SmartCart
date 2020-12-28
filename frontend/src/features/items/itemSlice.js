import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getItems = createAsyncThunk(
    '/api/items',
    async ({ limit }) => {
        const instance = axios.create({ baseURL: 'http://localhost:5000' })
        const data = await instance.get(`/api/items?_limit=${limit}`);
        return data;
    }
);


const itemSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        cart: [],
        status: null,
    },
    reducers: {
        add({ cart }, { payload }) {
            cart.push(payload)
        },
        del(state, action) {
            // const itemId = cart.map(i => i._id)
            return state.cart.filter(product => product._id !== action._id)
            // cart.shift(payload)
        },
    },
    extraReducers: {
        [getItems.pending]: (state) => {
            state.status = 'loading';
        },
        [getItems.fulfilled]: (state, { payload }) => {
            state.items = payload;
            state.status = 'success';
        },
        [getItems.rejected]: (state) => {
            state.status = 'failed';
        }
    }
});

export const { add, del } = itemSlice.actions;

export default itemSlice.reducer;