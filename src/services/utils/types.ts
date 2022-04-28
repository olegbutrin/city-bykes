// ==== API ====

// NETWORKS

export type TFilteredCompanies = Record<string, string>;

export type TRawNetworkRow = {
  company: Array<string>;
  id: string;
};

export type TRawNetworks = {
  networks: Array<TRawNetworkRow>;
};

export type TStationRow = {
  empty_slots: number;
  free_bikes: number;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  timestamp: string;
  extra: {
    address: string;
    status: {
      code: number;
      message: string;
      online: boolean;
    };
  };
};

export type TStationsNetworkInfo = {
  network: {
    href: string;
    id: string;
    name: string;
    location: {
      city: string;
      country: string;
      latitude: number;
      longitude: number;
    };
    stations: Array<TStationRow>;
    company: Array<string>;
  };
};

export type TApiCallback<T> = (result: T) => void;

export type TApiRequest<T, U> = (
  url: string,
  onSuccess: TApiCallback<T>,
  onError: TApiCallback<U>
) => void;

export type TApiNetworks = (
  onSuccess: TApiCallback<TRawNetworks>,
  onError: TApiCallback<string>
) => void;

export type TApiStations = (
  id: string,
  onSuccess: TApiCallback<TStationsNetworkInfo>,
  onError: TApiCallback<string>
) => void;

export type TNetworksSuccessPayload = {
  raw: Array<TRawNetworkRow>;
  companies: TFilteredCompanies;
};

// ==== STORES ===

// NETWORKS

export type TNetworksStore = {
  request: boolean;
  error: string;
  raw: Array<TRawNetworkRow>;
  companies: TFilteredCompanies;
  active: string;
};

export type TStationsStore = {
  request: boolean;
  error: string;
  raw: TStationsNetworkInfo | null;
};
