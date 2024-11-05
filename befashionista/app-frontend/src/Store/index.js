import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./ItemsSlice";
import fetchStatusSlice from "./FetchSlice";

const appStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
  },
});

export default appStore;
