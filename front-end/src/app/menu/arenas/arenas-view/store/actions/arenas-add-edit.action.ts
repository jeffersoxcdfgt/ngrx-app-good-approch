import { createAction, props } from '@ngrx/store';
import { Arena } from '../../../../models/arena';

export enum ArenaAddEditActionTypes {
  GET_ARENA_ADD = '[GET_ARENA_ADD] add arena row',
  GET_ARENA_ADD_SUCCESS = '[GET_ARENA_ADD_SUCCESS] add arena row successfuly',
  GET_ARENA_UPDATE = '[GET_ARENA_UPDATE] update arena row',
  GET_ARENA_UPDATE_SUCCESS = '[GET_ARENA_UPDATE_SUCCESS] update arena row successfuly',
  GET_ARENA_ADD_EDIT_ERROR = '[GET_ARENA_ADD_ERROR] add arena row error',
}

// add row arena

export const arenaAddRow = createAction(ArenaAddEditActionTypes.GET_ARENA_ADD, props<{arenarow: Arena}>());
export const arenaAddRowSuccess = createAction(ArenaAddEditActionTypes.GET_ARENA_ADD_SUCCESS, props<{resultarena: number}>());
export const arenaUpdateRow = createAction(ArenaAddEditActionTypes.GET_ARENA_UPDATE, props<{arenarow: Arena}>());
export const arenaUpdateRowSuccess = createAction(ArenaAddEditActionTypes.GET_ARENA_UPDATE_SUCCESS, props<{resultarena: any}>());
export const arenaAddRowError = createAction(ArenaAddEditActionTypes.GET_ARENA_ADD_EDIT_ERROR, props<{err: Error}>());