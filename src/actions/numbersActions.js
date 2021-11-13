import { ADD_NUMBER, SET_NUMBERS } from "../store/types/types";

export const setStore = (arrNumbers) => ({
  type: SET_NUMBERS,
  payload: arrNumbers,
});

export const addInStore = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});

export const getNumbers = (number) => (dispatch) => {
  fetch(`http://localhost:3005/${number}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(setStore(data.data));
    })
    .catch((err) => console.log("Error: " + err));
};
