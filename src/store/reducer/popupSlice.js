import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
  slide: {
    open: false,
    select: 0
  }
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    isOpen: state => {
      state.open = !state.open;
    },
    isSlideOpen: (state, action) => {
      state.slide.open = !state.slide.open;
      state.slide.select = action.payload.number;
    }
  }
});

export const { isOpen, isSlideOpen } = popupSlice.actions;

export default popupSlice.reducer;
