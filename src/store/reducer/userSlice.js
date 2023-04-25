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
    removeUser: state => {
      state.id = '';
      state.email = '';
    }
  }
});

export const { currentUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
