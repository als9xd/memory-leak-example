import { createSlice } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

export const testSlice = createSlice({
  name: 'slice',
  initialState: null as Element | null,
  reducers: {
    load: (state) => {
      return null;
    },
  },
});

const reducer = combineReducers({
  testSlice: testSlice.reducer,
});

export const store = createStore(reducer);