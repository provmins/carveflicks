import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    isOpen: state => {
      state.open = !state.open;
    }
  }
});

export const { isOpen } = popupSlice.actions;

export default popupSlice.reducer;
