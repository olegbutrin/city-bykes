import { combineReducers } from "redux";
import { networksReducer } from "./networks";

export const rootReducer = combineReducers({ networks: networksReducer });
