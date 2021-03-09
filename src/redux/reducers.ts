import { combineReducers } from "redux";

import programs from "@redux/slices/programs";

const rootReducer = combineReducers({ programs });

export default rootReducer;
