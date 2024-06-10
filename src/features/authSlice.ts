import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  status : boolean;
  loading: boolean;
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
  loading: true,
  userData : null
}

const authSlice = createSlice({
  name : "auth",
  initialState,
  reducers : {
    login : (state, action) => {
      state.status = true;
      state.loading = false;
      state.userData = action.payload;

      const authId = JSON.stringify(state.userData?.id);
      localStorage.setItem("authId", authId);
    },

    logout : (state) => {
      state.status = false;
      state.loading = false;
      state.userData = null;
      
      const authId = JSON.stringify('');
      localStorage.setItem("authId", authId);

    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    authCheck : (state) => {
      const authStatus = localStorage.getItem("authStatus");
      const authId = JSON.stringify(state.userData?.id);

      if(authStatus) {
        state.status = JSON.parse(authStatus);
      }
    }
  }
})

export const {login, logout, setLoading, authCheck} = authSlice.actions;

export default authSlice.reducer;