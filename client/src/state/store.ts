import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import heroReducer from './hero/heroSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    hero: heroReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;