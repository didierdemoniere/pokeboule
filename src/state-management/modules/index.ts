import { combineReducers } from "redux";
import * as gameModule from "./game";
import * as backpackModule from "./backpack";
import * as dialogModule from "./dialog";
import * as placeModule from "./place";
import * as encounterModule from "./encounter";

export const actionCreators = {
  ...gameModule.actionCreators,
  ...backpackModule.actionCreators,
  ...placeModule.actionCreators,
  ...dialogModule.actionCreators,
  ...encounterModule.actionCreators
};

export const reducer = combineReducers({
  game_started: gameModule.reducer,
  backpack: backpackModule.reducer,
  currentPlace: placeModule.reducer,
  dialog: dialogModule.reducer,
  encounter: encounterModule.reducer
});
