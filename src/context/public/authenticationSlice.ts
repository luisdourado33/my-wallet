import { createSlice } from "@reduxjs/toolkit";

interface AuthenticationState {
  isAuthenticated: boolean;
};

const initialState: AuthenticationState = {
  isAuthenticated: false
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    makeAuthentication: state => {
      state.isAuthenticated = true;
    },
    makeLogoff: state => {
      state.isAuthenticated = false;
    }
  }
});

export const { makeAuthentication, makeLogoff } = authenticationSlice.actions;
export default authenticationSlice.reducer;