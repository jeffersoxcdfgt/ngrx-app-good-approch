import { createAction, props } from '@ngrx/store';
import { Player } from '../../../../models/player';

export enum PlayerAddEditActionTypes {
  GET_PLAYER_ADD = '[GET_PLAYER_ADD] add player row',
  GET_PLAYER_ADD_SUCCESS = '[GET_PLAYER_ADD_SUCCESS] add player row successfuly',
  GET_PLAYER_UPDATE = '[GET_PLAYER_UPDATE] update player row',
  GET_PLAYER_UPDATE_SUCCESS = '[GET_PLAYER_UPDATE_SUCCESS] update player row successfuly',
  GET_PLAYER_ADD_EDIT_ERROR = '[GET_PLAYER_ADD_EDIT_ERROR] add player row error',
}

// add row player

export const playerAddRow = createAction(PlayerAddEditActionTypes.GET_PLAYER_ADD, props<{playerrow: Player}>());
export const playerAddRowSuccess = createAction(PlayerAddEditActionTypes.GET_PLAYER_ADD_SUCCESS, props<{resultplayer: number}>());
export const playerUpdateRow = createAction(PlayerAddEditActionTypes.GET_PLAYER_UPDATE, props<{playerrow: Player}>());
export const playerUpdateRowSuccess = createAction(PlayerAddEditActionTypes.GET_PLAYER_UPDATE_SUCCESS, props<{resultplayer: any}>());
export const playerAddRowError = createAction(PlayerAddEditActionTypes.GET_PLAYER_ADD_EDIT_ERROR, props<{err: Error}>());