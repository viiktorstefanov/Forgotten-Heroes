import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkIsMobile  } from '../../utils/screenUtil';

type ScreenState = {
  isMobile: boolean;
}

const initialState: ScreenState = {
  isMobile: checkIsMobile(),
};

const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = screenSlice.actions;
export default screenSlice.reducer;
