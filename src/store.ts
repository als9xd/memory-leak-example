import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createStore, combineReducers } from 'redux'

export const mapViewSlice = createSlice({
  name: 'mapView',
  initialState: null as RootState['mapView'],
  reducers: {
    load: (state, action: PayloadAction<__esri.MapView>) => {
      return action.payload;
    },
  },
});

const reducer = combineReducers({
  mapView: mapViewSlice.reducer,
});

export interface RootState {
  mapView: __esri.MapView | null;
}

export const store = createStore(reducer);