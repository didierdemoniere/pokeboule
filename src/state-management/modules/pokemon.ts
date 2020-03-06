// actions types
const DISPLAY_POKEMON = "DISPLAY_POKEMON" as "DISPLAY_POKEMON";

type Pokemon = {
  id: number;
  name: string;
};

// state type
type PokemonState = Pokemon | void;

// action creators
export const actionCreators = {
  hidePokemon: () => ({ type: DISPLAY_POKEMON, data: null })
};

// reducer
export const reducer = function(
  state: PokemonState = null,
  action: { type: "DISPLAY_POKEMON"; data?: Pokemon }
) {
  switch (action.type) {
    case DISPLAY_POKEMON:
      return action.data;
    default:
      return state;
  }
};
