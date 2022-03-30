import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    initialize: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    }
  },
});

export const { increment, decrement, initialize } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectDifficulty = (state) => state.counter.difficulty;
export const selectWord = (state) => state.counter.selected;

export default counterSlice.reducer;
