import {  ActionReducer, MetaReducer } from '@ngrx/store';
import { from } from 'rxjs';
import {  State } from '../../store/reducers/login.reducers';
import { LoginActionTypes } from '../actions/login.actions';

export function usersHook(): MetaReducer<State> {
 return (actionreducer: ActionReducer<State, any>): ActionReducer<State, any> => {
    return (state:any, action) => {
      if (action.type !== undefined  && (action.type === LoginActionTypes.LOGOUT )){
        localStorage.clear()
        state = undefined;
      }
      else  if (action.type !== undefined  && (action.type === LoginActionTypes.GET_LOGIN_SUCCESS )){
        localStorage.setItem('tokendata',JSON.stringify(state?.tokendata))
      }
      return actionreducer(state, action);
    };
  };
}