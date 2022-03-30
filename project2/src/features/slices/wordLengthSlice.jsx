import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: undefined,
};

export const wordLengthSlice = createSlice({
  name: 'wordLength',
  initialState,
  reducers: {
    changeLength: (state, action) => {
      return {
        ...state,
        value: action.payload,
      }
    },
  },
});

export const { changeLength } = wordLengthSlice.actions;
export const selectLength = (state) => state.length.value;

export default wordLengthSlice.reducer;
