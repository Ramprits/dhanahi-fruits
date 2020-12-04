import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from "./user/login.reducer";
import registerReducer from "./user/register.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser"],
};

const rootReducer = combineReducers({
  currentUser: loginReducer,
  user: registerReducer,
});

export default persistReducer(persistConfig, rootReducer);
