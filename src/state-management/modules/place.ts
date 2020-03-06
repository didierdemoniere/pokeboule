// actions types
const GOTO = "GOTO" as "GOTO";

// state type
type Place = "home" | "woods";

// action creators
export const actionCreators = {
  goto: (place: Place) => ({ type: GOTO, data: place })
};

// reducer
export const reducer = function(
  state: Place = "home",
  action: { type: "GOTO"; data: Place }
) {
  switch (action.type) {
    case GOTO:
      return action.data;
    default:
      return state;
  }
};
