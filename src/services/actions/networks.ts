import { Dispatch } from "redux";

import * as constants from "../constants/networks";
import { apiGetNetworks } from "../utils/api";
import { TFilteredCompanies, TNetworksSuccessPayload } from "../utils/types";

export interface INetworksRequest {
  readonly type: typeof constants.NETWORKS_REQUEST;
}

export interface INetworksError {
  readonly type: typeof constants.NETWORKS_ERROR;
  readonly payload: string;
}

export interface INetworksSuccess {
  readonly type: typeof constants.NETWORKS_SUCCESS;
  readonly payload: TNetworksSuccessPayload;
}

export interface INetworksSetActive {
  readonly type: typeof constants.NETWORKS_SETACTIVE;
  readonly payload: string;
}

export type TNetworksActions =
  | INetworksRequest
  | INetworksError
  | INetworksSuccess
  | INetworksSetActive;

export const getNetworksList = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: constants.NETWORKS_REQUEST } as INetworksRequest);
    apiGetNetworks(
      (result) => {
        const filtered: TFilteredCompanies = {};
        try {
          result.networks.forEach((item) => {
            if (item && item.company) {
              if (typeof item.company === "string") {
                filtered[item.company] = item.id;
              } else {
                item.company.forEach((company) => {
                  if (filtered[company] === undefined) {
                    filtered[company] = item.id;
                  }
                });
              }
            }
          });
        } catch (error) {
          dispatch({
            type: constants.NETWORKS_ERROR,
            payload: "Error API Data parsing",
          } as INetworksError);
        }
        dispatch({
          type: constants.NETWORKS_SUCCESS,
          payload: { raw: result.networks, companies: filtered },
        } as INetworksSuccess);
      },
      (error) => {
        dispatch({
          type: constants.NETWORKS_ERROR,
          payload: error,
        } as INetworksError);
      }
    );
  };
};

export const setActiveNetwork = (network: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: constants.NETWORKS_SETACTIVE,
      payload: network,
    } as INetworksSetActive);
  };
};
