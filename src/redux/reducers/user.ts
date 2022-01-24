import { createSlice } from "@reduxjs/toolkit";

export interface UserData {
  email: string;
  id: string;
}

export interface UserState {
  user: UserData | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
