import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { rootReducer } from "./reducers";
import { TNetworksActions } from "./actions/networks";
import { TStationsActions } from "./actions/stations";
import { store } from "./store";

declare module 'redux' {
  export interface Dispatch<A extends Action = AnyAction> {
      <T extends ThunkAction<any, any, any, any>>(action: T): T extends ThunkAction<infer K, any, any, any> ? K : never;
  }
}

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;

export type TApplicationActions = TNetworksActions | TStationsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;