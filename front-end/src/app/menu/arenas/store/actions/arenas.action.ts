import { createAction, props } from '@ngrx/store';
import { Arena } from '../../../models/arena';

export enum ArenasActionTypes {
  GET_ARENAS = '[All] Arenas',
  GET_ARENAS_SUCCESS = '[ALL] Arenas Success',
  GET_ARENAS_ERROR = '[All] Arenas Error'
}

// list arenas

export const arenasGetAll = createAction(ArenasActionTypes.GET_ARENAS);
export const arenasGetAllSuccess = createAction(ArenasActionTypes.GET_ARENAS_SUCCESS, props<{arenas: Arena[]}>());
export const arenasGetAllError = createAction(ArenasActionTypes.GET_ARENAS_ERROR, props<{err: Error}>());