import { createAction, props } from '@ngrx/store';

export enum ArenaDeleteActionTypes {
  DELETE_ARENA = '[DELETE_ARENA] delete arena row',
  DELETE_ARENA_SUCCESS = '[DELETE_ARENA_SUCCESS] delete arena row successfully',
  DELETE_ARENA_ERROR = '[DELETE_ARENA_ERROR] delete arena row error',
}

// delete arena row

export const arenaDeleteRow = createAction(ArenaDeleteActionTypes.DELETE_ARENA, props<{arenaid: number}>());
export const arenaDeleteRowSuccess = createAction(ArenaDeleteActionTypes.DELETE_ARENA_SUCCESS, props<{arenadelete: any}>());
export const arenaDeleteRowError = createAction(ArenaDeleteActionTypes.DELETE_ARENA_ERROR, props<{err: Error}>());