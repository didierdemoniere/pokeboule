import { combineReducers } from "redux";
import * as gameModule from "./game";
import * as backpackModule from "./backpack";
import * as dialogModule from "./dialog";
import * as placeModule from "./place";
import * as pokemonModule from "./pokemon";

export const actionCreators = {
  ...gameModule.actionCreators,
  ...backpackModule.actionCreators,
  ...placeModule.actionCreators,
  ...dialogModule.actionCreators,
  ...pokemonModule.actionCreators
};

export const reducer = combineReducers({
  game_started: gameModule.reducer,
  backpack: backpackModule.reducer,
  currentPlace: placeModule.reducer,
  dialog: dialogModule.reducer,
  displayed_pokemon: pokemonModule.reducer
});
