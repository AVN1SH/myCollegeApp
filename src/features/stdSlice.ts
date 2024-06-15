import { createSlice } from "@reduxjs/toolkit";

export interface StdState {
  admissionStatus : boolean;
  loading: boolean;
}

const initialState : StdState = {
  admissionStatus : false,
  loading: true,
}

const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {
    admission : (state) => {
      state.admissionStatus = true;
      state.loading = false;
    },
    admissionRemove : (state) => {
      state.admissionStatus = false;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  }
})

export const {admission, admissionRemove, setLoading,} = authSlice.actions;

export default authSlice.reducer;