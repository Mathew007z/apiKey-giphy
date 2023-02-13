import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
    crud: dataReducer,
    counter: counterReducer
})

