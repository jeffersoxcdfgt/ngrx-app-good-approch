import { createAction, props } from '@ngrx/store';
import { Login,ResponseLogin } from '../../model/login';

export enum LoginActionTypes {
  GET_LOGIN = '[All token information] get the information token',
  GET_LOGIN_SUCCESS = '[All token information success] get the information token successfully',
  GET_LOGI_ERROR = '[All token information error] get the information token error',
}

// Action get token information

export const getTokenData = createAction(LoginActionTypes.GET_LOGIN, props<{request: Login} >());
export const getTokenDataSuccess = createAction(LoginActionTypes.GET_LOGIN_SUCCESS, props<{response: ResponseLogin}>());
export const getTokenDataError = createAction(LoginActionTypes.GET_LOGI_ERROR, props<{err: Error}>());

