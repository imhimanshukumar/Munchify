import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: 'Kalyan, Mumbai',
  location: {
    latitude: 19.2403,
    longitude: 73.1305, 
  },
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress(state, action) {
      state.address = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { setAddress, setLocation } = addressSlice.actions;

export default addressSlice.reducer;
