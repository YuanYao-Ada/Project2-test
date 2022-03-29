import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/attemptCounter/reducerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
