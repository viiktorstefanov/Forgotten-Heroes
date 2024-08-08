import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import heroReducer from './hero/heroSlice';
import levelsReducer from './levels/levelsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    hero: heroReducer,
    levels: levelsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;