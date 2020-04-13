import { combineReducers } from "redux";

import { searchReducer } from "./search/searchReducer";
import { robotsReducer } from "./robots/robotsReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  robots: robotsReducer,
});

export default rootReducer;
