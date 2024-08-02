import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/AuthService';
import { LoginData, User, RegisterData } from '../../services/AuthService';

export const login = createAsyncThunk<User, LoginData>(
    'auth/login',
    async (credentials: LoginData, { rejectWithValue }) => {
      try {
        const response = await authApi.login(credentials)
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const logout = createAsyncThunk<void, User>(
    'auth/logout',
    async (user: User, { rejectWithValue }) => {
      try {
        await authApi.logout(user);
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const register = createAsyncThunk<User, authApi.RegisterData>(
    'auth/register',
    async (credentials: RegisterData, { rejectWithValue }) => {
      try {
        const response = await authApi.register(credentials);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );