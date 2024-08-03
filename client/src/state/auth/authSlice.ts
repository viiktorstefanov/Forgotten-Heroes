import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login , register, logout, updatePoints } from './authThunks';
import { User } from '../../services/AuthService';
import { clearLocalStorage, setLocalStorage } from '../../services/LocalStorageService';
import notification from '../../services/Notification';

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
      //handle if not have action.payload to send unable to connect server
    })
    .addCase(register.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.isAuthenticated = true;
      setLocalStorage(state.user)
    })
    .addCase(register.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
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
      state.error = action.payload as string;
       //handle if not have action.payload to send unable to connect server
    })
    .addCase(updatePoints.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(updatePoints.fulfilled, (state, action: PayloadAction<User>) => {
      state.status = 'succeeded';
      state.user = action.payload;
      setLocalStorage(state.user)
    })
    .addCase(updatePoints.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
    })
  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;