import { configureStore, combineReducers } from '@reduxjs/toolkit';
import MotocycleReducer from './motorcycle/motocycle_slice';

const reducer = combineReducers({
  motor: MotocycleReducer,
});

const store = configureStore({ reducer });

export default store;
