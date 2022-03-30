import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/slices/attemptSlice';
import difficultyReducer from '../features/slices/difficultySlice';
import wordLengthReducer from '../features/slices/wordLengthSlice';
import dictionaryReducer from '../features/slices/dictionarySlice';
import wordReducer from '../features/slices/wordSlice';
import historyReducer from '../features/slices/historyAttemptSlice';
import guessReducer from '../features/slices/guessSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    difficulty: difficultyReducer,
    length: wordLengthReducer,
    dictionary: dictionaryReducer,
    answer: wordReducer,
    guess: guessReducer,
    history: historyReducer,
  },
});
