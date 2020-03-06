// actions types
export const ENCOUNTER_POKEMON = "ENCOUNTER_POKEMON" as "ENCOUNTER_POKEMON";
export const CATCH_POKEMON = "CATCH_POKEMON" as "CATCH_POKEMON";

type Pokemon = {
  id: number;
  name: string;
};

// state type
type EncounterState = {
  catch: boolean;
  pokemon?: Pokemon;
};

// action creators
export const actionCreators = {
  hidePokemon: () => ({ type: ENCOUNTER_POKEMON, data: null })
};

// reducer
export const reducer = function(
  state: EncounterState = { catch: false },
  action:
    | { type: "ENCOUNTER_POKEMON"; data?: Pokemon }
    | { type: "CATCH_POKEMON" }
) {
  switch (action.type) {
    case ENCOUNTER_POKEMON:
      return { ...state, pokemon: action.data, catch: false };
    case CATCH_POKEMON:
      return state.pokemon && !state.catch ? { ...state, catch: true } : state;
    default:
      return state;
  }
};
