import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined,
};

export const guessSlice = createSlice({
  name: 'guess',
  initialState,
  reducers: {
    changeGuess: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  }
});

export const { changeGuess } = guessSlice.actions;
export const selectGuess = (state) => state.guess.value;

export default guessSlice.reducer;
