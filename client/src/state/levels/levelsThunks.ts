import { createAsyncThunk } from '@reduxjs/toolkit';
import * as levelApi from '../../services/LevelService'
import { Level } from '../../services/LevelService';


  export const getLevels = createAsyncThunk<Level[], { userId: string }>(
    'levels',
    async ({ userId }, { rejectWithValue }) => {
      try {
        const response = await levelApi.getUserLevels(userId);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );