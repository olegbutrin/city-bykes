import {
  TApiRequest,
  TApiNetworks,
  TApiStations,
  TStationsNetworkInfo,
  TRawNetworks,
  TApiCallback,
} from "./types";

const API_URL = "https://api.citybik.es";
const NETWORKS_REQUEST = "/v2/networks?fields=id,company";
const STATIONS_REQUEST = "/v2/networks/";

const apiRequest = (
  url: string,
  onSuccess: TApiCallback<any>,
  onError: TApiCallback<any>
) => {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Request failed: " + res.statusText);
      }
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error: Error) => {
      onError(error.message);
    });
};

const apiGetNetworks: TApiNetworks = (onSuccess, onError) => {
  const api = apiRequest as TApiRequest<TRawNetworks, string>;
  api(API_URL + NETWORKS_REQUEST, onSuccess, onError);
};

const apiGetStations: TApiStations = (id, onSuccess, onError) => {
  const api = apiRequest as TApiRequest<TStationsNetworkInfo, string>;
  api(API_URL + STATIONS_REQUEST + id, onSuccess, onError);
};

export { apiGetNetworks, apiGetStations };
