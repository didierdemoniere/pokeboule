import { getRandomPokemon } from "../IO";
import { onActionTypes, generateRandomBoolean } from "../utils";

// when we go from a place to another
// dialog should change et pokemon can appears
// this piece of logic is managed here
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
          store.dispatch({ type: "ENCOUNTER_POKEMON", data: pokemon });
        });
      } else {
        if (store.getState().displayed_pokemon) {
          // we dispatch a ENCOUNTER_POKEMON action with no pokemon to hide the previous pokemon
          // @todo refactoring
          store.dispatch({ type: "ENCOUNTER_POKEMON", data: null });
        }
        store.dispatch({
          type: "DIALOG_NOTHING_TO_SEE_HERE",
          actions: {
            "continuer de se ballader": {
              actionCreatorName: "goto",
              args: ["woods"]
            }
          }
        });
      }
    } else if (action.data === "home") {
      if (store.getState().displayed_pokemon) {
        // we dispatch a ENCOUNTER_POKEMON action with no pokemon to hide the previous pokemon
        // @todo refactoring
        store.dispatch({ type: "ENCOUNTER_POKEMON", data: null });
      }
      store.dispatch({ type: "DIALOG_NOTHING_EXCITING" });
    }

    return result;
  }
);

// at start we are already at home so the dialog that would be triggered by the pokemonAppearsMiddleware
// is not triggered so we add a special middleware for ths case
export const firstDialogMiddleware = onActionTypes(
  ["START_GAME"],
  store => next => action => {
    const result = next(action);
    store.dispatch({ type: "DIALOG_NOTHING_EXCITING" });
    return result;
  }
);

// when we throw  a pokeball
export const pokeballGoMiddleware = onActionTypes(
  ["POKEBALL_GO"],
  store => next => action => {
    const result = next(action);
    const pokemon = store.getState().encounter.pokemon;
    if (store.getState().encounter.pokemon) {
      // the pokemon is now in a pokeball
      store.dispatch({ type: "CATCH_POKEMON" });
      // suspense...
      setTimeout(() => {
        store.dispatch({ type: "SAVE_POKEMON", data: pokemon });
        store.dispatch({ type: "DIALOG_SUCCESSFUL_CATCH", data: pokemon });
        store.dispatch({ type: "CATCH_POKEMON_DONE" });
      }, 4000);
    } else {
      store.dispatch({ type: "DIALOG_POKEBALL_LOST" });
    }
    return result;
  }
);
