import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    sub: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});
export const counterAction = counterSlice.actions;
export const privacyAction = privacySlice.actions;
export default counterStore;

// const INITIAL_VALUE = {
//   counter: 0,
//   privacy: false,
// };

//  const storeReducer = (store = INITIAL_VALUE, action) => {
//   console.log(action);
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADDITION") {
//     return { ...store, counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "SUBTRACTION") {
//     return { ...store, counter: store.counter - Number(action.payload.num) };
//   } else if (action.type === "PRIVACY") {
//     return { ...store, privacy: !store.privacy };
//   }
//   return store;
// };
