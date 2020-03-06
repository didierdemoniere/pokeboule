/**
 * generate a random number between 2 bounds
 * @param from
 * @param to
 */
export function randomIntegerBetween(from: number, to: number) {
  return Math.floor(Math.random() * to) + from;
}

/**
 * generate a random boolean sometimes true sometimes false
 */
export function generateRandomBoolean() {
  return !!Math.round(Math.random());
}

/**
 * a middleware modifier it only apply it's middleware on speciic action types
 */
export function onActionTypes(
  actions: string[],
  middleware: (store) => (next: (action) => any) => (action) => any
) {
  return store => {
    const midlewareWithStore = middleware(store);
    return next => action => {
      if (actions.indexOf(action.type) !== -1) {
        return midlewareWithStore(next)(action);
      }
      return next(action);
    };
  };
}
