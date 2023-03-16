import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
  isLoading: false,
  isError: false,
};

const reducers = {
  fetchCats: (state) => {
    state.isLoading = true;
  },
  fetchCatsSuccess: (state, action) => {
    state.cats = action.payload;
    state.isLoading = false;
  },
  fetchCatsFailed: (state) => {
    state.isLoading = false;
    state.isError = true;
  },
};

export const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers,
});

export const { fetchCats, fetchCatsSuccess, fetchCatsFailed } =
  catSlice.actions;

export const catsReducer = catSlice.reducer;
