import { combineReducers } from "redux";
import * as backpackModule from "./backpack";
import * as placeModule from "./place";

export const actionCreators = {
  ...backpackModule.actionCreators,
  ...placeModule.actionCreators
};

export const reducer = combineReducers({
  backpack: backpackModule.reducer,
  currentPlace: placeModule.reducer
});
