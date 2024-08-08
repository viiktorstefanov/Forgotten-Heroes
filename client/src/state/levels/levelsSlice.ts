import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Level } from '../../services/LevelService';
import { getLevels } from './levelsThunks';
import notification from '../../services/Notification';

type LevelsState = {
  levels: Level[] | null,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
};

const initialState: LevelsState = {
    levels: null,
    status: 'idle',
    error: null,
};

const levelSlice = createSlice({
  name: 'levels',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getLevels.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getLevels.fulfilled, (state, action: PayloadAction<Level[]>) => {
      state.status = 'succeeded';
      state.levels = action.payload;
    })
    .addCase(getLevels.rejected, (state, action) => {
      state.levels = null;
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
    })
  }
});

export default levelSlice.reducer;