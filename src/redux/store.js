import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MotocycleReducer from "./motorcycle/motocycle_slice";
import UserReducer, { fetchUser } from "./user/userSlice";

const reducer = combineReducers({
  motor: MotocycleReducer,
  users: UserReducer,
});

const store = configureStore({ reducer });
store.dispatch(fetchUser());

export default store;
