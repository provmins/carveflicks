import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    currentUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
    resetUser: state => {
      state.id = '';
      state.email = '';
    }
  }
});

export const { currentUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
