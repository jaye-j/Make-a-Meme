import { LOADING_DATA, SET_MEME } from "../types";
import axios from "axios";

export const getMemes = () => (dispatch) => {
  dispatch({
    type: LOADING_DATA,
  });
  axios.get("https://api.imgflip.com/get_memes").then((memes) => {
    console.log("AXIOS REQUEST FROM MEME ACTIONS");
    console.log(memes);
    dispatch({
      type: SET_MEME,
      payload: memes.data,
    });
  });
};
