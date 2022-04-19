import { Dispatch } from "redux";

import * as constants from "../constants/stations";
import { apiGetStations } from "../utils/api";
import { TStationsNetworkInfo } from "../utils/types";

export interface IStationsRequest {
  readonly type: typeof constants.STATIONS_REQUEST;
}

export interface IStationsError {
  readonly type: typeof constants.STATIONS_ERROR;
  readonly payload: string;
}

export interface IStationsSuccess {
  readonly type: typeof constants.STATIONS_SUCCESS;
  readonly payload: TStationsNetworkInfo;
}

export type TStationsActions =
  | IStationsRequest
  | IStationsError
  | IStationsSuccess;

export const getStationsInfo = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: constants.STATIONS_REQUEST } as IStationsRequest);
    apiGetStations(
      id,
      (result) => {
        dispatch({
          type: constants.STATIONS_SUCCESS,
          payload: result,
        } as IStationsSuccess);
      },
      (error) => {
        dispatch({
          type: constants.STATIONS_ERROR,
          payload: error,
        } as IStationsError);
      }
    );
  };
};
