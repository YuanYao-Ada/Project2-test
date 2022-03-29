import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/attemptCounter/attemptSlice';
import difficultyReducer from '../features/attemptCounter/difficultySlice';
import wordLengthReducer from '../features/attemptCounter/wordLengthSlice';
import dictionaryReducer from '../features/attemptCounter/dictionarySlice';
import wordReducer from '../features/attemptCounter/wordSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    difficulty: difficultyReducer,
    length: wordLengthReducer,
    dictionary: dictionaryReducer,
    answer: wordReducer,
  },
});
