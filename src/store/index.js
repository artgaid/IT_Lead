import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import numbersReducers from "./storeNumbers";

const store = createStore(
  numbersReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
