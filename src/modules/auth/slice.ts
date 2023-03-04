import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SingUpInDTO } from "./api/dto/sign-up.in";

interface AuthState {
  user: SingUpInDTO["user"] | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SingUpInDTO["user"]>) => {
      state.user = {
        ...action.payload,
      };
    },
  },
});

export const { setUser } = authSlice.actions;
