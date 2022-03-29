import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 7,
  difficulty: 6,
  selected: "right"
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    test: (state) => {
      state.difficulty = 8;
    }
  },
});

export const { increment, decrement, initialize } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state) => state.counter.value;
export const selectDifficulty = (state) => state.counter.difficulty;
export const selectWord = (state) => state.counter.selected;

export default counterSlice.reducer;
