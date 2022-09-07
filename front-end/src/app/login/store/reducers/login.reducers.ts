import { createFeatureSelector , createSelector, on , createReducer , Action  } from '@ngrx/store';
import { Login,ResponseLogin } from '../../model/login';
import * as TokenActions from '../actions/login.actions';
import * as storage from '../../utils/storage';


export interface State {
  requestdata: Login | null;
  responsedata: ResponseLogin | null;
  error?: Error | null;
}

const initialState: State  = {
  requestdata: null,
  responsedata: storage.getItem('tokendata','responsedata') !== null ? storage.getItem('tokendata','responsedata') : null,
  error: null
};

const tokenReducer = createReducer(
  initialState,
  on(TokenActions.getTokenData, (state, { request }) => ({...state,requestdata:request })),
  on(TokenActions.getTokenDataSuccess, (state, { response }) => ({...state,responsedata: response})),
  on(TokenActions.getTokenDataError, (state, { err }) => ({ ...state,error: err })),
);


export function reducer(state: State | undefined, action: Action): any{
  return tokenReducer(state, action);
}
export const getTokenState = createFeatureSelector < State > ('tokendata');


export const getTokenResponse = createSelector( getTokenState , ( state: State ) => {
  return !!state && !!state.responsedata ? state.responsedata : null;
});


export const errorTokenResponse = createSelector( getTokenState , (state: State) => {
      return  !!state && state?.error !== null
       ? state.error
       : null;
});
