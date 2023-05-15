import { createSlice } from '@reduxjs/toolkit';
import { persistReducer,  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: '',
    isLoggedIn: false,
    exampleList: 1,
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['exampleList'],
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);

export const { logIn, logOut } = userSlice.actions;
// Это держим здесь что б менять нсли что в одном месте.
export const getIsLoggedIn = state => state.user.isLoggedIn;
