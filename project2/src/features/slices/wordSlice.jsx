import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined,
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    changeAnswer: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  }
});

export const { changeAnswer } = wordSlice.actions;
export const selectAnswer = (state) => state.answer.value;

export default wordSlice.reducer;
