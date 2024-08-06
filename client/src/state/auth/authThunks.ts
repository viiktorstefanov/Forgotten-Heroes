import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/AuthService';
import { LoginData, User, RegisterData, PointsData, UserPointsData } from '../../services/AuthService';

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

  export const register = createAsyncThunk<User, RegisterData>(
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

  export const updatePoints = createAsyncThunk<User, { user: User, points: PointsData }>(
    'auth/update',
    async ({user, points}, { rejectWithValue }) => {
      try {
        const response = await authApi.updatePoints(user, points);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const getPoints = createAsyncThunk<UserPointsData[], void, { rejectValue: any }>(
    'auth/points',
    async (_, { rejectWithValue }) => {
      try {
        const response = await authApi.getUserPoints();
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );