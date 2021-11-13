import { ADD_NUMBER, SET_NUMBERS } from "./types/types";

const initialState = [];

const numbersReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NUMBER:
      return [payload, ...state];

    case SET_NUMBERS:
      return [...payload];

    default:
      return state;
  }
};

export default numbersReducers;
