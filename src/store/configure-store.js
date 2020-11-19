import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";

export const configureStore = () => {
  const composeEnchancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  });

  return createStore(rootReducer, composeEnchancers(applyMiddleware(thunk)));
};
