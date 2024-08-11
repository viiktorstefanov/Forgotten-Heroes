import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, ResultQuestion } from '../../services/QuestionService';
import { getLevelQuestions } from './questionsThunks';
import notification from '../../services/Notification';
import { calculateScore } from '../../utils/calculateScore';
import { Level } from '../../services/LevelService';

type QuestionsState = {
  questions: Question[] | null,
  currentLevel: Level | null,
  result: ResultQuestion[] | null,
  numberCorrectAnswer: number | null,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
};

const initialState: QuestionsState = {
    questions: null,
    currentLevel: null,
    result: null,
    numberCorrectAnswer: null,
    status: 'idle',
    error: null,
};

const QuestionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    saveResult(state, action: PayloadAction<ResultQuestion>) {
      if (state.result === null) {
        state.result = [action.payload];
        state.numberCorrectAnswer = calculateScore(state.result);
      } else {
        state.result = [...state.result, action.payload];
        state.numberCorrectAnswer = calculateScore(state.result);
      }
    },
    resetResults(state, action: PayloadAction) {
      state.result = null;
      state.numberCorrectAnswer = null;
    },
    setCurrentLevel(state, action: PayloadAction<Level>) {
      state.currentLevel = action.payload;
    },
    resetCurrentLevel(state, action: PayloadAction) {
      state.currentLevel = null;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getLevelQuestions.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getLevelQuestions.fulfilled, (state, action: PayloadAction<Question[]>) => {    
      state.status = 'succeeded';
      state.questions = action.payload;
    })
    .addCase(getLevelQuestions.rejected, (state, action) => {
      state.questions = null;
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
    })
  }
});

export const { saveResult, resetResults, setCurrentLevel, resetCurrentLevel } = QuestionSlice.actions;

export default QuestionSlice.reducer;