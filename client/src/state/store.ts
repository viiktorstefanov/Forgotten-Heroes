import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import heroReducer from './hero/heroSlice';
import levelsReducer from './levels/levelsSlice';
import questionsReducer from './questions/questionsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    hero: heroReducer,
    levels: levelsReducer,
    questions: questionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;