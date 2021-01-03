import configureMockStore from 'redux-mock-store';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import itemReducer from '../features/items/itemSlice';



const mockStore = configureMockStore(getDefaultMiddleware())

describe('item reducer', () => {
    let store;

    beforeEach(() => {
        store= mockStore({
            items: itemReducer
        });
    });
});