import { LOADING_DATA, SET_MEME } from "../types";
import axios from "axios";

export const getMemes = () => (dispatch) => {
  dispatch({
    type: LOADING_DATA,
  });
  axios
    .get("https://api.imgflip.com/get_memes", {
      params: {},
    })
    .then((res) => {
      //console.log("AXIOS REQUEST FROM MEME ACTIONS");
      //console.log(res.data.data.memes);
      dispatch({
        type: SET_MEME,
        payload: res.data.data.memes,
      });
    })
    .catch((err) => console.error(err));
};
