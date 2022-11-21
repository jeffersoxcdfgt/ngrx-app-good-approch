import { createFeature ,createFeatureSelector , createSelector, on , createReducer , Action  } from '@ngrx/store';
import { Login,ResponseLogin } from '../../model/login';
import * as TokenActions from '../actions/login.actions';
import * as storage from '../../utils/storage';


export interface State {
  requestdata: Login | null;
  responsedata: ResponseLogin | null;
  error?: Error | null;
}

export const getTokenUser = () =>{
  if(!!localStorage.getItem('tokendata')){
    const value = JSON.parse(localStorage.getItem('tokendata') ?? '')
    if(value){
      return value.requestdata
    }
  }
  return  storage.getItem('tokendata') ?? null
}

const initialState: State  = {
  requestdata: null,
  responsedata:getTokenUser(),
  error: null,
};


export const tokenReducer = createReducer(
  initialState,
  on(TokenActions.getTokenData, (state, { request }) => ({...state,requestdata:request })),
  on(TokenActions.getTokenDataSuccess, (state, { response }) => ({...state,responsedata: response})),
  on(TokenActions.getTokenDataError, (state, { err }) => ({ ...state,error: err })),
  on(TokenActions.logOutuser, (state) => ({ ...state})),
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
