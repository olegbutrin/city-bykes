import { Reducer } from "redux";
import * as constants from "../constants/stations";
import { TStationsStore } from "../utils/types";
import { TStationsActions } from "../actions/stations";

export const initialState: TStationsStore = {
  request: false,
  error: "",
  raw: null,
};

export const stationsReducer: Reducer<TStationsStore, TStationsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case constants.STATIONS_REQUEST:
      return { ...state, request: true };
    case constants.STATIONS_ERROR:
      return { ...state, request: false, error: action.payload };
    case constants.STATIONS_SUCCESS:
      return { ...state, request: false, error: "", raw: action.payload };
    default:
      return state;
  }
};
