import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// Define a type for the slice state
export interface LangState {
  lang: String;
}

// Define the initial state using that type
const initialState: LangState = {
  lang: 'VN',
};

export const LangSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLangEN: (state) => {
      state.lang = 'EN';
    },
    setLangVI: (state) => {
      state.lang = 'VN';
    },
  },
});

export const { setLangEN, setLangVI } = LangSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLang = (state: RootState) => state.language.lang;

export default LangSlice.reducer;
