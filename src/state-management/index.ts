import { createStore } from "redux";
import * as rootModule from "./modules";

// reexport ours actions creators for later use
export const actionCreators = rootModule.actionCreators;

// create the store
export const store = createStore(rootModule.reducer);

export type AppState = ReturnType<typeof rootModule.reducer>;

store.subscribe(() => console.log(store.getState()));
