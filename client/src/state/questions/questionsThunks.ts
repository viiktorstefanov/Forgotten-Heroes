import { createAsyncThunk } from '@reduxjs/toolkit';
import * as questionsApi from '../../services/QuestionService'
import { Question } from '../../services/QuestionService';


  export const getLevelQuestions = createAsyncThunk<Question[], { level: number }>(
    'questions',
    async ({ level }, { rejectWithValue }) => {
      try {
        const response = await questionsApi.getLevelQuestions(level);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );