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
        value: 1,
        status: null,
    },
    reducers: {
        add(state, { payload }) {
            const itemId = state.cart.map(cartItem => {
                return cartItem._id
            });
           
            if (itemId.includes(payload._id.toString())) {     
                return;
            } else {
                state.cart.push(payload)
            }
        },
        clear(state, action) {
            state.cart = []
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

export const selectCount = state => state.items.value;
export const { add, clear, increment, decrement } = itemSlice.actions;

export default itemSlice.reducer;