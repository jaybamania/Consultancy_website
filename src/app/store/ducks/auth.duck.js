import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
};

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

export const reducer = persistReducer(
  { storage, key: "auth", whitelist: ["user", "authToken"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken, user } = action.payload;

        return { authToken, user };
      }
      case actionTypes.Logout: {
        return initialAuthState;
      }
      default:
        return state;
    }
  }
);

export const actions = {
  login: (authToken, user) => ({
    type: actionTypes.Login,
    payload: { authToken, user },
  }),
  logout: () => ({ type: actionTypes.Logout }),
};
