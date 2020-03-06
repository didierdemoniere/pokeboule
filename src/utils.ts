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

/**
 * recursively map an object
 * @note recursive function are reaaaallllyyyyy slow
 * performance is not an issue here but it may be in real applications
 *
 * @param obj
 */
export function mapObjectToList(
  obj,
  fn: (key, value) => any,
  wrap: (key, result) => any = result => result
) {
  if (!obj) {
    return obj;
  }
  if (obj.constructor === Object) {
    return Object.keys(obj).map(key =>
      wrap(key, fn(key, mapObjectToList(obj[key], fn, wrap)))
    );
  } else if (Array.isArray(obj)) {
    return obj.map((child, id) => wrap(id, mapObjectToList(child, fn, wrap)));
  } else {
    return obj;
  }
}
