import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import memeReducers from "./reducers/memeReducers";
//import userReducer from "example"

const reducers = combineReducers({
  meme: memeReducers,
  //user: userReduces
});

const middleware = [thunk];

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
