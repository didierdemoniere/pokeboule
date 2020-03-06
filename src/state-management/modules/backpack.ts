// actions types
const POKEBALL_GO = "POKEBALL_GO" as "POKEBALL_GO";

// state type
type BackpackState = {
  pokeballs: number;
  pokemons: any[];
};

// action creators
export const actionCreators = {
  pokeballGo: () => ({ type: POKEBALL_GO })
};

// reducer
export const reducer = function(
  state: BackpackState = {
    pokeballs: 200,
    pokemons: []
  },
  action: { type: "POKEBALL_GO" }
) {
  switch (action.type) {
    case POKEBALL_GO:
      return state.pokeballs > 0
        ? { ...state, pokeballs: state.pokeballs - 1 }
        : state;
    default:
      return state;
  }
};
