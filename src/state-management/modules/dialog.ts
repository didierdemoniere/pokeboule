// actions types
const DIALOG_A_WILD_POKEMON_APPEARS = "DIALOG_A_WILD_POKEMON_APPEARS" as "DIALOG_A_WILD_POKEMON_APPEARS";
const DIALOG_NOTHING_TO_SEE_HERE = "DIALOG_NOTHING_TO_SEE_HERE" as "DIALOG_NOTHING_TO_SEE_HERE";
const DIALOG_NOTHING_EXCITING = "DIALOG_NOTHING_EXCITING" as "DIALOG_NOTHING_EXCITING";
const DIALOG_POKEBALL_LOST = "DIALOG_POKEBALL_LOST" as "DIALOG_POKEBALL_LOST";
const DIALOG_SUCCESSFUL_CATCH = "DIALOG_SUCCESSFUL_CATCH" as "DIALOG_SUCCESSFUL_CATCH";

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
    actions
  }),
  dialogNothingToSeeHere: (actions?: DialogActions) => ({
    type: DIALOG_NOTHING_TO_SEE_HERE,
    actions
  }),
  dialogNothingExciting: (actions?: DialogActions) => ({
    type: DIALOG_NOTHING_EXCITING,
    actions
  })
};

// reducer
export const reducer = function(
  state: DialogState = {},
  action:
    | {
        type:
          | "DIALOG_A_WILD_POKEMON_APPEARS"
          | "DIALOG_NOTHING_TO_SEE_HERE"
          | "DIALOG_NOTHING_EXCITING"
          | "DIALOG_POKEBALL_LOST";
        actions?: DialogActions;
      }
    | { type: "DIALOG_SUCCESSFUL_CATCH"; actions?: DialogActions; data: any }
) {
  switch (action.type) {
    case DIALOG_A_WILD_POKEMON_APPEARS:
      return {
        ...state,
        content: "ahhh!!! un pokémon sauvage",
        actions: action.actions
      };
    case DIALOG_NOTHING_TO_SEE_HERE:
      return {
        ...state,
        content: "il n'y a rien par ici",
        actions: action.actions
      };
    case DIALOG_NOTHING_EXCITING:
      return {
        ...state,
        content: "rien... il ne se passe rien. mais qu'est-ce que je m'ennuie.",
        actions: action.actions
      };
    case DIALOG_POKEBALL_LOST:
      return {
        ...state,
        content: "et une pokéball de perdu, une.",
        actions: action.actions
      };
    case DIALOG_SUCCESSFUL_CATCH:
      return {
        ...state,
        content: `Youpiiiii!!! j'ai capturé un ${action.data.name}`,
        actions: action.actions
      };
    default:
      return state;
  }
};
