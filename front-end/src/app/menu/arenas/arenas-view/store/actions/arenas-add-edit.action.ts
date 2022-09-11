import { createAction, props } from '@ngrx/store';
import { Arena } from '../../../../models/arena';

export enum ArenaAddEditActionTypes {
  GET_ARENA_ADD = '[GET_ARENA_ADD] add arena row',
  GET_ARENA_ADD_SUCCESS = '[GET_ARENA_ADD_SUCCESS] add arena row successfuly',
  GET_ARENA_ADD_ERROR = '[GET_ARENA_ADD_ERROR] add arena row error',
}

// add row arena

export const arenaAddRow = createAction(ArenaAddEditActionTypes.GET_ARENA_ADD, props<{arenarow: Arena}>());
export const arenaAddRowSuccess = createAction(ArenaAddEditActionTypes.GET_ARENA_ADD_SUCCESS, props<{resultarena: number}>());
export const arenaAddRowError = createAction(ArenaAddEditActionTypes.GET_ARENA_ADD_ERROR, props<{err: Error}>());