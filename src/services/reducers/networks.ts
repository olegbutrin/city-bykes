import { Reducer } from "redux";
import * as constants from "../constants/networks";
import { TNetworksStore } from "../utils/types";
import { TNetworksActions } from "../actions/networks";

export const initialState: TNetworksStore = {
  request: false,
  error: "",
  raw: [],
  companies: {},
  active: "",
};

export const networksReducer: Reducer<TNetworksStore, TNetworksActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case constants.NETWORKS_REQUEST:
      return { ...state, request: true };
    case constants.NETWORKS_ERROR:
      return { ...state, request: false, error: action.payload };
    case constants.NETWORKS_SUCCESS:
      return {
        ...state,
        request: false,
        error: "",
        raw: action.payload.raw,
        companies: action.payload.companies,
        active: Object.keys(action.payload.companies).length
          ? Object.keys(action.payload.companies)[0]
          : "",
      };
    case constants.NETWORKS_SETACTIVE:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};
