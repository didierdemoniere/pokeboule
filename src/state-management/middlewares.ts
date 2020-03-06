import { getRandomPokemon } from "../IO";
import { onActionTypes, generateRandomBoolean } from "../utils";

export const pokemonAppearsMiddleware = onActionTypes(
  ["GOTO"],
  store => next => action => {
    const result = next(action);

    if (action.data === "woods") {
      if (generateRandomBoolean()) {
        getRandomPokemon().then(pokemon => {
          store.dispatch({
            type: "DIALOG_A_WILD_POKEMON_APPEARS"
          });
          store.dispatch({ type: "DISPLAY_POKEMON", data: pokemon });
        });
      } else {
        store.dispatch({ type: "DIALOG_NOTHING_TO_SEE_HERE" });
      }
    } else if (action.data === "home") {
      store.dispatch({ type: "DIALOG_NOTHING_EXCITING" });
    }

    return result;
  }
);

export const firstDialogMiddleware = onActionTypes(
  ["START_GAME"],
  store => next => action => {
    const result = next(action);
    store.dispatch({ type: "DIALOG_NOTHING_EXCITING" });
    return result;
  }
);
