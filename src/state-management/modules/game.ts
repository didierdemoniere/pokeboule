// actions types
const START_GAME = "START_GAME" as "START_GAME";

// action creators
export const actionCreators = {
  startGame: () => ({ type: START_GAME })
};

// reducer
export const reducer = function(state = false, action: { type: "START_GAME" }) {
  switch (action.type) {
    case START_GAME:
      return true;
    default:
      return state;
  }
};
