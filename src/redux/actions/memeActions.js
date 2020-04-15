import { LOADING_DATA, SET_MEME, FAV_MEME } from "../types";
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

// addFavMeme
export const addFavMeme = (memeID) => (dispatch) => {
  axios.get("https://api.imgflip.com/get_memes").then((data) => {
    // console.log("LOOKING FOR DATA");
    // console.log(data);
    // console.log(data.data.data.memes);
    let memeArray = data.data.data.memes;
    memeArray.forEach((item) => {
      //console.log(item);
      if (item.id === memeID) {
        console.log("SUCCESS");
        // put dispatch() here
        dispatch({
          type: FAV_MEME,
          payload: item,
        });
        return;
        // `return` to kill the forEach
      } else {
        console.log("FAIL");
        return;
      }
    });
    /*data.filter((memes) => {
      console.log("MEMES");
      console.log(memes);
      if (memes.id === memeID) {
        dispatch({
          type: FAV_MEME,
          payload: memes.data,
        });
      }
    });*/
  });
};
