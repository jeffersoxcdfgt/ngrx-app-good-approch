import {  ActionReducer, MetaReducer } from '@ngrx/store';
import { from } from 'rxjs';
import {  State } from '../../store/reducers/login.reducers';
import { LoginActionTypes } from '../actions/login.actions';

export function usersHook(): MetaReducer<State> {
 return (actionreducer: ActionReducer<State, any>): ActionReducer<State, any> => {
    return (state, action) => {
      if (action.type !== undefined  && (action.type === LoginActionTypes.LOGOUT )){
        state = undefined;
      }
      return actionreducer(state, action);
    };
  };
}