import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined
};

export const difficultySlice = createSlice({
  name: 'difficultyLevel',
  initialState,
  reducers: {
    changeDifficulty: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  },
});

export const { changeDifficulty } = difficultySlice.actions;
export const selectDifficulty = (state) => state.difficulty.value;

export default difficultySlice.reducer;
