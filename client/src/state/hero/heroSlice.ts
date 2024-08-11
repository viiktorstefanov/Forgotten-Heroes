import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HeroByCategory, Hero } from '../../services/HeroService';
import { getHeroes, getHero, getRandomHero } from './heroThunks';
import notification from '../../services/Notification';

type HeroState = {
  heroes: HeroByCategory[] | null,
  hero: Hero | null,
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: string | null,
  random: Hero | null,
};

const initialState: HeroState = {
  heroes: null,
  hero: null,
  status: 'idle',
  error: null,
  random : null,
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    resetHeroes(state, action: PayloadAction) {
      state.heroes = null;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getHeroes.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getHeroes.fulfilled, (state, action: PayloadAction<HeroByCategory[]>) => {
      state.status = 'succeeded';
      state.heroes = action.payload;
    })
    .addCase(getHeroes.rejected, (state, action) => {
      state.heroes = null;
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
    })
    .addCase(getHero.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getHero.fulfilled, (state, action: PayloadAction<Hero>) => {
      state.status = 'succeeded';
      state.hero = action.payload;
    })
    .addCase(getHero.rejected, (state, action) => {
      state.hero = null;
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
    })
    .addCase(getRandomHero.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getRandomHero.fulfilled, (state, action: PayloadAction<Hero>) => {
      state.status = 'succeeded';
      state.random = action.payload;
    })
    .addCase(getRandomHero.rejected, (state, action) => {
      state.random = null;
      state.status = 'failed';
      state.error = action.payload as string;
      //handle if not have action.payload to send unable to connect server
    })
  }
});

export const { resetHeroes } = heroSlice.actions;

export default heroSlice.reducer;