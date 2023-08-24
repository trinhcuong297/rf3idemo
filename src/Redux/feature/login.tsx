import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

// Define a type for the slice state
export interface LoginState {
  login: Number;
}

// Define the initial state using that type
const initialState: LoginState = {
  login: 0,
};

export const LoginSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLogin: (state) => {
      state.login = 1;
    },
    setLogout: (state) => {
      state.login = 0;
    },
  },
});

export const { setLogin, setLogout } = LoginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLogin = (state: RootState) => state.loginState.login;

export default LoginSlice.reducer;
