import { configureStore } from '@reduxjs/toolkit';// шлях залежить від структури

import exampleReducer from '../redux/slices/exampleSlice';
import { authReducer } from './slices/authSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

