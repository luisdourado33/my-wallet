import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./publicStore";

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
export const selectAuthentication = (state: RootState) => state.authentication;
export default authenticationSlice.reducer;