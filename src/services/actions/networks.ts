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

export type TNetworksActions =
  | INetworksRequest
  | INetworksError
  | INetworksSuccess;

export const getNetworksList = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: constants.NETWORKS_REQUEST } as INetworksRequest);
    apiGetNetworks(
      (result) => {
        const filtered: TFilteredCompanies = {};
        result.networks.forEach((item) => {
          item.company.forEach((company) => {
            if (filtered[company] === undefined) {
              filtered[company] = item.id;
            }
          });
        });
        dispatch({
          type: constants.NETWORKS_SUCCESS,
          payload: { raw: result.networks, companies: filtered },
        } as INetworksSuccess);
      },
      (result) => {
        dispatch({
          type: constants.NETWORKS_ERROR,
          payload: result,
        } as INetworksError);
      }
    );
  };
};
