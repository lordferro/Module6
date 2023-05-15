import { createSlice } from "@reduxjs/toolkit";

export const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    // тут return так как мы не мутируем состояние.
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;
