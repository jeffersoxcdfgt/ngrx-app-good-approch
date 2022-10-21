import { createAction, props } from '@ngrx/store';

export enum PlayerDeleteActionTypes {
  DELETE_PLAYER = '[DELETE_PLAYER] delete player row',
  DELETE_PLAYER_SUCCESS = '[DELETE_PLAYER_SUCCESS] delete player row successfully',
  DELETE_PLAYER_ERROR = '[DELETE_PLAYER_ERROR] delete player row error',
}

// delete player row

export const playerDeleteRow = createAction(PlayerDeleteActionTypes.DELETE_PLAYER, props<{playerid: number}>());
export const playerDeleteRowSuccess = createAction(PlayerDeleteActionTypes.DELETE_PLAYER_SUCCESS, props<{playerdelete: any}>());
export const playerDeleteRowError = createAction(PlayerDeleteActionTypes.DELETE_PLAYER_ERROR, props<{err: Error}>());