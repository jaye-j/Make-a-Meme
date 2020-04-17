import { LOADING_DATA, SET_MEME, FAV_MEME, CREATE_MEME } from "../types";

const initialState = {
  loading: false,
  memes: [],
  favorites: [],
  singleMeme: {},
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
      let matchingFav = state.favorites.filter((favorite) => {
        return favorite.id === action.payload.id;
      });
      if (matchingFav.length < 1) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
          loading: false,
        };
      } else {
        return state;
      }
    case CREATE_MEME:
      return {
        ...state,
        singleMeme: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
