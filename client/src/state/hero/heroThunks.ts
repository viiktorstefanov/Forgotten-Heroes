import { createAsyncThunk } from '@reduxjs/toolkit';
import * as heroApi from '../../services/HeroService'
import { HeroByCategory, Hero } from '../../services/HeroService';

  export const getHeroes = createAsyncThunk<HeroByCategory[], { category: string }>(
    'heroes/category',
    async ({ category }, { rejectWithValue }) => {
      try {
        const response = await heroApi.getCategoryHeroes(category);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const getHero = createAsyncThunk<Hero, { heroId: string }>(
    'hero',
    async ({ heroId }, { rejectWithValue }) => {
      try {
        const response = await heroApi.getHeroById(heroId);
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const getRandomHero = createAsyncThunk<Hero, void, { rejectValue: any }>(
    'hero/random',
    async (_, { rejectWithValue }) => {
      try {
        const response = await heroApi.getRandomHero();
        return response;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
  );