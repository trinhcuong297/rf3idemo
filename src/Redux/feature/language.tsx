import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// Define a type for the slice state
export interface LangState {
  lang: String;
}

// Define the initial state using that type
const initialState: LangState = {
  lang: 'vi',
};

export const LangSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLangEN: (state) => {
      state.lang = 'en';
    },
    setLangVI: (state) => {
      state.lang = 'vi';
    },
  },
});

export const { setLangEN, setLangVI } = LangSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLang = (state: RootState) => state.language.lang;

export default LangSlice.reducer;
