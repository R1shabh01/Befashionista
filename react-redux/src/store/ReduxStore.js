import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const storeReducer = (store = INITIAL_VALUE, action) => {
  console.log(action);
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    return { ...store, counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACTION") {
    return { ...store, counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY") {
    return { ...store, privacy: !store.privacy };
  }
  return store;
};

const counterStore = createStore(storeReducer);
export default counterStore;
