import { combineReducers, configureStore } from '@reduxjs/toolkit';
import popupReducer from './reducer/popupSlice';

const rootReducer = combineReducers({
  popup: popupReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
