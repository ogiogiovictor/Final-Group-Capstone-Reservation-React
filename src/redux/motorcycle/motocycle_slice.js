import fetchMotocycle from './motocycle_data';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

// create action contants - This are calleds action types
const GET_MOTOCYCLE = 'msg/GET_MOTOCYCLE';

// Action Creators for the action constant
// ########## Action to to get Dragon ###############/
const getMotocycle = () => async (dispatch) => {
  const motocycle = await fetchMotocycle();
  dispatch({
    type: GET_MOTOCYCLE,
    payload: motocycle,
  });
};



const url = "http://localhost:3000/api/v1/users/1/cars";

const addCar = (data) => async () => {
  const response = await axios.post(url, {
    brand: data.enterBrand,
    model: data.enterModel,
    price: data.enterPrice,
    release_year: data.enterReleaseDate,
    color: data.enterColor,
    transmission: data.enterTransmission,
    seats: data.enterSeats,
    wheel_drive: data.enterwheelDrive,
    user_id : 1,
    image_path: data.enterImage
  });
  return response;

};

// export const addBookApi = createAsyncThunk('addBookApi', async (data) => {
//   const response = await axios.post(url, {
//     item_id: uuidv4(),
//     title: data.title,
//     author: data.author,
//     category: data.category,
//   });
//   return response.data;
// });

// Reducers that recieves the actions and updates the state
const MotocycleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOTOCYCLE:
      return action.payload;
    default:
      return state;
  }
};

export { getMotocycle, addCar };
export default MotocycleReducer;
