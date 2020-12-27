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
        status: null,
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

// export const (
//     // add Item to Cart etc from reducers
// ) = items.actions
export default itemSlice.reducer;