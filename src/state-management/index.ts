import { createStore, applyMiddleware } from "redux";
import * as rootModule from "./modules";
import {
  firstDialogMiddleware,
  pokemonAppearsMiddleware,
  pokeballGoMiddleware
} from "./middlewares";

// reexport ours actions creators for later use
export const actionCreators = rootModule.actionCreators;

// create the store
export const store = createStore(
  rootModule.reducer,
  applyMiddleware(
    firstDialogMiddleware,
    pokemonAppearsMiddleware,
    pokeballGoMiddleware
  )
);

export type AppState = ReturnType<typeof rootModule.reducer>;

store.subscribe(() => console.log(store.getState()));
