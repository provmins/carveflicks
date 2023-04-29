import { combineReducers, configureStore } from '@reduxjs/toolkit';
import popupReducer from './reducer/popupSlice';
import userReducer from './reducer/userSlice';
import loaderReducer from './reducer/loaderSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
  popup: popupReducer,
  user: userReducer,
  loader: loaderReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: defaultMiddleware => defaultMiddleware({ serializableCheck: false })
});

export default store;
