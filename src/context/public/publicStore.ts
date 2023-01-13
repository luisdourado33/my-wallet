/**
 * Public store: handling with non-logged users
 * IMPORTANT: this store must be used only in public context application
 * do not use it on pages which has some user-fetched data
 */

import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "./authenticationSlice";

export const publicStore = configureStore({
  reducer: {
    authentication: authenticationReducer,
  },
});

export type RootState = ReturnType<typeof publicStore.getState>;
export type AppDispatch = typeof publicStore.dispatch;
