import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined
};

export const difficultySlice = createSlice({
  name: 'difficultyLevel',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeDifficulty: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      return {
        ...state,
        value: action.payload,
      }
    },
  },
});

export const { changeDifficulty } = difficultySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDifficulty = (state) => state.difficulty.value;

export default difficultySlice.reducer;
