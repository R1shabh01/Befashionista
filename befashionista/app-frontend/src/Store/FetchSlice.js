import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    fetchStarted: (state) => {
      state.currentlyFetching = true;
    },
    fetchEnded: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
