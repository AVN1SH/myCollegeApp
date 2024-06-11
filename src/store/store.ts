import { configureStore } from "@reduxjs/toolkit";
import authSlice, { AuthState } from "@/features/authSlice";
import stdSlice, { StdState } from "@/features/stdSlice";

export interface RootState {
  authSlice : AuthState;
  stdSlice : StdState;
}

const store = configureStore({
  // reducer: authSlice
  reducer : {
    authSlice,
    stdSlice
  }
})

export default store;