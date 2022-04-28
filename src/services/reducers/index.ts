import { combineReducers } from "redux";
import { networksReducer } from "./networks";
import { stationsReducer } from "./stations";

export const rootReducer = combineReducers({ networks: networksReducer, stations: stationsReducer });
