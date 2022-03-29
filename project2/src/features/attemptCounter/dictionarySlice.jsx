import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  map: new Map([
      ["easy", ["apple", "baker", "cache", "dough", "eaten", 
               "fight", "ghoat", "hello", "label", "labor"]],
      ["medium", ["purple", "family", "twelve", "silver", "thirty", 
                 "donate", "people", "banana", "future", "office"]],
      ["hard", ["abandon", "babysat", "between", "example", "journey", 
                     "license", "elegant", "acquire", "address", "quickly"]],
  ]),
};

export const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectedMap = (state) => state.dictionary.map;

export default dictionarySlice.reducer;
