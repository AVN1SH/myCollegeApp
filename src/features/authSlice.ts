import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  status : boolean;
  userData : {
    id : string;
    registration_id : string;
    first_name : string;
    middle_name : string | null;
    last_name : string | null;
    role : string;
    phone : string;
    email : string;
  } | null;
}

const initialState : AuthState = {
  status : false,
  userData : null
}

const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {
    login : (state, action) => {
      console.log(action);
      state.status = true;
      state.userData = action.payload;
    },

    logout : (state) => {
      state.status = false;
      state.userData = null;
    }
  }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;