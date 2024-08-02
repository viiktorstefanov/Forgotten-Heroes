import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { login , register, logout } from './authThunks';
import { User } from '../../services/AuthService';
import { clearLocalStorage, setLocalStorage } from '../../services/LocalStorageService';

type AuthState = {
  user: User | null,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
  isAuthenticated: boolean,
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      setLocalStorage(state.user);
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      clearLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(login.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.isAuthenticated = true;
      setLocalStorage(state.user)
    })
    .addCase(login.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as string;
    })
    .addCase(logout.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(logout.fulfilled, (state) => {
      state.status = 'succeeded';
      state.user = null;
      state.isAuthenticated = false;
      clearLocalStorage();
    })
    .addCase(logout.rejected, (state, action) => {
      state.status = 'failed';
      console.log(action.payload);
      
      state.error = action.payload as string;
    });
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;