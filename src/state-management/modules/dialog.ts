// actions types
const DIALOG_A_WILD_POKEMON_APPEARS = "DIALOG_A_WILD_POKEMON_APPEARS" as "DIALOG_A_WILD_POKEMON_APPEARS";
const DIALOG_NOTHING_TO_SEE_HERE = "DIALOG_NOTHING_TO_SEE_HERE" as "DIALOG_NOTHING_TO_SEE_HERE";
const DIALOG_NOTHING_EXCITING = "DIALOG_NOTHING_EXCITING" as "DIALOG_NOTHING_EXCITING";

type DialogActions = {
  [label: string]: { actionCreatorName: string; args: any[] };
};

// state type
type DialogState = {
  content?: string;
  actions?: DialogActions;
};

// action creators
export const actionCreators = {
  dialogAWildPokemonAppears: (actions?: DialogActions) => ({
    type: DIALOG_A_WILD_POKEMON_APPEARS,
    data: actions
  }),
  dialogNothingToSeeHere: (actions?: DialogActions) => ({
    type: DIALOG_NOTHING_TO_SEE_HERE,
    data: actions
  }),
  dialogNothingExciting: (actions?: DialogActions) => ({
    type: DIALOG_NOTHING_EXCITING,
    data: actions
  })
};

// reducer
export const reducer = function(
  state: DialogState = {},
  action: {
    type:
      | "DIALOG_A_WILD_POKEMON_APPEARS"
      | "DIALOG_NOTHING_TO_SEE_HERE"
      | "DIALOG_NOTHING_EXCITING";
    data?: DialogActions;
  }
) {
  switch (action.type) {
    case DIALOG_A_WILD_POKEMON_APPEARS:
      return {
        ...state,
        content: "ahhh!!! un pokémon sauvage",
        actions: action.data
      };
    case DIALOG_NOTHING_TO_SEE_HERE:
      return {
        ...state,
        content: "il n'y a rien par ici",
        actions: action.data
      };
    case DIALOG_NOTHING_EXCITING:
      return {
        ...state,
        content: "rien... il ne se passe rien. mais qu'est-ce que je m'ennuie.",
        actions: action.data
      };
    default:
      return state;
  }
};
