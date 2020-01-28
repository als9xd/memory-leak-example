import { createSlice } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

export const testSlice = createSlice({
  name: 'test',
  initialState: null as Element | null,
  reducers: {
    load: () => {
      return null;
    },
  },
});

const reducer = combineReducers({
  test: testSlice.reducer,
});

export const store = createStore(reducer);