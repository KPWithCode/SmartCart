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
        count: 1,
        status: null,
    },
    reducers: {
        add(state, { payload }) {
            // const cartItems = state.cart.slice();
            // let inCart = false;
            //     if (cartItems._id === payload._id) {
            //         state.value++
            //         inCart = true
            //     }
            // if (!inCart) {
            //     state.cart.push({...payload})
            // }
            state.cart.push(payload);
        },
        del({cart}, {payload}) {
            cart.pop(payload)
        },
        increment: ({count},action) => {
            const { itemId, value } = action.payload;
            count[itemId] = count[itemId] + value;
            
            // state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
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
export const { add, del, increment, decrement } = itemSlice.actions;

export default itemSlice.reducer;