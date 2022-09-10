import { createAction, props } from '@ngrx/store';
import { Arena } from '../../../../models/arena';

export enum ArenaByIdActionTypes {
  GET_ARENA_BY_ID = '[GET_ARENA_BY_ID] Get arena by id',
  GET_ARENA_BY_ID_SUCCESS = '[GET_ARENA_BY_ID] Get arena by id successfuly',
  GET_ARENA_BY_ID_ERROR = '[GET_ARENA_BY_ID] Get arena by id error',
}

// get arena by id

export const arenaGetById = createAction(ArenaByIdActionTypes.GET_ARENA_BY_ID);
export const arenaGetByIdSuccess = createAction(ArenaByIdActionTypes.GET_ARENA_BY_ID_SUCCESS, props<{arenabyid: Arena}>());
export const arenaGetByIdError = createAction(ArenaByIdActionTypes.GET_ARENA_BY_ID_ERROR, props<{err: Error}>());