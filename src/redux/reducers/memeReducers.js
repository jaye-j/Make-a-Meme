import { LOADING_DATA, SET_MEME } from "../types";

const initialState = {
  loading: false,
  memes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_MEME:
      return {
        ...state,
        memes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
