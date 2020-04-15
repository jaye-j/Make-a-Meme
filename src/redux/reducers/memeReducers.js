import { LOADING_DATA, SET_MEME, FAV_MEME } from "../types";

const initialState = {
  loading: false,
  memes: [],
  favorites: [],
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
    case FAV_MEME:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        loading: false,
      };
    default:
      return state;
  }
}
