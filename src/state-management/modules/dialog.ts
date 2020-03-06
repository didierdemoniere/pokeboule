// actions types
const DIALOG_A_WILD_POKEMON_APPEARS = "DIALOG_A_WILD_POKEMON_APPEARS" as "DIALOG_A_WILD_POKEMON_APPEARS";
const DIALOG_NOTHING_TO_SEE_HERE = "DIALOG_NOTHING_TO_SEE_HERE" as "DIALOG_NOTHING_TO_SEE_HERE";
const DIALOG_NOTHING_EXCITING = "DIALOG_NOTHING_EXCITING" as "DIALOG_NOTHING_EXCITING";

// state type
type DialogState = {
  content?: string;
};

// action creators
export const actionCreators = {
  dialogAWildPokemonAppears: () => ({ type: DIALOG_A_WILD_POKEMON_APPEARS }),
  dialogNothingToSeeHere: () => ({ type: DIALOG_NOTHING_TO_SEE_HERE }),
  dialogNothingExciting: () => ({ type: DIALOG_NOTHING_EXCITING })
};

// reducer
export const reducer = function(
  state: DialogState = {},
  action: {
    type:
      | "DIALOG_A_WILD_POKEMON_APPEARS"
      | "DIALOG_NOTHING_TO_SEE_HERE"
      | "DIALOG_NOTHING_EXCITING";
  }
) {
  switch (action.type) {
    case DIALOG_A_WILD_POKEMON_APPEARS:
      return { ...state, content: "ahhh!!! un pokémon sauvage" };
    case DIALOG_NOTHING_TO_SEE_HERE:
      return { ...state, content: "il n'y a rien par ici" };
    case DIALOG_NOTHING_EXCITING:
      return {
        ...state,
        content: "rien... il ne se passe rien. mais qu'est-ce que je m'ennuie."
      };
    default:
      return state;
  }
};
