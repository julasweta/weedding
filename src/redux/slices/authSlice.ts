// src/redux/slices/authSlice.ts
import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isRejected,
} from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import { IGuest } from "../../services/guestService";

interface AuthState {
  error: string | null;
  me: IGuest | null;
}

const initialState: AuthState = {
  error: null,
  me: null,
};

// login – перевірка наявності гостя в guests.json
const login = createAsyncThunk<IGuest, { firstName: string; lastName: string }>(
  "authSlice/login",
  async ({ firstName, lastName }, { rejectWithValue }) => {
    try {
      const guest = await authService.login({ firstName, lastName });
      return guest;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

// me – повернення поточного авторизованого гостя
const me = createAsyncThunk<IGuest | null>(
  "authSlice/me",
  async (_, { rejectWithValue }) => {
    try {
      const guest = authService.me();
      localStorage.setItem("me", JSON.stringify(guest));
      return guest;
    } catch (e: any) {
      return rejectWithValue(e.message);
    }
  }
);

export const AuthSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      authService.logout();
      state.me = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.me = action.payload;
      })
      .addCase(me.fulfilled, (state, action) => {
        state.me = action.payload;
      })
      .addMatcher(isRejected, (state, action) => {
        state.error = action.payload as string;
      })
      .addMatcher(isFulfilled, (state) => {
        state.error = null;
      });
  },
});

const { actions, reducer: authReducer } = AuthSlice;

const authActions = {
  ...actions,
  login,
  me,
};

export { authActions, authReducer };
