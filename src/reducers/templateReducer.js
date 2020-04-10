import {
  TESTCASE1,
  TESTCASE_ADD,
  TESTCASE_DELETE,
} from "../actions/actionTypes";

let templateReducer = (state, action) => {
  //initialize state
  if (state === undefined) {
    state = {
      count: 0,
      someArray: [], //array of objects
    };
  }

  switch (action.type) {
    case TESTCASE1:
      return {
        ...state,
        count: state.count + action.count,
      };
    case TESTCASE_ADD:
      return {
        ...state,
        someArray: state.someArray.concat(action.data),
      };
    case TESTCASE_DELETE:
      let filteredArray = state.someArray.filter((item) => {
        return item.id !== action.id;
      });
      return {
        ...state,
        someArray: filteredArray,
      };
    default:
      return state;
  }
};

export default templateReducer;
