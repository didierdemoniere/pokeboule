// actions types
const POKEBALL_GO = "POKEBALL_GO" as "POKEBALL_GO";
const SAVE_POKEMON = "SAVE_POKEMON" as "SAVE_POKEMON";
// on ne jete pas les pokemons
const FREE_POKEMON = "FREE_POKEMON" as "FREE_POKEMON";

// state type
type BackpackState = {
  pokeballs: number;
  pokemons: any[];
};

// action creators
export const actionCreators = {
  pokeballGo: () => ({ type: POKEBALL_GO }),
  freePokemon: (id: number) => ({ type: FREE_POKEMON, id })
};

// reducer
export const reducer = function(
  state: BackpackState = {
    pokeballs: 200,
    pokemons: []
  },
  action:
    | { type: "POKEBALL_GO" }
    | { type: "SAVE_POKEMON"; data: any }
    | { type: "FREE_POKEMON"; id: number }
) {
  switch (action.type) {
    case POKEBALL_GO:
      return state.pokeballs > 0
        ? { ...state, pokeballs: state.pokeballs - 1 }
        : state;
    case SAVE_POKEMON:
      return { ...state, pokemons: [...state.pokemons, action.data] };
    case FREE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter(pokemon => pokemon.id !== action.id)
      };
    default:
      return state;
  }
};
