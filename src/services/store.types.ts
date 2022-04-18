import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { rootReducer } from "./reducers";
import { TNetworksActions } from "./actions/networks";

export type RootState = ReturnType<typeof rootReducer>;

export type TApplicationActions = TNetworksActions;

export type AppDispatch = Dispatch<TApplicationActions>;

export type AppThunk = ThunkDispatch<RootState, any, TApplicationActions>;

// export type AppThunk<TReturn = void> = ActionCreator<
//   ThunkAction<TReturn, Action, RootState, TApplicationActions>
// >;