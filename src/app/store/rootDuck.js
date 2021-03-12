import { combineReducers } from "redux";

import * as auth from "./ducks/auth.duck";

export const rootReducer = combineReducers({
  auth: auth.reducer,
});
