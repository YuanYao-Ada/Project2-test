import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const historyAttemptSlice = createSlice({
  name: 'historyAttempt',
  initialState,
  reducers: {
    pushHistory: (state, action) => {
        state.value.push(action.payload);
    },
    popHistory: (state) => {
        state.value.pop();
    }
  },
});

export const { pushHistory, popHistory } = historyAttemptSlice.actions;
export const selectHistoryAttempt = (state) => state.history.value;

export default historyAttemptSlice.reducer;
